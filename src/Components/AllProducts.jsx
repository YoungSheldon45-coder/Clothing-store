import React, { useRef, useEffect, useState } from 'react';

const AllProducts = ({ setWhichPageIsShowing, setProduct }) => {
    const [allProducts, setAllProducts] = useState([]);
    const productId = useRef('');
    const [isCartCreated, setIsCartCreated] = useState(false);

    const createCart = async () => {
        const body = {
            query: `
                mutation CartCreate {
                    cartCreate(
                        input: {
                            lines: [
                                {
                                    quantity: 1,
                                    merchandiseId: "${productId.current}"
                                }
                            ]
                        }
                    ) {
                        cart {
                            id
                            createdAt
                            updatedAt
                            lines(first: 10) {
                                edges {
                                    node {
                                        id
                                        merchandise {
                                            ... on ProductVariant {
                                                id
                                                title
                                                image {
                                                    id
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            cost {
                                totalAmount {
                                    amount
                                    currencyCode
                                }
                                subtotalAmount {
                                    amount
                                    currencyCode
                                }
                            }
                        }
                    }
                }
            `
        };

        try {
            const request = await fetch('https://mock.shop/api', {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json"
                },
            });
            const response = await request.json();
            console.log('Response: ', response);
            if (response.data && response.data.cartCreate && response.data.cartCreate.cart) {
                console.log('Cart ID: ', response.data.cartCreate.cart.id);
                setIsCartCreated(true);
                alert('Cart Created');
            } else {
                console.error('Failed to create cart');
            }
        } catch (error) {
            console.error('Error Creating Cart:', error);
        }
    };

    const addToCreatedCart = async () => {
        // Implement logic to add items to the created cart
    };

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const request = await fetch('https://mock.shop/api?query={products(first:50){edges{node{id title description images(first:1){edges{node{url}}} variants(first:1){edges{node{id price{amount currencyCode}}}}}}}}');
                const response = await request.json();
                console.log(response);
                setAllProducts(response.data.products.edges);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getAllProducts();
    }, []);

    return (
        <div className='row' id='main-div'>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style={{
                borderRadius: '15px',
                marginTop: '20px',
                marginBottom: '40px',
                boxShadow: '0 10px 15px rgb(20, 20, 20), 0 20px 30px rgb(20, 20, 20), 0 30px 45px rgb(20, 20, 20), 0 40px 60px rgb(20, 20, 20)',
                border: '1px solid #3f3f3f',
                width: '100%'
            }}>
                <div className="container-fluid">
                    <a onClick={() => setWhichPageIsShowing('landingPage')} className="navbar-brand" href="#" style={{
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
                            <a className="nav-link"  href="#" onClick={() => setWhichPageIsShowing('landingPage')}>Home</a>
                            <a className="nav-link" href="#" onClick={() => setWhichPageIsShowing('categoriesPage')}>Collection</a>
                            <a className="nav-link active" href="#" aria-current="page">All products</a>
                        </div>
                    </div>
                </div>
            </nav>

            {allProducts.map((product) => (
                <div key={product.node.id} className="card allProducts-card col-sm-3" 
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
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      flexWrap: 'wrap',
                      border: '1px solid black'
                }}>
                    <img 
                        loading='lazy'
                        onClick={() => {
                            setProduct(product.node.title);
                            setWhichPageIsShowing('SingleProduct');
                        }} 
                        className='image all-products-img' 
                        src={product.node.images.edges[0]?.node.url} 
                        alt={product.node.title} 
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
                    <div className="card-body" style={{ flex: '1 1 50%' }}>
                        <h5 id='title' onClick={() => {
                            setProduct(product.node.title);
                            setWhichPageIsShowing('SingleProduct');
                        }}>{product.node.title}</h5>
                        <p className="card-text all-prod-card-txt"
                          style={{
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                            width: '80%',
                            textAlign: 'right',
                            fontFamily: 'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif'
                          }}
                        >
                          {product.node.description.slice(0, 110) + '...'}</p>
                        <div className='price-and-cart'>
                            <p  className="card-text" 
                              style={{
                                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                                width: '80%',
                                fontSize: '8px',
                                textAlign: 'right',
                                fontFamily: 'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif'
                            }}>
                                <span className='price'>${product.node.variants.edges[0].node.price.amount} {product.node.variants.edges[0].node.price.currencyCode}</span>
                            </p>
                            <h6 
                              style={{width: '150px', marginLeft: '10px'}}
                            className='add-to-cart' onClick={() => {
                                const matchedId = product.node.variants.edges[0].node.id;
                                if (matchedId) {
                                    productId.current = matchedId; 
                                    function returnCreateCart(){
                                      createCart();
                                    } 
                                    returnCreateCart();
                                    alert(`${product.node.title} added to cart`);
                                }
                            }}>
                                <span style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', display: 'flex', alignItems: 'center'}}><span style={{fontSize: '19px'}}>Buy</span><ion-icon name="cart-outline"></ion-icon></span>
                            </h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllProducts;
