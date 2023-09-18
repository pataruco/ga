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
    text: `${firstWord} ${secondWord ?? ''}`,
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

const deleteDuplicates = () => {
  [
    '.remark-notes-area',
    '.remark-slides-area',
    '.remark-preview-area',
    '.remark-backdrop',
    '.remark-pause',
    '.remark-help',
    '.remark-visible',
  ].map((classSelector) => {
    const remarkElements = Array.from(document.querySelectorAll(classSelector));
    if (remarkElements.length > 1) {
      remarkElements.splice(1).map((element) => element.remove());
    }
  });
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

export const instantiateSlides = (slidesDeckPath: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const slides = window.remark.create({
    sourceUrl: slidesDeckPath,
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
    // slideNumberFormat: 'Slide %current% of %total%',
    slideNumberFormat: '%current%',
  });

  // listening on slide show
  slides.on('showSlide', (slide: Slide) => {
    deleteDuplicates();
    createSlideNavigation(slide);
  });
};
