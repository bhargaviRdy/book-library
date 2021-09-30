import "./styles.css";
import React, { useState } from "react";

const books = {
  currently_reading: [
    {
      name: "The subtle art of Not Giving a F*ck",
      description: "Tells about how to handle situations",
      rating: "5/5"
    },
    {
      name: "Tuesdays with Morries",
      description: "Life lessons given by an old man",
      rating: "4/5"
    },
    {
      name: "Gone Girl",
      description: "A thriller story about a couple",
      rating: "3.5/5"
    }
  ],

  fiction: [
    {
      name: "The Kite Runner",
      description: "Store of two boys based on Afghanisthan",
      rating: "5/5"
    },
    {
      name: "One Indian Women",
      description: "Story of a women going through her career and marriage",
      rating: "4.5/5"
    },
    {
      name: "Revolution 2020",
      description: "Story about teenagers and politics",
      rating: "4.5/5"
    }
  ],
  self_help: [
    {
      name: "The Atomic Habits",
      description: " Tells us the impact of good habits and how to achive them",
      rating: "5/5"
    },
    {
      name: "The Miracle Morning",
      description:
        "Tells us about the usefullness of waking up early in the morning",
      rating: "5/5"
    },
    {
      name: "Meditations",
      description: "Life lessions by Marcus Aurelius",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedBooks, setSelectedBooks] = useState([]);

  function showBooks(genre) {
    setSelectedBooks(books[genre]);
    console.log(books[genre]);
    books[genre].map((book) => {
      return (
        <div>
          <h3>{book.name}</h3>
          <h4>{book.rating}</h4>
        </div>
      );
    });
  }
  return (
    <div className="App">
      <h1>📚 my library</h1>
      <p>checkout the books I read. Select a genre to get started</p>
      {Object.keys(books).map((genre) => {
        return (
          <button
            style={{
              fontSize: "0.9rem",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              margin: "1rem 0.3rem",
              backgroundColor: "#E5E7EB"
            }}
            onClick={() => showBooks(genre)}
            key={genre}
          >
            {genre}
          </button>
        );
      })}
      <hr />
      {selectedBooks.map((book) => {
        return (
          <div
            style={{
              backgroundColor: "white",
              width: "70%",
              paddingLeft: "1rem",
              margin: "1rem 0.2rem",
              borderRadius: "0.5rem",
              border: "1px solid #D1D5DB"
            }}
          >
            <p style={{ fontSize: "large" }}>{book.name}</p>
            <p>{book.description}</p>
            <p style={{ fontSize: "small" }}>Rating: {book.rating}</p>
          </div>
        );
      })}
    </div>
  );
}
