import React from 'react'
import style from "./Contact.module.css"

function ContactForm() {
  return (
    <>
    <section className="top-category container  mt-5 align-items-center">
         <h1 className="text-center ms-4 mt-2">Contact us</h1>
        <div className="component d-flex align-items-center justify-content-center mb-5">
    <div className={`mt-5 w-75 p-3 h-100 d-inline-block rounded-4 ${style.colo}`}>
        <div className="mb-3">
          <h1 className=" text-white mb-4">Send Email</h1>
          <input
            type="email"
            className="form-control mb-4"
            id="exampleFormControlInput1"
            placeholder="email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            how can we help you?
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
          />
        </div>
        <button type="button" className={`btn    ${style.btn}`}>
          Send
        </button>
      </div>
    </div>
      </section>
    </>
  )
}

export default ContactForm