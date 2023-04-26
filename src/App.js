import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header/Header';

import { Home } from './pages/home-page/Home';
import MyAuctions from './pages/my-auctions/MyAuctions';
import { ContactUs } from './pages/contact-us/ContactUs';
import { AboutUs } from './pages/about-us/AboutUs';
import { PropertyDetails } from './pages/property-details/PropertyDetails';
import PrivateTreaty from './pages/private-treaty/PrivateTreaty';
import MyComponent from './testFilters/prop';
import { Footer } from './components/Footer/Footer';
import BiddingForm from './pages/bidding-form/BiddingForm';
import LiveAuction from './pages/live-auction/LiveAuction';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

import UpcomingAuctions from './pages/upcoming-auctions/UpcomingAuctions';
import { useEffect } from 'react';
import CryptoJS from 'crypto-js';
import { useDispatch } from 'react-redux';
import { login } from './store/slices/UserSlice';
import Dashboard from './pages/dashboard/Dashboard';







function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedEncryptedToken = localStorage.getItem('token');
    const SecretKey = process.env.REACT_APP_SECRETE_KEY;
    if (storedEncryptedToken) { // null check
      const decryptedTokenBytes = CryptoJS.AES.decrypt(storedEncryptedToken, SecretKey);
      const token = decryptedTokenBytes.toString(CryptoJS.enc.Utf8);
      if (token)
        dispatch(login({ token }));
    }
  }, []);


  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Navigate to="/upcoming-auctions" />} /> */}
        <Route path='/upcoming-auctions' element={<UpcomingAuctions />} />
        <Route path='/live-auction' element={<LiveAuction />} />
        <Route path='/my-auctions' element={<MyAuctions />} />
        <Route path='/private-treaty' element={<PrivateTreaty />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        {/* <Route path="/property/:propertyTitle" element={<PropertyDetails/>}/> */}
        <Route path="/property/:propertyId/:propertyTitle" element={<PropertyDetails />} />
        <Route path='/test' element={<MyComponent />} />
        <Route path='/bidder-detaills/:propertyId' element={<BiddingForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/my-account' element={<Dashboard/>}/>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
