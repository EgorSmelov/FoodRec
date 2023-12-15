/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

export default function RegistrationPage() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleChange = (e) => {
    const data = e.target.name;
    if (data === 'password') {
      if (e.target.value.length < 5) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    if (response.status === 200) {
      window.location.href = '/';
    }
    //   const response = await fetch('/api/auth/reg', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    //   });

  // if (response.status === 200) {
  //   window.location.href = '/';
  // }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Name</label>
          <input name="name" type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button> */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="email" type="email" onChange={handleChange} defaultValue={input.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Name</label>
          <input name="name" type="text" onChange={handleChange} defaultValue={input.name} className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" type="password" onChange={handleChange} defaultValue={input.password} className="form-control" id="exampleInputPassword1" />
          {show && <p className="text-danger">Пароль не должен быть короче 5 символов</p>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
