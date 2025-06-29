import { useEffect, useState } from 'react';
import './Hero.css';
import Whats from '../assets/Whats.jpeg';

const Hero = () => {
  const [isDark, setIsDark] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [showGame, setShowGame] = useState(false);

  const phrases = ["Hi, I'm Lokeshwar Rao", "Full Stack Developer"];

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next: ${isXNext ? 'You (X)' : 'Computer (O)'}`;

  const handleClick = (index) => {
    if (board[index] || winner || !isXNext) return;
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
  };

  useEffect(() => {
    if (!isXNext && !winner) {
      const timeout = setTimeout(() => {
        const move = findBestMove(board);
        if (move !== -1) {
          const newBoard = [...board];
          newBoard[move] = 'O';
          setBoard(newBoard);
          setIsXNext(true);

          const checkWinner = calculateWinner(newBoard);
          if (checkWinner === 'O') {
            setTimeout(() => {
              alert("YOU WASTED 9 MONTHS FOR YOUR MOTHER !");
            }, 400);
          }
        }
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [isXNext, board, winner]);

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function findBestMove(board) {
    const emptyIndices = board.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let [a, b, c] of lines) {
      const line = [board[a], board[b], board[c]];
      if (line.filter(x => x === 'O').length === 2 && line.includes(null)) {
        return [a, b, c][line.indexOf(null)];
      }
    }

    for (let [a, b, c] of lines) {
      const line = [board[a], board[b], board[c]];
      if (line.filter(x => x === 'X').length === 2 && line.includes(null)) {
        return [a, b, c][line.indexOf(null)];
      }
    }

    if (board[4] === null) return 4;
    const corners = [0, 2, 6, 8];
    for (let i of corners) if (board[i] === null) return i;
    for (let i of emptyIndices) return i;

    return -1;
  }

  return (
    <section id="home" className={`hero ${isDark ? 'hero-dark' : 'hero-light'}`}>
      <div className="hero-content-row">
        <div className="hero-content">
          <img src={Whats} alt="Lokeshwar Rao" className="profile-image" />
          <h1 className="hero-title">{displayText}<span className="typing-cursor">|</span></h1>
        </div>
      </div>

      {!showGame && (
        <button className="challenge-btn" onClick={() => setShowGame(true)}>
          Challenge Me!
        </button>
      )}

      {showGame && (
        <div className="game-container fixed-game">
          <button className="challenge-btn hide-game-btn" onClick={() => setShowGame(false)}>
            Hide Game
          </button>
          <h2 className="status">{status}</h2>
          <div className="board">
            {board.map((cell, idx) => (
              <button key={idx} className="cell" onClick={() => handleClick(idx)}>
                {cell}
              </button>
            ))}
          </div>
          <button className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
      )}
    </section>
  );
};

export default Hero;
