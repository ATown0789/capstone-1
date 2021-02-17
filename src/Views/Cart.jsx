import React from "react";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";

function Cart({ resetCartNum, cart, removeItem, plus, minus }) {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);

  let subtotal = 0;
  let tax = 0;
  let total = 0;

  cart.forEach((album) => (subtotal += album.price * album.quantity));

  tax = subtotal * 0.0825;

  total = tax + subtotal;

  const paypalRef = React.useRef();

  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "Your description",
                amount: {
                  currency_code: "USD",
                  value: total.toFixed(2),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  if (paid) {
    subtotal = 0;
    tax = 0;
    total = 0;
    resetCartNum();
  }

  return (
    <div id="cart">
      {error && <div>Uh oh, and error occured! {error.message}</div>}
      <h1>Shopping Cart</h1>
      {!cart.length && (
        <>
          <h1>Empty!</h1>
          <Link to="/shop-music">
            <h3>Continue Shopping!</h3>
          </Link>
        </>
      )}
      {paid ? (
        <h1>Payment Successful!!</h1>
      ) : (
        cart.map((product) => (
          <CartItem
            plus={plus}
            minus={minus}
            removeItem={removeItem}
            product={product}
          />
        ))
      )}

      {!!cart.length && (
        <>
          <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
          <h5>Tax: ${tax.toFixed(2)}</h5>
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to="/shop-music">
            <h3>Continue Shopping?</h3>
          </Link>
          <div ref={paypalRef} />
        </>
      )}
    </div>
  );
}

export default Cart;
