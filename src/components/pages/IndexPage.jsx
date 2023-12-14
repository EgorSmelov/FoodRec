import React, { useState } from 'react';
import DishCard from '../ui/DishCard';

export default function IndexPage({ dishes }) {
  const [dishesArr, setDishesArr] = useState(dishes);
  const handleChange = async (event) => {
    const response = await fetch(`/api/${event.target.value}`, { method: 'GET' });
  };
  return (
    <>
      <div>
        <select onChange={handleChange} name="sort" defaultValue="">
          <option value="">По умолчанию</option>
          <option value="sortTimeAZ">Время готовки ↑</option>
          <option value="sortTimeZA">Время готовки ↓</option>
          <option value="sortIngridientsAZ">Кол-во ингидиентов ↑</option>
          <option value="sortIngridientsZA">Кол-во ингидиентов ↓</option>
        </select>
      </div>
      <div className="row">
        {dishesArr.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </>
  );
}
