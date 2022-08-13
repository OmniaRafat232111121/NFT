
  return (
    <nav>
    <div className="brand-container">
      <div className="brand">
        <img src={logo} alt="logo" />
      </div>
      <div className="toggle-container">
        <div className="toggle">
          {navState ? (
            <MdClose onClick={() => setNavState(false)} />
          ) : (
            <GiHamburgerMenu onClick={() => setNavState(true)} />
          )}
        </div>
        <div className="mode" onClick={changeTheme}>
          {currentTheme === "dark" ? (
            <ImSun className="light" />
          ) : (
            <BsFillMoonFill className="dark" />
          )}
        </div>
      </div>
    </div>
    <div className={`links-container ${navState ? "nav-visible" : ""}`}>
      <ul className="links">
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#launch">Launch</a>
        </li>
        <li>
          <a href="#signup">Sign Up</a>
        </li>
        <li onClick={changeTheme}>
          {currentTheme === "dark" ? (
            <ImSun className="light" />
          ) : (
            <BsFillMoonFill className="dark" />
          )}
        </li>
      </ul>
    </div>
  </nav>
  );
}