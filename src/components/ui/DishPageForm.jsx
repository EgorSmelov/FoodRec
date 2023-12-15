import React from 'react';

export default function DishPageForm({ oneDish }) {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={oneDish.img} className="img-fluid rounded-start" alt={oneDish.name} />
          </div>
          <div className="col-md-8">
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
        </div>
      </div>
    </>
  );
}
