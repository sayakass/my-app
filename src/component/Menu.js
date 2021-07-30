function Menu() {
  return (
    <>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0 }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </>
  );
}

export default Menu;
