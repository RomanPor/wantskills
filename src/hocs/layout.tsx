import React, {Fragment} from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import OffcanvasMenu from "../components/offcanvas-menu/offcanvas-menu";

const Layout: React.FC<React.ReactNode> = (props) => {
  return (
      <Fragment>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
          <OffcanvasMenu />
      </Fragment>
  );
};

export default Layout;
