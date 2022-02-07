import React, { useEffect } from 'react';
import '../styles/slide-index.scss';
const { PUBLIC_URL } = process.env;

interface SlidesDeckProps {
  slidesDeckName: string;
}

interface GetSlideIndex {
  (): number;
}

interface Slide {
  getSlideIndex: GetSlideIndex;
  notes: string;
  properties: {
    class: string;
    name: string;
  };
  content: string;
}

const slideNavigationClass = 'slide-navigation';

const deleteSlideNavigation = () =>
  document
    .querySelectorAll(`.${slideNavigationClass}`)
    .forEach((anchor) => anchor.remove());

const getAnchorProps = (pathname: string) => {
  const pageToNavigate = pathname.split('/')[1];
  const [firstWord, secondWord] = pageToNavigate.split('-');
  return {
    pageToNavigate,
    text: `${firstWord} ${secondWord}`,
  };
};

const createAnchor = () => {
  const { pathname } = window.location;

  const { pageToNavigate, text } = getAnchorProps(pathname);

  const anchor = document.createElement('a');
  anchor.classList.add(slideNavigationClass);
  anchor.setAttribute('href', `/${pageToNavigate}`);
  anchor.innerText = `back to ${text}`;

  return anchor;
};

const createSlideNavigation = (slide: Slide) => {
  const slideIndex = slide.getSlideIndex();

  const slideElements = document.querySelectorAll('.remark-slide-content');
  deleteSlideNavigation();
  if (slideElements) {
    const anchor = createAnchor();
    slideElements[slideIndex].appendChild(anchor);
  }
};

const SlidesDeck: React.FC<SlidesDeckProps> = ({ slidesDeckName }) => {
  useEffect(() => {
    // @ts-ignore
    const slides = remark.create({
      sourceUrl: `${PUBLIC_URL}/slides/${slidesDeckName}.md`,
      count: false,
      highlightLines: false,
      highlightSpans: true,
      highlightStyle: 'atom-one-dark',
      navigation: {
        click: false,
        scroll: false,
        touch: true,
      },
      ratio: '16:9',
      // ratio: '64:35', // browser aspect ratio
      slideNumberFormat: '',
    });

    // listening on slide show
    slides.on('showSlide', (slide: Slide) =>
      // Injecting navigation to menu
      createSlideNavigation(slide),
    );
  }, [slidesDeckName]);

  return null;
};

export default SlidesDeck;
