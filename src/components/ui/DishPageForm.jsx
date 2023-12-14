import React from 'react';

export default function DishPageForm({ dish }) {
  return (
    <div className="card mb-3">
      <img src={dish.img} className="card-img-top" alt={dish.name} />
      <div className="card-body">
        <h5 className="card-title">{dish.name}</h5>
        <p className="card-text">{dish.}</p>
        <p className="card-text"><small className="text-body-secondary">{dish.time}</small></p>
      </div>
    </div>
  );
}
