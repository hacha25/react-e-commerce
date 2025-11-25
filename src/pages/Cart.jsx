
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, increaseQnt, decreaseQnt, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantite, 0);

  if (cart.items.length === 0) {
    return (
      <div className="container mt-5">
        <h2>Your cart is empty</h2>
        <Link to="/" className="btn btn-primary mt-3">Go to Shop</Link>
      </div>
    );
  }

  return (
    <>
     
  
    
      <div className="container mt-5">
        <h2 className="mb-3">Your Cart</h2>
        <button className="btn btn-danger mb-3" onClick={clearCart}>Clear Cart</button>

        <div className="row g-3">
          {cart.items.map(item => (
            <div key={item.id} className="col-12 border p-3 rounded d-flex align-items-center flex-wrap">
              <img src={item.images[0]} alt={item.team} className="me-3 mb-2" style={{ width: "100px" }} />
              <div className="flex-grow-1 mb-2">
                <Link to={`/product/${item.id}`} className="text-dark fw-bold h5">{item.team}</Link>
                <div className="d-flex align-items-center mt-1">
                  <span className="me-3">{item.price} DH</span>
                  <button className="btn btn-outline-secondary btn-sm me-1" onClick={() => decreaseQnt(item.id)}>-</button>
                  <span className="px-2">{item.quantite}</span>
                  <button className="btn btn-outline-secondary btn-sm ms-1" onClick={() => increaseQnt(item.id)}>+</button>
                  <button className="btn btn-danger btn-sm ms-3" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
              <div className="fw-bold ms-3">{(item.price * item.quantite).toFixed(2)} DH</div>
            </div>
          ))}
        </div>

        <div className="mt-4 d-flex justify-content-end fw-bold fs-4">
          Total: {totalPrice.toFixed(2)} DH
        </div>
      </div>
      
      </>
  );
};

export default Cart;
