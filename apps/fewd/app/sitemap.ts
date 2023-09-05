import { MetadataRoute } from 'next';
import { BASE_URL } from '../utils/metadata';

import { bonusLessons } from '../curriculum/bonus-lessons';
import { lessons } from '../curriculum/lessons';
import { routesByWeek } from '../curriculum/weeks';

const weeksNumberSiteMap = routesByWeek.map(({ weekNumber }) => ({
  url: `${BASE_URL}/weeks/${weekNumber}`,
  lastModified: new Date(),
}));

const lessonsSiteMap = lessons.map(({ link }) => ({
  url: `${BASE_URL}/lessons/${link}`,
  lastModified: new Date(),
}));

const bonusLessonsSiteMap = bonusLessons.map(({ link }) => ({
  url: `${BASE_URL}/bonus-lessons/${link}`,
  lastModified: new Date(),
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/final-project`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
  ].concat(weeksNumberSiteMap, lessonsSiteMap, bonusLessonsSiteMap);
}
