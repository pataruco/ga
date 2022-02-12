const accordionTitles = Array.from(document.querySelectorAll('dt'));

accordionTitles.forEach((accordionTitle) =>
  accordionTitle.addEventListener('click', openAccordion),
);

function closeAllAccordionsExcept(element) {
  const index = accordionTitles.indexOf(element);
  const filteredAccordionTitles = accordionTitles.filter(
    (accordionTitle, i) => {
      if (i !== index) {
        return accordionTitle;
      }
    },
  );

  filteredAccordionTitles.forEach((accordionTitle) => {
    accordionTitle.setAttribute('aria-expanded', false);
    accordionTitle.classList.remove('accordion-open');
  });
}

function openAccordion(event) {
  const currentTarget = event.currentTarget;

  let target;
  if (currentTarget.nodeName === 'DT') {
    target = currentTarget;
  } else {
    target = currentTarget.parentNode;
  }

  closeAllAccordionsExcept(target);
  target.classList.toggle('accordion-open');

  if (target.classList.contains('accordion-open')) {
    return target.setAttribute('aria-expanded', true);
  }
  return target.setAttribute('aria-expanded', false);
}
