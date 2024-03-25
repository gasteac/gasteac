import React, { useState } from "react";
import "animate.css";
import "./contactPage.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import gasteacApi from "../../api/gasteacApi";

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
        .required("Required!"),
      message: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Required!"),
      email: Yup.string().email("Invalid email address").required("Required!"),
    }),
    onSubmit: async ({ name, email, phone = "", message }) => {
      try {
        const { data } = await gasteacApi.post("/form/new", {
          name: name,
          email: email,
          phone: phone,
          newMessage: message,
        });

        formik.resetForm();
        setSent(true);
      } catch (error) {
        console.log(error);
      }
    },
  });
  const [sent, setSent] = useState(false);
  return (
    <div className="contactPage  animate__animated  animate__fadeIn animate__slower">
      <div className="login-box">
        <form onSubmit={formik.handleSubmit}>
          <div className="user-box">
            <div className="fieldRequired">
              <label htmlFor="name">Name</label>
              {formik.touched.name && formik.errors.name ? (
                <h6>{formik.errors.name}</h6>
              ) : null}
            </div>

            <input
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
            />
            <div></div>
          </div>
          <div className="user-box">
            <div className="fieldRequired">
              <label htmlFor="email">Email</label>
              {formik.touched.email && formik.errors.email ? (
                <h6>{formik.errors.email}</h6>
              ) : null}
            </div>
            <input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              type="text"
            />
          </div>
          <div className="user-box">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>
          <div className="user-box">
            <div className="fieldRequired">
              <label htmlFor="message">Message</label>
              {formik.touched.message && formik.errors.message ? (
                <h6>{formik.errors.message}</h6>
              ) : null}
            </div>
            <textarea
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
         
            <button type="submit">
              <a type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </button>
            {sent ? (
              <p style={{color:'green'}} id="done" >
                Sent!
              </p>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
