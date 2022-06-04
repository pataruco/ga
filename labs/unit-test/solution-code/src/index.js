export const fizzbuzz = (number) => {
  switch (true) {
    case number % 5 === 0 && number % 3 === 0:
      return 'fizzbuzz';
    case number % 5 === 0:
      return 'buzz';
    case number % 3 === 0:
      return 'fizz';
    default:
      return number;
  }
};
