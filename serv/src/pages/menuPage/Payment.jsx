import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK);

const Payment = () => {
  const [cart] = useCart();

  // Calculate the cart price

  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };

  const cartSubTotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);

  const orderTotal = cartSubTotal;
  console.log(orderTotal);

  const totalPrice = parseFloat(orderTotal.toFixed(2));

  return (
    <div>
      <div className="relative bg-red-500 h-24 w-full" />
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={totalPrice} cart={cart} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
