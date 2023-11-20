import React, {useEffect, useState} from 'react'


const Products = () => {
    const [product, setProduct] = useState([]);
    const data = async () =>{
            const response = await fetch(`http://localhost:8089/getUser`);
            const data = await response.json();
            console.log(data)
            setProduct(data.user);
    }
    useEffect(()=>{
        data();
    }, [])
  return (
    <div className="container mt-4">
    <div className="row">
      {product.map((item) => (
        <div key={item.id} className="col-md-4 mb-4">
          <div className="card" style={{ width: '400px',heigh:'200px' }}>
            <div className="card-body">
            <img src={item.image} alt=""  style={{ width: '200px', height: '200px' }}  className="card-img-top" />
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Products
