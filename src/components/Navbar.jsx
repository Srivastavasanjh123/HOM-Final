import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>BrandName</div>
      <div style={styles.navLinks}>
        <span onClick={() => scrollToSection("hero")} style={styles.link}>
          Home
        </span>
        <span onClick={() => scrollToSection("services")} style={styles.link}>
          Services
        </span>
        <span onClick={() => scrollToSection("pricing")} style={styles.link}>
          Pricing
        </span>
        <span onClick={() => scrollToSection("contact")} style={styles.link}>
          Contact
        </span>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#222",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    position: "fixed",
    width: "97%",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
  },
  brand: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    cursor: "pointer",
    transition: "color 0.3s ease",
    fontSize: "18px",
  },
};

export default Navbar;
