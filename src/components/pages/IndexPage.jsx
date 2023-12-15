import React, { useState } from 'react';
import DishCard from '../ui/DishCard';

export default function IndexPage({ dishes, likesId, user }) {
  const [dishesArr, setDishesArr] = useState(dishes);

  const handleChange = async (event) => {
    const response = await fetch(`/api/sorts/main/${event.target.value}`, { method: 'GET' }).then((data) => data.json());
    setDishesArr(response);
  };
  return (
    <>
      <br />
      <br />
      <br />
      <div>
        <select className="form-select w-25" aria-label="Default select example" onChange={handleChange} name="sort">
          <option selected disabled hidden>Сортировка</option>
          <option value="defaultAsc">По умолчанию</option>
          <option value="timeAsc">Время готовки ↑</option>
          <option value="timeDesc">Время готовки ↓</option>
          <option value="ingridientsAsc">Кол-во ингредиентов ↑</option>
          <option value="ingridientsDesc">Кол-во ингредиентов ↓</option>
        </select>
      </div>
      <br />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {dishesArr.map((dish) => (
          <DishCard key={dish.id} dish={dish} user={user} like={likesId.includes(dish.id)} />
        ))}
      </div>
      <br />
    </>
  );
}
