import React from 'react';

export default function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Книга рецептов</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">На главную</a>
            <a style={{ display: `${!user ? 'none' : 'block'}` }} className="nav-link" aria-current="page" href={user ? '/auth/profile' : '/#'}>Профиль</a>
            <a style={{ display: `${user ? 'none' : 'block'}` }} className="nav-link" aria-current="page" href="/auth/reg">Регистрация</a>
            <a className="nav-link" aria-current="page" href="/auth/login">Войти</a>
            <a className="nav-link" aria-current="page" href="/auth/logout">Выйти</a>
            <a className="nav-link" aria-current="page" href={user ? '/auth/profile' : '/#'}>{user ? `${user.name}` : 'Гость'}</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
