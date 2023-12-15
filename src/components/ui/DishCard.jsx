import React, { useState } from 'react';

export default function DishCard({ dish, user, like }) {
  const [isLike, setIsLike] = useState(like);
  async function likeRules() {
    if (!user) return alert('Чтобы добавлять в избранное нужно зарегистрироваться');

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
        <div className="imgCard">
          <a href={`/dishes/${dish.id}`}><img src={dish.img} className="card-img-top" style={{ width: '100%' }} /></a>
          <img className="favoriteImg" onClick={() => likeRules()} src={!isLike ? '/images/likeOff.svg' : '/images/likeOn.svg'} />
        </div>
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
        </div>
      </div>
    </div>
  );
}
