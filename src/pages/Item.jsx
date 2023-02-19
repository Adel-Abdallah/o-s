import React from 'react';
import Card from '../components/card/Card';

function Item(props) {
  

  return (
    <div className="item-page">
      <h1>Items</h1>
      <div className="item-container">
        {props.items.map((item, index) => (
          <Card key={index} imgSrc={item.imgSrc} title={item.title} price={item.price} colorVariants={item.colorVariants} />
        ))}
      </div>
    </div>
  );
}

export default Item;
