
import React from 'react'
import { useState } from "react";
import "./Contact.css"
import axios from "axios"



function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
async function handleSubmit (e)  {
  e.preventDefault()
  setLoading(true)
  setError("")
  setSuccess("");
  try {
    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );

      console.log(response.data);
      setSuccess("Thank you! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Sorry, something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
}
  return (
    <section className="cotact-page"> 
     <div className='contact-header'>
      <h1>Contact Us</h1>
      <p>Have questions or want to learn more? We're here to help! Fill out the form below and we'll get back to you as soon as possible.</p>


     </div>
     <div className='contact-comtainer'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

     </div>
    </section>
  
  )
}

export default Contact