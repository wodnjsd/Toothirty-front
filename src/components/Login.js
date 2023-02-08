import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../config'

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

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { data } = await axios.post(`${baseUrl}/login`, formData)
      localStorage.setItem('token', data.token)
      navigate('/all')

    } catch (err) {
      console.log(err.response.data)
    }
  }

  return <div className="flex flex-col items-center w-full h-screen">
    <div className="w-full bg-slate-50 flex justify-center items-center py-12 text-3xl font-prata">
      Login- for Admin only
    </div>
    <br />
    <form onSubmit={handleSubmit} className="mt-5">
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
      <button className="button mt-6">Submit</button>
    </form>
  </div>
}