import React, { useState } from 'react';

export default function DishCard({ dish }) {
  const [isLike, setLikeCheck] = useState(false);

  return (
    <div className="card">
      <img src={dish.img} className="card-img-top" style={{ width: '300px' }} />
      <div className="card-body">
        <h3><a href={`/dishes/${dish.id}`}>{dish.name}</a></h3>
      </div>
      <div className="card-body">
        <div>
          Ингридиенты:
          {' '}
          {dish.ingredients.split(', ').length}
        </div>
        <div>
          Готовить:
          {' '}
          {`${dish.time} минут`}
        </div>
        <button type="button" className="btn btn-primary" onClick={() => setLikeCheck(!isLike)}>{isLike ? 'Like' : 'Dislike'}</button>
      </div>
    </div>
  );
}
