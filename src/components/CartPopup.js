
import React, { useEffect } from 'react';

const CartPopup = () => {
  useEffect(() => {
    console.log("popup")
    const timer = setTimeout(() => {
    }, 2000); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed bottom-3 bg-red-700 text-white z-50">
      Item added to cart!!
    </div>
  );
};

export default CartPopup;
