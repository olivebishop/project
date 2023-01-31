
import Header from "./header/Header"
import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
// import loader from '../../assets/loader.gif'


function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 
    
    3000);

  }, []);

  return (
    <div className="home">
      {isLoading ? <Preloader /> :  <Header />}
    </div>
  );
}



export default Home;