function Home() {
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
          color: "#2563eb",
          marginBottom: "20px"
        }}
      >
        Welcome Home
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#4b5563",
          lineHeight: "35px"
        }}
      >
        This is the Home Page of our React Router application.
      </p>
    </div>
  );
}

export default Home;