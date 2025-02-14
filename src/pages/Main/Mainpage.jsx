import React, { useState, useEffect } from "react";
import "./main_page.css";

const maxGuesses = 6;

const Mainpage = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [hint, setHint] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    getRandomWord();
  }, []);

  const getRandomWord = async () => {
    try {
      // Fetch words related to "hangman" from Datamuse API
      const response = await fetch("https://api.datamuse.com/words?ml=hangman");
      const data = await response.json();

      if (data.length === 0) throw new Error("No words found.");

      const randomWord = data[Math.floor(Math.random() * data.length)].word;
      setCurrentWord(randomWord);
      setCorrectLetters([]);
      setWrongGuesses(0);
      setGameOver(false);
      setVictory(false);

      // Fetch word definition from Dictionary API
      fetchDefinition(randomWord);
    } catch (error) {
      console.error("Error fetching word:", error);
      setCurrentWord("error");
      setHint("Failed to load word.");
    }
  };

  const fetchDefinition = async (word) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();

      if (data[0]?.meanings?.length > 0) {
        setHint(data[0].meanings[0].definitions[0].definition);
      } else {
        setHint("No definition available.");
      }
    } catch (error) {
      console.error("Error fetching definition:", error);
      setHint("Definition not found.");
    }
  };

  const handleLetterClick = (letter) => {
    if (currentWord.includes(letter)) {
      setCorrectLetters((prev) => [...prev, letter]);
    } else {
      setWrongGuesses((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (wrongGuesses >= maxGuesses) {
      setGameOver(true);
    }
    if (currentWord && correctLetters.length === new Set(currentWord).size) {
      setVictory(true);
    }
  }, [wrongGuesses, correctLetters, currentWord]);

  return (
    <div className="container">
      <div className="hangman-box">
        <img src={`images/hangman-${wrongGuesses}.svg`} alt="hangman" />
        <h1>Hangman Game</h1>
      </div>
      <div className="game-box">
        <ul className="word-display">
          {currentWord.split("").map((letter, index) => (
            <li
              key={index}
              className={`letter ${
                correctLetters.includes(letter) ? "guessed" : ""
              }`}
            >
              {correctLetters.includes(letter) ? letter : ""}
            </li>
          ))}
        </ul>
        <h4 className="hint-text">
          Hint: <b>{hint}</b>
        </h4>
        <h4 className="guesses-text">
          Incorrect Guesses:{" "}
          <b>
            {wrongGuesses}/{maxGuesses}
          </b>
        </h4>
        <div className="keyboard">
          {Array.from({ length: 26 }, (_, i) =>
            String.fromCharCode(97 + i)
          ).map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              disabled={correctLetters.includes(letter) || gameOver}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
      {(gameOver || victory) && (
        <div className="game-model show">
          <div className="content">
            <h2 className={victory ? "victory-text" : "lost-text"}>
              {victory ? "🎉 You Won!" : "😢 You Lost!"}
            </h2>
            <img
              src={`images/${victory ? "victory" : "lost"}.gif`}
              alt="Game Status"
            />
            <p className="result-text">
              {victory ? "You found the word:" : "The correct word was:"}
              <b>{currentWord}</b>
            </p>
            <button className="play-again-btn" onClick={getRandomWord}>
              🔄 Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mainpage;
