import React from 'react'
import { useEffect, useState } from 'react';


const Categories = ({setWhichPageIsShowing}) => {
    const [categories, setCategories] = useState([])
  

    useEffect(()=>{
      getProducts();
    },[])
  
    const getProducts = async () => {
      const response = await fetch('https://mock.shop/api?query={collections(first:%2010){edges%20{cursor%20node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}');
      const data = await response.json();
      setCategories(data.data.collections.edges)
      console.log(data.data.collections.edges)
    }
  
  
    return (
      <div className='row' id='main-div'>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style=  {{ borderRadius: '15px', 
                                                                                            marginTop: '20px', 
                                                                                            marginBottom: '40px', 
                                                                                            boxShadow: '0 10px 15px rgb(20, 20, 20), 0 20px 30px rgb(20, 20, 20), 0 30px 45px rgb(20, 20, 20), 0 40px 60px rgb(20, 20, 20)',
                                                                                            border: '1px solid #3f3f3f'
                                                                                        }}>
          <div className="container-fluid">
            <a onClick={()=> setWhichPageIsShowing('landingPage')} className="navbar-brand" href="#" style={
                {
                    fontSize: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    color: 'black',
                    padding: '5px',
                    margin: '8px',
                    fontFamily: 'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif'
                }
            }>CattonOn</a>
  
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
                <a className="nav-link" href="#" onClick={()=>setWhichPageIsShowing('AllProducts')}>All products</a>
                <a className="nav-link active" href="#" onClick={()=>setWhichPageIsShowing('AllProducts')}>Collection</a>
              </div>
            </div>
          </div>
        </nav>
  
        {categories.map((categories, index)=>(
          <div key={categories.node.id} className="card categories-card col-sm-3" 
          style=  {{ 
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
          <img className='image categories-img' src={categories.node.image.url}  alt={categories.node.title} style=  {{flex: '1 1 50%px',
                                                                                        borderRadius: '15px', 
                                                                                        border: '1px solid black',
                                                                                        width: '100px', 
                                                                                        minWidth: '200px', 
                                                                                        maxWidth: '200px',
                                                                                        height: '200px',
                                                                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.4), 0 20px 30px rgba(0, 0, 0, 0.4), 0 30px 45px rgba(0, 0, 0, 0.4), 0 40px 60px rgba(0, 0, 0, 0.4)'
                                                                                    }}
          />
          <div className="card-body" style={{flex: '1 1 50%'}}>
              <h5 id='title'>{categories.node.title}</h5>
              <p className="card-text" 
                style={{
                  color: '#000', 
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                  width: '80%',
                  fontSize: '16.2px',
                  textAlign: 'right',
                  fontFamily: 'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif'
                }}>
                  {categories.node.description.slice(0, 160) + '....'} 
              </p>
          </div>
      </div>
        ))}
      </div>
    );
}

export default Categories