import Link from 'next/link';
import React from 'react';
import type { RoutesByWeek } from '../@types/routes';

const ResourcesPerWeekTableRow: React.FC<RoutesByWeek> = ({
  weekNumber,
  lesson1: { name: name1, path: path1 },
  lesson2: { name: name2, path: path2 },
  homework,
}) => {
  return (
    <tr>
      <td>
        <Link href={`week-${weekNumber}`}>{weekNumber}</Link>
      </td>
      <td>
        <Link href={path1}>{name1}</Link>
      </td>
      <td>
        <Link href={path2}>{name2}</Link>
      </td>
      <td>
        {homework ? <Link href={homework.path}>{homework.name}</Link> : ''}
      </td>
    </tr>
  );
};

export default ResourcesPerWeekTableRow;
