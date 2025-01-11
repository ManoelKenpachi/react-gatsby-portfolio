import React, { useState, useEffect } from "react";
import axios from "axios";

const TranslationGame = () => {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [revealedLetters, setRevealedLetters] = useState(0);

  const apiKey = "";

  const fetchWord = async () => {
    try {
      const response = await axios.get(
        "https://random-word-api.herokuapp.com/word"
      );
      const randomWord = response.data[0];
      setWord(randomWord);
      fetchTranslation(randomWord);
      setRevealedLetters(0);
      setMessage("");
      setInput("");
    } catch (error) {
      console.error("Erro ao buscar palavra aleatória:", error);
    }
  };

  const fetchTranslation = async (word) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "Você é um tradutor de inglês para português.",
            },
            {
              role: "user",
              content: `Traduza a palavra "${word}" para português.`,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const translatedText = response.data.choices[0].message.content.trim();
      setTranslation(translatedText);
    } catch (error) {
      console.error("Erro ao traduzir palavra:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchWord();
    };
    fetchData();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Backspace") {
      setInput(input.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(e.key) && input.length < translation.length) {
      setInput(input + e.key);
    } else if (e.key === "Enter" && input.length === translation.length) {
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    if (input.toLowerCase() === translation.toLowerCase()) {
      setMessage("Correto!");
      setScore(score + 1);
      fetchWord();
    } else {
      if (revealedLetters >= translation.length - 1) {
        setMessage(`Errado! A resposta correta era: ${translation}`);
        fetchWord();
      } else {
        setRevealedLetters(revealedLetters + (revealedLetters === 0 ? 1 : 2));
        setMessage("Errado! Vamos revelar mais letras.");
      }
    }
  };

  const renderRevealedTranslation = () => {
    return Array.from({ length: translation.length }).map((_, index) => {
      if (index < revealedLetters) {
        return translation[index];
      }
      return "";
    });
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        color: "white",
        outline: "none",
      }}
      onKeyDown={handleKeyPress}
      tabIndex="0"
    >
      <h1>Jogo de Tradução</h1>
      <div style={{ fontSize: "24px", marginBottom: "20px" }}>
        Palavra em inglês: <strong>{word}</strong>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${translation.length}, 50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: translation.length }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "50px",
              height: "50px",
              border: "2px solid #555",
              backgroundColor: "#222",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              textTransform: "uppercase",
            }}
          >
            {input[index] || renderRevealedTranslation()[index]}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px", fontSize: "20px", color: "#f39c12" }}>
        {message}
      </div>
      <div style={{ marginTop: "20px", fontSize: "18px", color: "white" }}>
        Pontuação: <strong>{score}</strong>
      </div>
    </div>
  );
};

export default TranslationGame;
