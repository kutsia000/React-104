import './Header.css';

const Header = ({ app = {} }) => {
  // if (!app) {
  //   return null;
  // }

  return (
    <>
      <header className="App-header">
        <h1>{app.title}</h1>
      </header>
      <h2 className="header__title">{app.subTitle}</h2>
    </>
  );
};

export default Header;
