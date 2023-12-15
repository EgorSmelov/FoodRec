import React, { useState } from 'react';
import DishCard from '../ui/DishCard';

export default function IndexPage({ dishes, likesId, user }) {
  const [dishesArr, setDishesArr] = useState(dishes);
  const [pages, setPages] = useState(9);

  const changePage = async () => {
    setPages(pages + 9);
    console.log(pages);
    const response = await fetch(`/api/pages/${pages}`, { method: 'GET' });
    const data = await response.json();
    setDishesArr(data.dishes);
  };

  const handleChange = async (event) => {
    const response = await fetch(`/api/sorts/${event.target.value}`, { method: 'GET' }).then((data) => data.json());
    setDishesArr(response);
  };
  return (
    <>
      <br />
      <div>
        <select onChange={handleChange} name="sort" defaultValue="">
          <option value="nameDesc">По умолчанию</option>
          <option value="timeAsc">Время готовки ↑</option>
          <option value="timeDesc">Время готовки ↓</option>
          <option value="ingridientsAsc">Кол-во ингидиентов ↑</option>
          <option value="ingridientsDesc">Кол-во ингидиентов ↓</option>
        </select>
      </div>
      <br />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {dishesArr.map((dish) => (
          <DishCard key={dish.id} dish={dish} user={user} like={likesId.includes(dish.id)} />
        ))}
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <button type="button" className="btn btn-primary" onClick={() => changePage()}>Показать ещё</button>
      </div>
      <br />
    </>
  );
}
