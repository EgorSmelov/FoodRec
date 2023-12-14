import React from 'react';

export default function ProfilePage({ user }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        <a href="/" className="btn btn-primary">На главную</a>
      </div>
    </div>
  );
}
