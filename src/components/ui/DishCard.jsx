import React, { useState } from 'react';

export default function DishCard({ dish, user, like }) {
  const [isLike, setIsLike] = useState(like);
  async function likeRules() {
    if (!user) return alert('Чтобы добавлять в избранное нужно войти или зарегистрироваться');

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
          <img className="favoriteImg" onClick={() => likeRules()} src={!isLike ? '/images/favoriteOff.svg' : '/images/favoriteOn.svg'} />
        </div>
        <div className="card-body" style={{ height: '100px' }}>
          <h3><a className="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0" href={`/dishes/${dish.id}`}>{dish.name}</a></h3>
        </div>
        <div className="card-body card-values">
          <div className="card-items">
            Ингредиенты:
            {' '}
            {dish.ingredients.split(', ').length}
          </div>
          <div className="card-items">
            Готовить:
            {' '}
            {`${dish.time} мин.`}
          </div>
        </div>
      </div>
    </div>
  );
}
