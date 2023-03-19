import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (propertirs1123123) => {
  return (
    <>
      <Navbar />
      {propertirs1123123.children}
      <Footer />
    </>
  );
};

export default Layout;
