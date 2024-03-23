import React, { useState } from "react";
import Dashboard from "./Dashboard";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  position: "relative",
};

const buttonContainerStyle = {
  position: "absolute",
  top: "50%",
  right: "700px", // Adjust the distance from the right side
  transform: "translateY(-50%)",
  fontSize: "20px",
};

const logoContainerStyle = {
  position: "absolute",
  top: "51%",
  left: "245px", // Adjust the distance from the left side
  transform: "translateY(-50%)",
};

const taskBoxStyle = {
  width: "400px",
  padding: "30px",
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
  position: "absolute",
  top: "35%",
  left: "38%", 
};

const buttonStyle = {
  backgroundColor: "#008CBA", 
  color: "#fff", 
  border: "none",
  padding: "15px 20px", 
  borderRadius: "25px", 
  cursor: "pointer",
  width: "150px",
};
const button = {
  backgroundColor: "#008CBA", 
  color: "#fff", 
  border: "none",
  borderRadius: "5px",
  padding: "13px 20px",
  cursor: "pointer",
  width: "100px",
};

const HomePage = () => {
  const [showTaskBox, setShowTaskBox] = useState(false);
  const [task, setTask] = useState("");
  const [responseData, setResponseData] = useState({});

  const [showdashboard, setDashboard] = useState(false);

  const handleButtonClick = () => {
    setShowTaskBox(true);
  };
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (task == "") {
      alert("Fill something");
    }

    try {
      // Making a POST request using fetch
      const response = await fetch("https://reqres.in/api/users?page=2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: task }), // Sending data as JSON
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parsing the response JSON data
      const responseD = await response.json();
      setResponseData(responseD);
      setDashboard(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {!showdashboard && (
        <div style={containerStyle}>
          <div style={logoContainerStyle}>
            <img src="tink.gif" alt="Robot Logo" width="420px" />
          </div>
          <div style={buttonContainerStyle}>
            {!showTaskBox && (
              <button onClick={handleButtonClick} style={buttonStyle}>
                Start Task
              </button>
            )}
          </div>
          {showTaskBox && !showdashboard && (
            <div style={taskBoxStyle}>
              <h2>Task Box</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="How's your day..."
                  value={task}
                  onChange={handleInputChange}
                  style={{
                    width: "95%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                />
                <button style={button}>Submit</button>
              </form>
            </div>
          )}
        </div>
      )}
      {showdashboard && <Dashboard data={responseData} />}
    </div>
  );
};

export default HomePage;
