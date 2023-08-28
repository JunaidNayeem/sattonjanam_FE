import React, { useContext } from 'react';
import BreadcrumbComponent from '../Components/BreadCrumb';
import CarouselBanner from '../Components/CarouselBanner';
import AboutInfo from '../Components/AboutInfo';
import ProfileCard from '../Components/ProfileCard';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HomeServices from '../Components/HomeServices';
import HomeSuccess from '../Components/HomeSuccess';
import ConnectWithUs from '../Components/ConnectWithUs';
import EnquireNow from '../Components/EnquireNow';
import EnquireForm from '../Components/EnquireForm';
import { GlobalContext } from '../GlobalContext';

const HomePage = () => {
  // const context = useContext(GlobalContext)

  // const [isLogged] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
  // const [isUser] = context.useAuth.isUser ? context.useAuth.isUser : false;
  // const [user] = context.useAuth.user ? context.useAuth.user : false;
  const breadcrumbPaths = [
    { name: 'Home' },
  ];

  return (
    <>
      <Navbar/>
      <div>
        <BreadcrumbComponent paths={breadcrumbPaths} />
      </div>
      <CarouselBanner/>
      <EnquireNow>
        <EnquireForm/>
      </EnquireNow>
      <ProfileCard/>
      
      <HomeServices/>
      <AboutInfo/>
      <HomeSuccess/>
      <ConnectWithUs/>
      <Footer/>
      
    </>
  );
};

export default HomePage;