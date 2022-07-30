import React, { useState } from 'react'

export default function Login() {

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('Add your submit code in here')
  }

  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'email'}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name={'password'}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  </div>
}