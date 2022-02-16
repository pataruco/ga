// import 'https://remarkjs.com/downloads/remark-latest.min.js';
import 'normalize.css';
import '../styles/index.css';
import hackStyles from './hack-styles';

import { fewd } from '@shared/lessons';
import type { FEWDLesson } from '@shared/lessons';

const getLessonPath = (lessonName: FEWDLesson) => fewd[lessonName].default;

interface SlideSettings {
  count: boolean;
  highlightLines?: boolean;
  highlightSpans: boolean;
  highlightStyle: 'atom-one-dark' | string;
  navigation: {
    click: boolean;
    scroll: boolean;
    touch: boolean;
  };
  ratio: string;
  slideNumberFormat: string;
  source?: string | null;
  sourceUrl?: string;
}

const slideSettings: SlideSettings = {
  count: false,
  highlightLines: true,
  highlightSpans: true,
  highlightStyle: 'atom-one-dark',
  navigation: {
    click: false,
    scroll: false,
    touch: true,
  },
  ratio: '64:35', // browser aspect ratio
  slideNumberFormat: '',
};

const getSlidePath = async () => {
  const response = await fetch(document.location.href);
  const slidePath = response.headers.get('X-SLIDES_PATH');
  if (slidePath) {
    slideSettings.sourceUrl = getLessonPath('01-html-basics');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const slideshow = remark.create(slideSettings);
    hackStyles(slideshow);
  }
};

getSlidePath().then();
