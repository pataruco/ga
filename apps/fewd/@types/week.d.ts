interface Anchor {
  link: string;
  content: string;
}

interface Week {
  weekNumber: number;
  lesson1: Anchor;
  lesson2: Anchor;
  homework: Anchor | null;
  resources?: Anchor[];
  bonuses?: Anchor[];
}
