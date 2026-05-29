function About() {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "50px",
        borderRadius: "20px",
        boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
        width: "500px"
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          color: "#7c3aed",
          marginBottom: "20px"
        }}
      >
        About Us
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#4b5563",
          lineHeight: "35px"
        }}
      >
        This project demonstrates multi-page routing using React Router DOM.
      </p>
    </div>
  );
}

export default About;