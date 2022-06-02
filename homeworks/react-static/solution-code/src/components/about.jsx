const About = ({ about }) => {
  return (
    <section class="section" id="about">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-10 content">
            <h2 class="title">About</h2>

            {about.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
