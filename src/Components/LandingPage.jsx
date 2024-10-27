import React, { useEffect, useState } from 'react'
import '../LandingPage.css'
import hoursWatch from './Media/time-watch.jpg'
import leatherBag from './Media/leather-bag.jpg'
import bootsImage from './Media/walking-boots.png'
import watchImage from './Media/watch.jpg'

const LandingPage = ({setWhichPageIsShowing, setProduct}) => {
    const [latestProducts, setLatestProducts] = useState([]);
    const [isHovered, SetIsHovered] = useState([]);

    const imgDivStyle = {
        width: '100%',
        height: '100vh',
        minHeight: '70vh',
        objectFit: 'cover',
    }

    const iconStyling = {
        marginLeft: '10px',
        marginRight: '10px',
        fontSize: '30px',
        transform: isHovered && 'scale(1.09)'
    }

    useEffect(() => {
        const get10LatestProducts = async () => {
            try {
                const request = await fetch('https://mock.shop/api?query={products(first:%2010,%20sortKey:%20CREATED_AT,%20reverse:%20true){edges%20{node%20{id%20title%20description%20createdAt%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%201){edges%20{node%20{price%20{amount}}}}}}}}');
                const response = await request.json();
                console.log(response);
                setLatestProducts(response.data.products.edges)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        get10LatestProducts();
    }, []);

  return (
    <div className='landing-page-main-div'>
      {/* <nav className="nav-div">
        <h2 className='logo'></h2>
      </nav> */}

      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel"
        style={
            {
                width: '100%',
                height: '10vh',
            }
        }
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img loading='lazy' src={hoursWatch} className="d-block" alt="First slide" style={imgDivStyle}/>
            <div className="carousel-caption d-none d-md-block">
            <div className='collection-nav' 
                style={
                    {
                        height: '100px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        background: 'transparent',
                        color: 'white',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                        // boxShadow: '0 10px 15px rgba(0, 0, 0, 0.4), 0 20px 30px rgba(0, 0, 0, 0.4), 0 30px 45px rgba(0, 0, 0, 0.4), 0 40px 60px rgba(0, 0, 0, 0.4)',
                    }
                }
              >
                <div className='nav-button' onClick={()=>setWhichPageIsShowing('categoriesPage')}>
                <span class="material-symbols-outlined">
                transition_dissolve
                </span>
                    Collections
                </div>
                <div className='nav-button' onClick={()=>setWhichPageIsShowing('AllProducts')}>
                <span class="material-symbols-outlined">
                place_item
                </span>
                    Products
                </div>
              </div>
              <div className='carousal-text'>
                <h3>At CottonOn</h3>
                <p>Get all you need and more from our our store. with free delivery</p>
              </div>
              <h5 className='slide-button' onClick={()=>setWhichPageIsShowing('AllProducts')}>Shop now</h5>
              <p className='description'>Discover timeless elegance and unparalleled quality at our clothing store</p>
            </div>
          </div>
          <div className="carousel-item">
            <img loading='lazy' src={leatherBag} className="d-block" alt="Second slide" style={imgDivStyle}/>
            <div className="carousel-caption d-none d-md-block">
            <div className='collection-nav' 
                style={
                    {
                        height: '100px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        background: 'transparent',
                        color: 'white',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                        // boxShadow: '0 10px 15px rgba(0, 0, 0, 0.4), 0 20px 30px rgba(0, 0, 0, 0.4), 0 30px 45px rgba(0, 0, 0, 0.4), 0 40px 60px rgba(0, 0, 0, 0.4)',
                    }
                }
              >
                <div className='nav-button' onClick={()=>setWhichPageIsShowing('categoriesPage')}>
                <span class="material-symbols-outlined">
                transition_dissolve
                </span>
                    Collections
                </div>
                <div className='nav-button'>
                <span class="material-symbols-outlined">
                place_item
                </span>
                    Products
                </div>
              </div>
              <div className='carousal-text'>
                <h3>At CottonOn</h3>
                <p>Get all you need and more from our our store. with free delivery</p>
              </div>
              <h5 className='slide-button'>Shop Now</h5>
              <p className='description'>Discover timeless elegance and unparalleled quality at our clothing store</p>
            </div>
          </div>
          <div className="carousel-item">
            <img loading='lazy' src={bootsImage} className="d-block" alt="Third slide" style={imgDivStyle}/>
            <div className="carousel-caption d-none d-md-block">
            <div className='collection-nav' 
                style={
                    {
                        height: '100px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        background: 'transparent',
                        color: 'white',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                        // boxShadow: '0 10px 15px rgba(0, 0, 0, 0.4), 0 20px 30px rgba(0, 0, 0, 0.4), 0 30px 45px rgba(0, 0, 0, 0.4), 0 40px 60px rgba(0, 0, 0, 0.4)',
                    }
                }
              >
                <div className='nav-button' onClick={()=>setWhichPageIsShowing('categoriesPage')}>
                <span class="material-symbols-outlined">
                transition_dissolve
                </span>
                    Collections
                </div>
                <div className='nav-button'>
                <span class="material-symbols-outlined">
                place_item
                </span>
                    Products
                </div>
              </div>
              <div className='carousal-text'>
                <h3>At CottonOn</h3>
                <p>Get all you need and more from our our store. with free delivery</p>
              </div>
              <h5 className='slide-button'>Shop Now</h5>
              <p className='description'>Discover timeless elegance and unparalleled quality at our clothing store</p>
            </div>
          </div>
          <div className="carousel-item">
            <img loading='lazy' src={watchImage} className="d-block" alt="Fourth slide" style={imgDivStyle}/>
            <div className="carousel-caption d-none d-md-block">
              <div className='collection-nav' 
                style={
                    {
                        height: '100px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        background: 'transparent',
                        color: 'white',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                        // boxShadow: '0 10px 15px rgba(0, 0, 0, 0.4), 0 20px 30px rgba(0, 0, 0, 0.4), 0 30px 45px rgba(0, 0, 0, 0.4), 0 40px 60px rgba(0, 0, 0, 0.4)',
                    }
                }
              >
                <div className='nav-button' onClick={()=>setWhichPageIsShowing('categoriesPage')}>
                <span class="material-symbols-outlined">
                transition_dissolve
                </span>
                    Collections
                </div>
                <div className='nav-button'>
                <span class="material-symbols-outlined">
                place_item
                </span>
                    Products
                </div>
              </div>
              <div className='carousal-text'>
                <h3>At CottonOn</h3>
                <p>Get all you need and more from our our store. with free delivery</p>
              </div> 
              <h5 className='slide-button'>Shop Now</h5>  
              <p className='description'>Discover timeless elegance and unparalleled quality at our clothing store</p>
            </div>
          </div>
          <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        </div>
      </div>

      <div className='products row'
        style={
            {
                marginTop: '620px',
                backgroundColor: 'white',
                paddingTop: '20px',
                minHeight: '1371px'
            }
        }
      >
        <div className='collections-title col-sm-12'>
            <h2>
                Latest Releases
            </h2>
        </div>
      {latestProducts.map((product, index) => (
          <div
            key={product.node.id}
            className="card col-sm-3"
            style={{
              width: '20rem',
              minHeight: '18rem',
              height: 'fit-content',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '20px',
              padding: '15px',
              paddingLeft: '4px',
              paddingRight: '4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              border: '0',
            }}
          >
            <img
              loading='lazy'
              onClick={() => {
                setProduct(product.node.title); 
                setWhichPageIsShowing('SingleProduct');
              }}
              className="image landing-page-products-img"
              src={product.node.images.edges[0]?.node.url} // Accessing the first image URL
              alt={product.node.title}
              style={{
                flex: '1 1 50%',
                width: '100px',
                minWidth: '200px',
                maxWidth: '200px',
                height: '200px',
              }}
            />
            <div className="card-body" style={{ flex: '1 1 50%' }}>
              <h5 id="landing-page-produc-title">{product.node.title}</h5>
            </div>
          </div>
        ))}

      </div>
      <div className='store-description'>
        <p>
            CottonOn combines comfort, style, and sustainability. Our products are made from organic cotton and crafted in Canada.
        </p>
        <p>
            Each product features a minimalist aesthetic, with clean lines and neutral colors.
        </p>
        <p>
            Join the CottonOn movement today and elevate your style.
        </p>
      </div>
      <div className='before-footer-image'>
        <div>
            <h3>The featured collection</h3>
            <p>Click the button below for our featured collection. You do not want to miss out</p>
            <div className='featured-button'
                style={
                    {
                        width: '100px',
                        textAlign: 'center',
                        marginLeft: '0px'
                    }
                }
            >
                Featured
            </div>
        </div>
      </div>
      <footer className='page-footer'>
        <h3>Stay in the know</h3>
        <div ClassName="input-group mb-3"
            style={
                {
                    marginBottom: '25px',
                    width: 'fit-content'
                }
            }
        >
            <input type="email" ClassName="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"
                style={
                    {
                        width: '300px',
                        height: '50px',
                        padding: '5px'
                    }
                }
            />
        </div>
        <h4>Follow us on social media</h4>
        <div className='icons-div'>
            <ion-icon onMouseEnter={()=>SetIsHovered(true)} onMouseLeave={()=> SetIsHovered(false)} name="logo-twitter" className='social-media-icon' style={iconStyling}></ion-icon>
            <ion-icon onMouseEnter={()=>SetIsHovered(true)} onMouseLeave={()=> SetIsHovered(false)} name="logo-facebook" className='social-media-icon' style={iconStyling}></ion-icon>
            <ion-icon onMouseEnter={()=>SetIsHovered(true)} onMouseLeave={()=> SetIsHovered(false)} name="logo-facebook" className='social-media-icon' style={iconStyling}></ion-icon>
            <ion-icon onMouseEnter={()=>SetIsHovered(true)} onMouseLeave={()=> SetIsHovered(false)} name="logo-youtube" className='social-media-icon' style={iconStyling}></ion-icon>
            <ion-icon onMouseEnter={()=>SetIsHovered(true)} onMouseLeave={()=> SetIsHovered(false)} name="logo-pinterest" className='social-media-icon' style={iconStyling}></ion-icon>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
