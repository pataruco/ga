const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const getTitleName = (string: string): string => {
  const title = string
    ?.split('/')
    ?.pop()
    ?.split('.')
    ?.shift()
    ?.split('-')
    ?.join(' ');

  return title ? capitalizeFirstLetter(title) : '';
};

export default getTitleName;
