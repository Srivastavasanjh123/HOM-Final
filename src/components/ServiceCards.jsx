import React from "react";

const ServiceCards = () => {
  const services = [
    { title: "Web Development", desc: "High-quality web development services." },
    { title: "SEO Optimization", desc: "Boost your website ranking." },
    { title: "Cloud Hosting", desc: "Reliable cloud hosting solutions." },
  ];

  return (
    <div style={styles.container} id="services">
      {services.map((service, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.title}>{service.title}</h3>
          <p style={styles.desc}>{service.desc}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "50px",
  },
  card: {
    background: "#3498db",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  desc: {
    fontSize: "16px",
  },
};

export default ServiceCards;
