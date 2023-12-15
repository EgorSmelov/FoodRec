import React, { useState } from 'react';

export default function DishCard({ dish, user, like }) {
  const [isLike, setIsLike] = useState(like);
  async function likeRules() {
    if (isLike) {
      const response = await fetch(`/api/likes/${user.id}/${dish.id}`, { method: 'DELETE' });
      response.status === 200 ? setIsLike(false) : setIsLike(null);
    }
    if (!isLike) {
      const response = await fetch(`/api/likes/${user.id}/${dish.id}`, { method: 'POST' });
      response.status === 200 ? setIsLike(true) : setIsLike(null);
    }
  }

  return (
    <div className="col">
      <div className="card">
        <img src={dish.img} className="card-img-top" style={{ width: '100%' }} />
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
          {user
            ? (
              <button onClick={() => likeRules()} type="button" className="btn btn-primary">
                {!isLike ? 'Добавить в избранное' : 'Удалить из избранного'}
              </button>
            )
            : null}
        </div>
      </div>
    </div>
  );
}
