import { useEffect, useState } from 'react';
import './App.css';
import Categories from './Components/Categories';
import LandingPage from './Components/LandingPage';
import AllProducts from './Components/AllProducts';
import SingleProduct from './Components/SingleProduct';


function App() {
  const [whichPageIsShowing, setWhichPageIsShowing] = useState('landingPage');
  const [product, setProduct] = useState('slides');

  useEffect(()=>{
    renderPage();
  },[whichPageIsShowing]);
  
  const renderPage = () => {
    switch (whichPageIsShowing) {
      case 'landingPage':
        return <LandingPage setWhichPageIsShowing={setWhichPageIsShowing} setProduct={setProduct}/>;
      case 'categoriesPage':
        return <Categories setWhichPageIsShowing={setWhichPageIsShowing}/>;
      case 'AllProducts':
        return <AllProducts setWhichPageIsShowing={setWhichPageIsShowing} setProduct={setProduct}/>
      case 'SingleProduct':
        return <SingleProduct setWhichPageIsShowing={setWhichPageIsShowing} product={product}/>
      default:
        return <LandingPage setWhichPageIsShowing={setWhichPageIsShowing}/>; // Default fallback to the landing page if no valid option
    }
  };

  return (
    <div className='app-main-div'>
      {renderPage()}
    </div>
  );
}

export default App;
