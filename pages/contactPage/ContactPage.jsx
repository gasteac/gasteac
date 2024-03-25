import React, { useState } from "react";
import "animate.css";
import "./contactPage.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import gasteacApi from "../../api/gasteacApi";
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
export const ContactPage = () => {
  // const handleSucces = () => {
  //   Swal.fire({
  //     customClass: {
  //       popup: "sweetPopup",
  //       container: "sweetContainer",
  //     },
  //     title: "message sent!",
  //     timer: 5000000000,
  //     timerProgressBar: true,
  //     didOpen: () => {
  //       Swal.showLoading();
  //     },
  //     willClose: () => {
  //       clearInterval(timerInterval);
  //     },
  //   });
  // };

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
      message: Yup.string().min(5, "Write something!").required("Required!"),
      email: Yup.string().email("Invalid email address").required("Required!"),
    }),
    onSubmit: async ({ name, email, phone = "", message }) => {
      try {
        await gasteacApi.post("/form/new", {
          name: name,
          email: email,
          phone: phone,
          newMessage: message,
        });

        formik.resetForm();
        setSent(true);
        handleSucces();
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
              type="email"
            />
          </div>
          <div className="user-box">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
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
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button type="submit">
              <a type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
