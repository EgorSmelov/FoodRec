import React, { useState } from 'react';

export default function DishCard({ dish }) {
  const [isLike, setLikeCheck] = useState(false);

  return (
    <div className="card">
      <img src={dish.img} className="card-img-top" style={{ width: '300px' }} />
      <div className="card-body">
        <h5><a href={`/dishes/${dish.id}`}>{dish.title}</a></h5>
      </div>
      <div className="card-body">
        <div>
          Ингридиенты:
          {' '}
          {dish.ingridients}
        </div>
        <div>
          Время:
          {' '}
          {dish.time}
        </div>
        <button type="button" className="btn btn-primary" onClick={() => setLikeCheck(!isLike)}>{isLike ? 'Like' : 'Dislike'}</button>
      </div>
    </div>
  );
}
