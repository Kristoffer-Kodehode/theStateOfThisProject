import { ReactNode } from "react";

function Layout(properties: { children: ReactNode }) {
  const { children } = properties;
  return (
    <>
      <header>Don't look too close...</header>
      <main>{children}</main>
      <footer>
        <p>By Some Idiot</p>
        <span>who is terrible at design</span>
      </footer>
    </>
  );
}

export default Layout;
