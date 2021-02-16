import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

const Product = ({ id, title, image, price, rating }) => {

  const [{ basket }, disPatch] = useStateValue();
  console.log('this is the basket', basket);
  const addToBasket = () => {
    disPatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
    return (
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map(() => (
                <p>🌟</p>
              ))}
          </div>
        </div>
        <img src={image} />

        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    );
}

export default Product
