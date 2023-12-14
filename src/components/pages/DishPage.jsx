import React from 'react';
import DishPageForm from '../ui/DishPageForm';

export default function DishPage({ oneDish }) {
  return (
    <div className="container">
      <DishPageForm oneDish={oneDish} />
    </div>
  );
}
