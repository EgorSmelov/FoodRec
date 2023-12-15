import React from 'react';

export default function NavBar({ user }) {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Книга рецептов</a>
        <a className="navbar-brand" href="/">
          Добро пожаловать,
          {' '}
          {user ? `${user.name}` : 'Гость'}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Главная</a>
              </li>
              {user
                ? (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/auth/profile">Профиль</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/auth/logout">Выйти</a>
                    </li>
                  </>
                )
                : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/auth/reg">Регистрация</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/auth/login">Войти</a>
                    </li>
                  </>
                )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
