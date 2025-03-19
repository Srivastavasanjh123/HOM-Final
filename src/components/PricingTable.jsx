import React from "react";

const PricingTable = () => {
  const pricingPlans = [
    { title: "Basic", price: "$10/month", features: ["1 Website", "Basic Support", "5GB Storage"] },
    { title: "Premium", price: "$50/month", features: ["Unlimited Websites", "24/7 Support", "50GB Storage"] },
  ];

  return (
    <div style={styles.container} id="pricing">
      <h2 style={styles.heading}>Pricing Plans</h2>
      <div style={styles.pricingWrapper}>
        {pricingPlans.map((plan, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.title}>{plan.title}</h3>
            <p style={styles.price}>{plan.price}</p>
            <ul style={styles.featureList}>
              {plan.features.map((feature, idx) => (
                <li key={idx} style={styles.feature}>{feature}</li>
              ))}
            </ul>
            <button style={styles.button}>Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "60px 20px",
    background: "#ecf0f1",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
  },
  pricingWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "30px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "250px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  price: {
    fontSize: "20px",
    color: "#e67e22",
    margin: "10px 0",
  },
  featureList: {
    listStyle: "none",
    padding: "0",
    fontSize: "16px",
  },
  feature: {
    margin: "5px 0",
  },
  button: {
    background: "#3498db",
    color: "white",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "10px",
  },
};

export default PricingTable;
