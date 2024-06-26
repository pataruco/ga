import 'normalize.css';

import '../styles/site/index.scss';
import '../styles/slides/index.scss';

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
  // ratio: '64:35', // browser aspect ratio
  ratio: '16:9',
  slideNumberFormat: 'slide %current% of %total%',
  sourceUrl: './lesson.md',
};

//@ts-ignore
remark.create(slideSettings);
