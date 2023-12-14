import React, { useState } from 'react';

export default function DishCard({ dish }) {
  const [isLike, setLikeCheck] = useState(false);

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <img src={dish.img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title"><a href={`/dishes/${dish.id}`}>{dish.title}</a></h5>
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
    </div>
  );
}
