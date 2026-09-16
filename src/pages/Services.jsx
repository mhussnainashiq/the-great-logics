function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive and high-performance websites for businesses.",
    },
    {
      number: "02",
      title: "Mobile Applications",
      description:
        "Powerful mobile applications designed for modern users.",
    },
    {
      number: "03",
      title: "Software Solutions",
      description:
        "Custom software solutions designed around your business needs.",
    },
    {
      number: "04",
      title: "Digital Marketing",
      description:
        "Digital strategies that help businesses grow their online presence.",
    },
  ]

  return (
    <main className="page">

      <section className="page-header">
        <p className="section-label">
          OUR SERVICES
        </p>

        <h1>
          What We <span>Do.</span>
        </h1>

        <p>
          We provide digital solutions that help businesses
          build, grow and succeed.
        </p>
      </section>

      <section className="services-section">

        <div className="service-page-grid">

          {services.map((service) => (
            <div className="professional-card" key={service.number}>

              <div className="service-number">
                {service.number}
              </div>

              <h2>
                {service.title}
              </h2>

              <p>
                {service.description}
              </p>

              <div className="arrow">
                →
              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  )
}

export default Services