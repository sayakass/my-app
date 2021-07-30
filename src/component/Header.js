import Menu from './Menu';

function Header() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <img src="https://picsum.photos/30/30" alt="My Logo" />
      </div>
      <Menu />
    </div>
  );
}

export default Header;
