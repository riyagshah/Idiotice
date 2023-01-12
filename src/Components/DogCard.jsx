import React from "react";
import "../App.css"
const ShoeCard = ({item}) => {
  let shoeId = item.id;
  return (
    <div   style={{ border: "1px solid", padding: "1%", boxSizing: "border-box"   }}
    data-cy={`shoe-card-wrapper-${shoeId}`}>
    
      <div>
        <div data-cy="shoe-name">{item}</div>
        <div data-cy="shoe-category">{item.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
