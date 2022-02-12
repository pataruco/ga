const anchors = Array.from(document.querySelectorAll('header nav ul li a'));

anchors.forEach((anchor) => {
  return anchor.addEventListener('click', navigateToSection);
});

function navigateToSection(event) {
  event.preventDefault();
  const { currentTarget } = event;
  const sectionId = currentTarget.getAttribute('href');
  const elementToGo = document.querySelector(sectionId);
  elementToGo.scrollIntoView({
    behavior: 'smooth',
  });
}
