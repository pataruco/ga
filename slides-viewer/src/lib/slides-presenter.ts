import 'normalize.css';
import '@shared/styles/dist/slides';

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

const main = async () => {
  const response = await fetch(document.location.href);
  const slidePath = response.headers.get('X-SLIDES_PATH');
  if (slidePath) {
    const path = slidePath.split('/src').pop();
    slideSettings.sourceUrl = `http://localhost:3000/src/${path}`;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    remark.create(slideSettings);
  }
};

main()
  .then()
  .catch((error) => console.error(error));
