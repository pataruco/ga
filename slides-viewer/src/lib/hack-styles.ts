// Helper to set class .logo in the middle of the page
const setLogoOnTheCenter = () => {
  const ps = document.querySelectorAll('p');

  ps.forEach((p) => {
    const children = Array.from(p.children);
    const hasLogo = children.some((element) =>
      element.classList.contains('logo'),
    );

    if (hasLogo) {
      p.style.maxWidth = '100%';
    }
  });
};

const hackStyles = (slideshow: any) => {
  slideshow.on('afterShowSlide', () => {
    setLogoOnTheCenter();
  });
};

export default hackStyles;
