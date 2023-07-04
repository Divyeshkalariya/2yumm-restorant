import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";
import "react-bootstrap-icons";
import "./assest/css/index.css";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'font-awesome/css/font-awesome.min.css';
import HomeApp from "./Componants/customer/pages/Home";
import AboutApp from "./Componants/customer/pages/About";
import MenuApp from "./Componants/customer/pages/Menu";
import ContactusApp from "./Componants/customer/pages/Contactus";
import BookingTableApp from './Componants/customer/pages/Bookingtable';
import PagenotfoundApp from './Componants/customer/Pagenotfound';
import LayoutApp from './Componants/customer/Layout';




export default function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          // <Route path='/' element={<LayoutApp />}>
            <Route path='/' element={<HomeApp />} />
            <Route path='/about' element={<AboutApp />} />
            <Route path='/bookingtable' element={<BookingTableApp />} />
            <Route path='/menu' element={<MenuApp />} />
            <Route path='/contactus' element={<ContactusApp />} />
            <Route path="*" element={<PagenotfoundApp />} />
        // </Route>
      </Routes>
    </BrowserRouter > */}
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LayoutApp/>}> */}
          <Route path='/2yumm-restaurant' element={<HomeApp />} />
          <Route path='/home' element={<HomeApp/>}/>
          <Route path="/about" element={<AboutApp/>} />
          <Route path="/bookingtable" element={<BookingTableApp />} />
          <Route path="/menu" element={<MenuApp />} />
          <Route path="/contactus" element={<ContactusApp />} />
          <Route path="*" element={<PagenotfoundApp />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}
