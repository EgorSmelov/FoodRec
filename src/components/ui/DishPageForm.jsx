import React from 'react';

export default function DishPageForm({ oneDish }) {
  return (
    <div className="card mb-3">
      <img src={oneDish.img} className="card-img-top" alt={oneDish.name} />
      <div className="card-body">
        <h2 className="card-title">{oneDish.name}</h2>
        <h3>Ingredients:</h3>
        <p className="card-text">{oneDish.ingredients}</p>
        <h3>Instruction:</h3>
        <p className="card-text">{oneDish.instruction}</p>
        <h3>Cooking time:</h3>
        <p className="card-text"><small className="text-body-secondary">{oneDish.time}</small></p>
      </div>
    </div>
  );
}
