import React from 'react';
import type { RoutesByWeek } from '../routes/config';
import { Link } from 'react-router-dom';

// TODO: change empty cell for a tooltip

const ResourcesPerWeekTableRow: React.FC<RoutesByWeek> = ({
  weekNumber,
  lesson1: { name: name1, path: path1 },
  lesson2: { name: name2, path: path2 },
  workshops,
  homework,
}) => {
  return (
    <tr>
      <td>
        <Link to={`week-${weekNumber}`}>{weekNumber}</Link>
      </td>
      <td>
        <Link to={path1}>{name1}</Link>
      </td>
      <td>
        <Link to={path2}>{name2}</Link>
      </td>
      <td>
        {workshops ? <Link to={workshops.path}>{workshops.name}</Link> : ''}
      </td>
      <td>{homework ? <Link to={homework.path}>{homework.name}</Link> : ''}</td>
    </tr>
  );
};

export default ResourcesPerWeekTableRow;
