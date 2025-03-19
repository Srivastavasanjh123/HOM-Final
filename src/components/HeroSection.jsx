import React from "react";

const HeroSection = () => {
  return (
    <section style={styles.hero} id="hero">
      <video autoPlay loop muted playsInline style={styles.video}>
  <source src="/12716-241674181_small.mp4" type="video/mp4" />
  <source src="/12716-241674181_small.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>

      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to Our Service</h1>
        <p style={styles.subheading}>Premium solutions for all your needs</p>
        <button style={styles.button}>Get Started</button>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
  video: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "-1",
  },
  content: {
    zIndex: "1",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
  subheading: {
    fontSize: "1.5rem",
    margin: "10px 0",
  },
  button: {
    background: "orange",
    color: "white",
    padding: "10px 20px",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default HeroSection;
