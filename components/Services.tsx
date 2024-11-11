const services = [
  {
    id: "01",
    title: "Full Stack Development",
    description:
      "Complete development of web applications, covering both front-end and back-end with seamless integration.",
  },
  {
    id: "02",
    title: "Front-End Development",
    description:
      "Creation of responsive, user-friendly interfaces using modern frameworks for an optimal user experience.",
  },
  {
    id: "03",
    title: "Back-End Development",
    description:
      "Development of secure and scalable server-side logic, APIs, and database management for reliable performance.",
  },
];

const Services = () => {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-6xl  font-extrabold sticky top-20">SERVICES</h2>
        </div>
        <div className="md:w-3/4">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-start">
              <div className="text-purple-300 font-bold text-5xl mr-6">
                {service.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
