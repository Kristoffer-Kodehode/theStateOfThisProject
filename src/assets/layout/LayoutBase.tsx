function Layout(properties) {
    const { children } = properties;
    return (
      <>
        <header>
          Don't look too close...
        </header>
        <main>{properties.children}</main>
        <footer>
          <p>By Some Idiot</p>
          <span>who is terrible at design</span>
        </footer>
      </>
    );
  }
  
  export default Layout;