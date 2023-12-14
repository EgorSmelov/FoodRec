import React from 'react';
import DishPageForm from '../ui/DishPageForm';

export default function DishPage({ dish }) {
  return (
    <div className="container">
      <DishPageForm dish={dish} />
    </div>
  );
}
