import React, { useState } from "react";
import "animate.css";
import "./formStyle.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import gasteacApi from "../api/gasteacApi";



export const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      message: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async({name, email, phone= '', message}) => {
      try {
      const {data} = await gasteacApi.post('/form/new', {name: name, email: email, phone: phone, newMessage : message})

      formik.resetForm();
      setSent(true)
      } catch (error) {
        console.log(error)
      }
      
    },
  });
  const [sent, setSent] = useState(false)
  return (
    <div className="pages animate__animated animate__fadeIn">
      <div className="contact">
        <div className="login-box">
          <form onSubmit={formik.handleSubmit}>
            <div className="user-box">
              <input
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                required=""
              />
              <div>

                
              </div>
              <label htmlFor="name">Name</label>
              {formik.touched.name && formik.errors.name ? (
                <h3 style={{marginTop:'0', color:'#FF4D4D', textAlign:'end'}}>{formik.errors.name}</h3>
              ) : null}
            </div>
            <div className="user-box">
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text"
                required=""
              />
              <label htmlFor="email">Email</label>
              {formik.touched.email && formik.errors.email ? (
                <h3 style={{marginTop:'0', color:'#FF4D4D', textAlign:'end'}}>{formik.errors.email}</h3>
              ) : null}
            </div>
            <div className="user-box">
              <input
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                type="tel"
                required=""
              />
              <label htmlFor="phone">Phone</label>
              
            </div>
            <div className="user-box">
              <textarea
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                required=""
              ></textarea>
              <label htmlFor="message">Message</label>
              {formik.touched.message && formik.errors.message ? (
                <h3 style={{marginTop:'0', color:'#FF4D4D', textAlign:'end'}}>{formik.errors.message}</h3>
              ) : null}
            </div>
            <button type="submit">
              <a>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </button>
            {sent 
            ? (<a style={{marginLeft:'120px', color:'#ECFDF9'}} id='done' className="animate__animated animate__fadeIn">
                
                Sent!
              </a>)
          : ''}
            
          </form>
        </div>
      </div>
    </div>
  );
};
