import React, { useState, useEffect } from "react";
import Form from "./Form";
const Dashboard = (data) => {
  const [quote, setQuote] = useState("");
  const [movie, setMovie] = useState({});
  const [exercises, setExercises] = useState([]);
  const [movies, setMovies] = useState([]);
  const [meme, setMeme] = useState("");

  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  console.log(data.data.body);
  // Fetch data from APIs or from a local database
  useEffect(() => {
    fetchQuote();
    fetchMovies();
    fetchExercises();
    fetchMeme();
  }, []);

  const fetchQuote = () => {
    // Example quote data
    const exampleQuote = {
      text: "Example quote text.",
    };
    setQuote(exampleQuote);
  };

  const fetchMovies = () => {
    // Example movies data
    const exampleMovies = [
      {
        name: "Movie 1",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false",
        url: "https://example.com/movie1",
      },
      {
        name: "Movie 2",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false",
        url: "https://example.com/movie2",
      },
      {
        name: "Exercise 1",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false",
        url: "https://example.com/exercise1",
      },
      {
        name: "Exercise 2",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false",
        url: "https://example.com/exercise2",
      },

      // Add more movies as needed
    ];
    setMovies(exampleMovies);
  };

  const fetchExercises = () => {
    const exampleExercises = [
      {
        name: "Exercise 1",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false",
        url: "https://example.com/exercise1",
      },
      {
        name: "Exercise 2",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false",
        url: "https://example.com/exercise2",
      },
      {
        name: "Exercise 1",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false",
        url: "https://example.com/exercise1",
      },
      {
        name: "Exercise 2",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false",
        url: "https://example.com/exercise2",
      },
      {
        name: "Exercise 1",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false",
        url: "https://example.com/exercise1",
      },
    ];
    setExercises(exampleExercises);
  };

  const fetchMeme = () => {
    // Example meme data
    const exampleMeme = "logo512.png";
    setMeme(exampleMeme);
  };
  const handleAddMovie = (movie) => {
    setSelectedMovies([...selectedMovies, movie]);
  };
  const handleAddExercise = (exercise) => {
    setSelectedExercises([...selectedExercises, exercise]);
  };

  const quoteContainerStyle = {
    padding: 15,
    paddingTop: 0,
  };
  const quoteTextStyle = {
    fontSize: 25,
    alignSelf: "flex-end",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#46703b",
  };

  const quoteBoxStyle = {
    padding: 10,
    width: "500px",
    alignItems: "center",
    margin: 8,
    borderRadius: 20,
    backgroundColor: "#face4b",
    borderTopRightRadius: 0,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    padding: "20px",
    maxWidth: "300px",
  };
  const [showForm, setShowForm] = useState(false);

  const handleCreateMeme = () => {
    setShowForm(true);
  };
  return (
    <div style={{ padding: "10px" }}>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
        Once your now ours
      </h1>

      <div style={quoteContainerStyle}>
        <h2 style={quoteTextStyle}>Quote of the day</h2>
        <div style={quoteBoxStyle}>
          <div style={{ fontSize: 19 }}>
            Be yourself no matter what they say!
          </div>
        </div>
      </div>

      <div style={quoteContainerStyle}>
        <h2 style={quoteTextStyle}>Movies</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#face4b",
                margin: "10px",
                padding: "20px",
                maxWidth: "290px",
                position: "relative",
              }}
            >
              <div style={{ transition: "transform 0.3s, box-shadow 0.3s" }}>
                <img
                  src={movie.image_url}
                  alt={movie.name}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <h3 style={{ marginTop: 0, fontSize: "24px" }}>{movie.name}</h3>
                {/* <button style={{ position: "absolute", top: "5px", right: "5px", backgroundColor: "#f8f9fa", border: "none", borderRadius: "6px", padding: "8px 8px", fontSize: "14px", cursor: "pointer" }} onClick={() => handleAddMovie(movie)}>Favorite</button>
            <a href={movie.url} target="_blank" rel="noopener noreferrer" style={{  color: "#ffffff",marginTop:0, textDecoration: "none", fontWeight: "bold", border: "1px solid #ffffff", borderRadius: "20px", padding: "8px 12px",  backgroundColor:"transparent" }}>Open Movie</a>
          */}{" "}
              </div>
              <style>
                {`
           div:hover > div {
            transform: translateY(-6px);
          }

            a:hover {
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
              background-color: #007bff;
              color: #fff;
            }
          `}
              </style>
            </div>
          ))}
        </div>
      </div>

      <div style={quoteContainerStyle}>
        <h2 style={quoteTextStyle}>Exercises</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {exercises.map((exercise, index) => (
            <div
              key={index}
              style={{
                background: "#face4b",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                margin: "10px",
                padding: "20px",
                maxWidth: "290px",
                maxHeight: "500px",
                position: "relative",
              }}
            >
              <div style={{ transition: "transform 0.3s, box-shadow 0.3s" }}>
                <img
                  src={exercise.image_url}
                  alt={exercise.name}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <h3 style={{ marginTop: 0, fontSize: "24px" }}>
                  {exercise.name}
                </h3>
                {/* <button style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "#f8f9fa", border: "none", borderRadius: "4px", padding: "8px 12px", fontSize: "14px", cursor: "pointer", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }} onClick={() => handleAddExercise(exercise)}>Favorite</button>
            <a href={exercise.url} target="_blank" rel="noopener noreferrer" style={{  color: "#ffffff",marginTop:0, textDecoration: "none", fontWeight: "bold", border: "1px solid #ffffff", borderRadius: "20px", padding: "8px 12px",  backgroundColor:"transparent"}}>Open Exercise</a>
             */}
              </div>
              <style>
                {`
           div:hover > div {
            transform: translateY(-6px);
          }

            a:hover {
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
              background-color: #007bff;
              color: #fff;
            }
          `}
              </style>
            </div>
          ))}
        </div>
      </div>

      <div style={quoteContainerStyle}>
        <h2 style={quoteTextStyle}>Create Meme</h2>
        {!showForm ? (
          <div>
            <button
              onClick={handleCreateMeme}
              style={{
                backgroundColor: "#face1b",
                color: "#fff",
                border: "1px solid ",
                borderRadius: "4px",
                padding: "8px 12px",
                fontSize: "20px",
                cursor: "pointer",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Create Meme
            </button>
          </div>
        ) : (
          <Form />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
