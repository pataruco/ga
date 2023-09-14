export interface LessonRoute {
  name: string;
  path: string;
  element: () => JSX.Element;
}

export interface RoutesByWeek {
  weekNumber: number;
  lesson1: LessonRoute;
  lesson2: LessonRoute;
  workshops?: {
    name: string;
    path: string;
  };
  homework?: {
    name: string;
    path: string;
  };
  resources?: string[][];
  bonuses?: string[][];
}
