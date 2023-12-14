import React from 'react';

export default function DishPageForm({ oneDish }) {
  return (
    <div className="card mb-3">
      <img src={oneDish.img} className="card-img-top" alt={oneDish.name} />
      <div className="card-body">
        <h2 className="card-title">{oneDish.name}</h2>
        <h3>Ингредиенты:</h3>
        <p className="card-text">{oneDish.ingredients}</p>
        <h3>Иструкция:</h3>
        <p className="card-text">{oneDish.instruction}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            Время приготовления:
            {' '}
            {oneDish.time}
            {' '}
            минут
          </small>
        </p>
      </div>
    </div>
  );
}
