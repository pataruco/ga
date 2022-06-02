const Menu = ({ menus }) => {
  return (
    <section class="section" id="menus">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-10 content">
            <h2 class="title">Menu</h2>

            {menus.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {menus.links.map((a, i) => (
              <a key={`${i}-${a}`} href="a">
                {a}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
