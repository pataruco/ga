// get the first .artist and change the innerHTML to your name
const artists = Array.from(document.querySelectorAll('.artist'));
const [artist] = artists;

// add the className new-class
artist.classList.add('new-class');

// add the className highlight
artist.classList.add('highlight');

// Loop through to add bright class on all artists
artists.forEach((artist) => {
  artist.classList.add('new-class');
  artist.classList.add('highlight');
});
