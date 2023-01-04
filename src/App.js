import "./App.css";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import { useState } from "react";
function App() {
  const products = [
    {
      id :1,
      name: "iPhone",
      price: 100000,
      img:"https://m.media-amazon.com/images/I/61AwGDDZd3L._SX522_.jpg",
    },

    {
      id :2,
      name: "iPad",
      price: 100000,
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-cell-purple-202203?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645066504390",
    },

    {
      id :3,
      name: "Nokia",
      price: 9000,
      img:"https://m.media-amazon.com/images/I/61AwGDDZd3L._SX522_.jpg",
    },
    {
      id :4,
      name: "onePlus",
      price: 50000,
      img:"https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/in/store/large-card-product/10t/10T_Mob.jpg.thumb.webp",
    },
    {
      id :5,
      name: "onePlus_Node",
      price: 100000,
      img:"https://m.media-amazon.com/images/I/618hqM-yxtL._SL1500_.jpg",
    },
    {
      id :6,
      name: "Macbook",
      price: 400000,
      img:"https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1",
      },
  ]

  const [cartItems,setCartItems] = useState([])

  let addToCart = (product) => {
    setCartItems([...cartItems,product])  
  }

  let removeFromCart = (product) =>{
    const indexVal = cartItems.findIndex(obj => obj.id === product.id)
    cartItems.splice(indexVal,1)
    setCartItems([...cartItems])  
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
           {
            products.map((product,index) => {
              return <Card key={index} product={product} addToCart={addToCart} cartItems={cartItems}/>
            })
           } 
           
          </div>
        </div>
        <div className="col-lg-4">
          <h3>Cart</h3>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
