import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Foot from './Components/Foot';
import Home from './Components/Home';

import Registration from './Components/Registration';
import Login from './Components/Login';
import About from './Components/About';
import Logout from './Components/Logout';
import AdminDash from './Components/Admin/AdminDash';
import AdminList from './Components/Admin/AdminList';
import AddAdmin from './Components/Admin/AddAdmin';
import ChangePassword from './Components/Admin/ChangePassword';
import UserList from './Components/Admin/UserList';
import AddUser from './Components/Admin/AddUser';
import AuctionDetails from './Components/Admin/AuctionDetails';
import PaymentDetails from './Components/Admin/PaymentDetails';
import PendingPDetails from './Components/Admin/PendingPDetails';
import ProductDetails from './Components/Admin/ProductDetails';
import SellerDetails from './Components/Admin/SellerDetails';
import UserComplain from './Components/Admin/UserComplain';
import ViewProfile from './Components/Admin/ViewProfile';
import UViewProfile from './Components/User/UViewProfile';
import CreateProduct from './Components/User/CreateProduct';
import ViewModel from './Components/User/ViewModel';
import ViewProduct from './Components/User/ViewProduct';
import CreateAuction from './Components/User/CreateAuction';
import ViewRegDetail from './Components/User/ViewRegDetail';
import BidDetails from './Components/User/BidDetails';
import MyAuction from './Components/User/MyAuction';
import UChangePass from './Components/User/UChangePass';
import AuctionProduct from './Components/User/AuctionProduct';
import CreateBid from './Components/User/CreateBid';
import CreatePayment from './Components/User/CreatePayment';
import MyBid from './Components/User/MyBid';
import MyPayment from './Components/User/MyPayment';
import GetPayment from './Components/User/GetPayment';

import CheckOTP from './Components/CheckOTP';
import ForgotPassword from './Components/ForgotPassword';
import UpdateComplain from './Components/Admin/UpdateComplain';

import UserDash from './Components/User/Dash';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <Router>
      
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path='/registration' element={<Registration />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/admindash' element={<AdminDash />} />
      <Route exact path='/adminlist' element={<AdminList />} />
      <Route exact path='/addadmin' element={<AddAdmin />} />
      <Route exact path='/userlist' element={<UserList />} />
      <Route exact path='/adduser' element={<AddUser />} />
      <Route exact path='/auctionDetails' element={<AuctionDetails />} />
      <Route exact path='/paymentDetails' element={<PaymentDetails />} />
      <Route exact path='/pendingPDetails' element={<PendingPDetails />} />
      <Route exact path='/productDetails' element={<ProductDetails />} />
      <Route exact path='/sellerDetails' element={<SellerDetails />} />
      <Route exact path='/userComplain' element={<UserComplain />} />
      <Route exact path='/aviewProfile' element={<ViewProfile />} />
      <Route exact path='/uviewProfile' element={<UViewProfile />} />
      <Route exact path='/createproduct' element={<CreateProduct />} />
      <Route exact path='/createauction' element={<CreateAuction />} />
      <Route exact path='/viewmodel' element={<ViewModel />} />
      <Route exact path='/viewproduct' element={<ViewProduct />} />
      <Route exact path='/viewreg' element={<ViewRegDetail />} />
      <Route exact path='/logout' element={<Logout />} />
      <Route exact path='/changepassword' element={<ChangePassword />} />
      <Route exact path='/forgotpassword' element={<ForgotPassword />} />
      <Route exact path='/updateComplain/:id' element={<UpdateComplain />} />
      <Route exact path='/checkotp' element={<CheckOTP />} />
      <Route exact path='/myauction' element={<MyAuction />} />
      <Route exact path='/biddetails' element={<BidDetails />} />
      <Route exact path='/auctionproduct' element={<AuctionProduct />} />
      <Route exact path='/createbid' element={<CreateBid />} />
      <Route exact path='/createPayment' element={<CreatePayment />} />
      <Route exact path='/mybid' element={<MyBid />} />
      <Route exact path='/mypayment' element={<MyPayment />} />
      <Route exact path='/getpayment' element={<GetPayment />} />
      <Route exact path='/uchangepass' element={<UChangePass />} />


      <Route exact path='/userdash' element={<UserDash />} />
      </Routes>
      <Foot/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
