import React, { useState } from "react";
import Card from "./Card";

const GiftCard = () => {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smithss",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });
  function spendGiftCard() {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card.",
      };
    });
  }
  return (
    <div>
      <Card {...giftCard} />
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
};

export default GiftCard;
