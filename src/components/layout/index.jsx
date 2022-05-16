import NavBar from "../navbar";

import "./index.scss";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="container">{children}</main>
    </>
  );
}

export default Layout;
