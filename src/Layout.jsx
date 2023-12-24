
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/Fotter/Footer.jsx';
import Menu from './components/Menu/Menu.jsx';




const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        <div className="menu">
          <div className="mainmenu">
            <Menu />
          </div>
          <div className="container">
            {children}
          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export { Layout };
  