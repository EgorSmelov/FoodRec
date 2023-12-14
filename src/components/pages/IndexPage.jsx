import React, { useState } from 'react';
import DishCard from '../ui/DishCard';

export default function IndexPage({ dishes, likesId, user }) {
  const [dishesArr, setDishesArr] = useState(dishes);
  const handleChange = async (event) => {
    const response = await fetch(`/api/sorts/${event.target.value}`, { method: 'GET' }).then((data) => data.json());
    setDishesArr(response);
  };
  return (
    <>
      <div>
        <select onChange={handleChange} name="sort" defaultValue="">
          <option value="name,ASC">По умолчанию</option>
          <option value="time,ASC">Время готовки ↑</option>
          <option value="time,DESC">Время готовки ↓</option>
          <option value="sortIngridients,ASC">Кол-во ингидиентов ↑</option>
          <option value="sortIngridients,DESC">Кол-во ингидиентов ↓</option>
        </select>
      </div>
      <div className="row">
        {dishesArr.map((dish) => (
          <DishCard key={dish.id} dish={dish} user={user} like={likesId.includes(dish.id)} />
        ))}
      </div>
    </>
  );
}
