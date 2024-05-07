import React from "react";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

function Contact() {
  return (
    <>
      <div className="container w-100">
        <div className="row">
          <div className="col-sm-9  mb-3 mb-sm-0">
            <ContactForm />
          </div>
          <div className="col-sm-2 mt-5  mb-sm-0">
            <ContactLinks />
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Contact;
