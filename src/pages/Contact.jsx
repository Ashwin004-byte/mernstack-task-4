function Contact() {
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
          color: "#059669",
          marginBottom: "20px"
        }}
      >
        Contact Us
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#4b5563",
          lineHeight: "35px"
        }}
      >
        Feel free to contact us for any React Router related queries.
      </p>
    </div>
  );
}

export default Contact;