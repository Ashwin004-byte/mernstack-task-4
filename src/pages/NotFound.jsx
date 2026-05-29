function NotFound() {
  return (
   <div
  style={{
    minHeight: "calc(100vh - 80px)",
    background: "linear-gradient(to right, #f8fafc, #dbeafe)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }}
>
    
      <h1
        style={{
          fontSize: "80px",
          color: "#ef4444",
          marginBottom: "20px"
        }}
      >
        404
      </h1>

      <p
        style={{
          fontSize: "28px",
          color: "#4b5563"
        }}
      >
        Page Not Found
      </p>
    </div>
  );
}

export default NotFound;