
import './App.css';
// import Navbar from './component/web/Navbar';
// import Sidebar from './component/web/Sidebar';
// import Footer from './component/web/Footer';
// import Search from './component/Todo/Search';
// import Button from './component/Todo/Button';
// import List from './component/Todo/List';
// import Header from './component/bootrapweb/Header';
// import Main from './component/bootrapweb/Main';
// import Footer from './component/bootrapweb/Footer';
// import Task1 from './component/Task/Task1';
import Home from './component/Routing/Home';
import Nav from './component/Routing/Nav';
function App() {
  return (
    <>
      {/* <div>
      <Navbar />
      <div className='col-3'>
        <Sidebar />
      </div>
      <Footer />
    </div> */}

      {/* <div className='conatiner'>
        <div className='col-3'>
          <Search />
          <Button />
        </div>
      </div>

      <List /> */}
      {/* <div>
        <Header />
        <Main />
        <Footer />

      </div> */}
      {/* <div>
        <Task1 />

      </div> */}

      <Home />
      <Nav />
    </>




  );
}

export default App;
