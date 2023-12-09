'use client';

import 'normalize.css';
import '../../../styles/site/index.scss';
import './style.scss';

import MainLayout from 'apps/fewd/components/main-layout';
import { memo, useState } from 'react';

const currentYear = new Date().getFullYear();

const years = Array.from({ length: 80 }, (_, i) => currentYear - i - 15);

const options = years.map((year) => (
  <option value={year} key={year}>
    {year}
  </option>
));

const randomYear = (year: number) =>
  Math.floor(Math.random() * (currentYear - year + 1)) + year;

async function Index() {
  const [year, setYear] = useState<number | undefined>(undefined);
  const yearId = 'years';

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target as HTMLFormElement);
    setYear(Number(formData.get(yearId)));
  };

  return (
    <MainLayout>
      <h1>Random year generator</h1>

      <form onSubmit={handleOnSubmit}>
        <label htmlFor={yearId}>Select your year of birth</label>
        <select name={yearId} id={yearId}>
          {options}
        </select>
        <button type="submit">Enter</button>
      </form>

      {year ? (
        <p>
          Tell us a highlight from your life that happened in the year:{' '}
          <strong> {randomYear(year)}</strong>
        </p>
      ) : null}
    </MainLayout>
  );
}

export default memo(Index);