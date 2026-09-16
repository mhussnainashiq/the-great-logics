function Contact() {
return ( <main className="page">

```
  <section className="contact-page">

    <div className="contact-info">

      <p className="section-label">
        GET IN TOUCH
      </p>

      <h1>
        Let's build something
        <span> great.</span>
      </h1>

      <p>
        Have an idea, project, or business challenge?
        Tell us about it. We'd love to hear from you.
      </p>

      <div className="contact-details">

        <div>
          <strong>Email</strong>
          <p>hello@thegreatlogics.com</p>
        </div>

        <div>
          <strong>Business</strong>
          <p>The Great Logics</p>
        </div>

      </div>

    </div>

    <div className="contact-form">

      <form>

        <label>
          Your Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
        />

        <label>
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>
          Your Message
        </label>

        <textarea
          placeholder="Tell us about your project..."
        ></textarea>

        <button type="submit">
          Send Message →
        </button>

      </form>

    </div>

  </section>

</main>

)
}

export default Contact
