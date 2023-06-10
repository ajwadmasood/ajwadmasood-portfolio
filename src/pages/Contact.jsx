import React from "react";

const Contact = () => {
  return (
    <section class="section single-page">
      <div class="section-title">
        <h1>contact</h1>
        <div class="underline"></div>
      </div>
      <div class="section-center page-info contact-page-center">
        <article class="contact-info">
          <div class="contact-item">
            <h4 class="contact-title">
              <span class="contact-icon">
                <i class="fas fa-envelope"></i>
              </span>
              email
            </h4>
            <h4 class="contact-text">
              {" "}
              <a
                href="mailto:ajwadmasood@hotmail.com"
                style={{ textTransform: "lowercase" }}
              >
                {" "}
                ajwadmasood@hotmail.com
              </a>
            </h4>
          </div>
          <div class="contact-item">
            <h4 class="contact-title">
              <span class="contact-icon">
                <i class="fas fa-phone"></i>
              </span>
              linkedIn
            </h4>
            <h4 class="contact-text">
              {" "}
              <a
                href="https:/www.linkedin.com/in/ajwad-masood-3a40a7125/"
                style={{ textTransform: "lowercase" }}
              >
                <span> </span>Ajwad Masood{" "}
              </a>
            </h4>
          </div>
        </article>
        <article class="contact-form">
          <h3>contact us</h3>
          <form>
            <div class="form-group">
              <input
                type="text"
                placeholder="name"
                class="form-control"
                name="name"
              />
              <input
                type="email"
                placeholder="email"
                class="form-control"
                name="email"
              />
              <textarea
                name="message"
                placeholder="message"
                class="form-control"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" class="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </div>
    </section>
    // <section class="section single-page">
    //   <div class="section-title">
    //     <h1>contact</h1>
    //     <div class="underline"></div>
    //   </div>
    //   <div class="section-center page-info" style={{ width: "500px" }}>
    //     <p>
    //       If you are looking to get ahold of me, you can send me an email at
    // <a
    //   href="mailto:ajwadmasood@hotmail.com"
    //   style={{ textTransform: "lowercase" }}
    // >
    //   {" "}
    //   ajwadmasood@hotmail.com
    // </a>
    //     </p>
    //     <p>
    //       You can also reach me on LinkedIn at
    // <a href="https:/www.linkedin.com/in/ajwad-masood-3a40a7125/">
    //   <span> </span>Ajwad Masood{" "}
    // </a>
    //     </p>
    //   </div>
    // </section>
    // <section class="contact" id="contact-us" style={{backgroundColor:'blue'}}>
    // <section style={{ backgroundColor: "blue" }}>
    //   <div class="section-center clearfix">
    // <article class="contact-info">
    //   <div class="contact-item">
    //     <h4 class="contact-title">
    //       <span class="contact-icon">
    //         <i class="fas fa-location-arrow"></i>
    //       </span>
    //       address
    //     </h4>
    //     <h4 class="contact-text">
    //       H#34 college road <br />
    //       Safari 1 bahria town
    //     </h4>
    //   </div>
    // <div class="contact-item">
    //   <h4 class="contact-title">
    //     <span class="contact-icon">
    //       <i class="fas fa-envelope"></i>
    //     </span>
    //     email
    //   </h4>
    //   <h4 class="contact-text">carbonpvt.ltd@email.com</h4>
    // </div>
    // <div class="contact-item">
    //   <h4 class="contact-title">
    //     <span class="contact-icon">
    //       <i class="fas fa-phone"></i>
    //     </span>
    //     telephone
    //   </h4>
    //   <h4 class="contact-text">+92 300 986 1720</h4>
    // </div>
    //     </article>
    // <article class="contact-form">
    //   <h3>contact us</h3>
    //   <form>
    //     <div class="form-group">
    //       <input
    //         type="text"
    //         placeholder="name"
    //         class="form-control"
    //         name="name"
    //       />
    //       <input
    //         type="email"
    //         placeholder="email"
    //         class="form-control"
    //         name="email"
    //       />
    //       <textarea
    //         name="message"
    //         placeholder="message"
    //         class="form-control"
    //         rows="5"
    //       ></textarea>
    //     </div>
    //     <button type="submit" class="submit-btn btn">
    //       submit here
    //     </button>
    //   </form>
    // </article>
    //   </div>
    // </section>
  );
};

export default Contact;
