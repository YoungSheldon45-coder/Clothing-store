import React, { useEffect, useState } from 'react';

const SingleProduct = ({setWhichPageIsShowing, product}) => {
    const [singleProduct, setSingleProduct] = useState(null); // Initialize as null since it's an object

    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                const request = await fetch(`https://mock.shop/api?query={products(first:%2010,%20query:%20%22title:${product}%22){edges%20{node%20{id%20title%20description%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%201){edges%20{node%20{price%20{amount}}}}}}}}`);
                const response = await request.json();
                console.log(response);
                setSingleProduct(response.data.products.edges[0].node); // Set the product node directly
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getSingleProduct();
    }, []);

    return (
        <div className='row' id='main-div'>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style=  {{ borderRadius: '15px', 
                marginTop: '20px', 
                marginBottom: '40px', 
                boxShadow: '0 5px 7px rgba(0, 0, 0, 0.5), 0 10px 15px rgba(0, 0, 0, 0.5), 0 15px 22px rgba(0, 0, 0, 0.5), 0 20px 30px rgba(0, 0, 0, 0.5)',
                border: '1px solid #3f3f3f',
                width: '100%'
            }}>
                <div className="container-fluid">
                    <a onClick={()=> setWhichPageIsShowing('landingPage')} className="navbar-brand" href="#" style={{
                        fontSize: '2rem',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        color: 'black',
                        padding: '5px',
                        margin: '8px',
                        fontFamily: 'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif'
                    }}>CottonOn</a>
  
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
  
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="#" onClick={()=>setWhichPageIsShowing('landingPage')}>Home</a>
                            <a className="nav-link" href="#" onClick={()=>setWhichPageIsShowing('categoriesPage')}>Collection</a>
                            <a className="nav-link" href="#" onClick={()=>setWhichPageIsShowing('AllProducts')}>All products</a>
                            <a className="nav-link" href="#" style={{backgroundColor: 'white', borderRadius: '10px', padding: '7px', color: 'black', fontWeight: 'bold'}}>{singleProduct ? singleProduct.title : 'Loading...'}</a>
                        </div>
                    </div>
                </div>
            </nav>

            {singleProduct ? ( // Only render the product details if the data is available
                <div key={singleProduct.title} className="card singleProduct-card col-sm-3" 
                    style={{ 
                        width: '34rem', 
                        minHeight: '18rem',
                        height: 'fit-content',
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                        marginBottom: '20px', 
                        borderRadius: '15px',
                        padding: '15px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        boxShadow: '0 5px 7px rgba(0, 0, 0, 0.5), 0 10px 15px rgba(0, 0, 0, 0.5), 0 15px 22px rgba(0, 0, 0, 0.5), 0 20px 30px rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        flexWrap: 'wrap',
                        border: '1px solid black'
                    }}
                >
                    <img loading='lazy' className='image' src={singleProduct.images.edges[0].node.url} alt={singleProduct.title} 
                        style={{
                            flex: '1 1 50%px',
                            borderRadius: '15px', 
                            border: '1px solid black',
                            width: '100px', 
                            minWidth: '200px', 
                            maxWidth: '200px',
                            height: '200px',
                            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.4), 0 20px 30px rgba(0, 0, 0, 0.4), 0 30px 45px rgba(0, 0, 0, 0.4), 0 40px 60px rgba(0, 0, 0, 0.4)'
                        }}
                    />
                    <div className="card-body" style={{flex: '1 1 50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <h5 id='title-single-product'
                            style={{
                                width: '60%'
                            }}
                        >{singleProduct.title}</h5>
                        <p className="card-text all-prod-card-txt" 
                            style={{
                                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                                width: '80%',
                                textAlign: 'center',
                                marginRight: 'auto',
                                marginLeft: 'auto',
                                fontFamily: 'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif',
                            }}
                        >
                            {singleProduct.description}
                        </p>
                        <div className='price-and-cart'>
                            <p className="card-text" 
                                style={{
                                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                                    width: '100px',
                                    fontSize: '8px',
                                    fontFamily: 'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif'
                                }}
                            >
                                <span className='price'>${singleProduct.variants.edges[0].node.price.amount}</span>
                            </p>
                            <h6 className='add-to-cart' ><span style={{display: 'flex',flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto'}}><span className='buy-text' style={{fontSize: '20px',display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>Buy</span><ion-icon name="cart-outline"></ion-icon></span></h6>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
}

export default SingleProduct;
