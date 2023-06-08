import React, { useState } from 'react';
import s from './game.module.css';
const Game = () => {
  const words = [
    { word: 'apple', hint: 'iphone' },
    { word: 'moms', hint: 'i love hot ' },
    { word: 'frosty', hint: 'palm' },
    { word: 'algorithm', hint: 'A step-by-step procedure to solve a problem.' },
    { word: 'database', hint: 'A structured collection of data.' },
    { word: 'programming', hint: 'The process of creating computer programs.' },
    { word: 'network', hint: 'A group of interconnected devices.' },
    { word: 'server', hint: 'A computer or system that provides resources to other computers.' },
    { word: 'security', hint: 'Protection against unauthorized access or harm.' },
    { word: 'cloud', hint: 'A network of remote servers to store and process data.' },
    {
      word: 'frontend',
      hint: 'The part of a website or application that the user interacts with.',
    },
    {
      word: 'backend',
      hint: 'The part of a website or application that handles the behind-the-scenes functionality.',
    },
    { word: 'coding', hint: 'The process of writing instructions for a computer program.' },
    { word: 'framework', hint: 'A platform for building software applications.' },
    { word: 'debugging', hint: 'The process of identifying and fixing errors in a program.' },
    {
      word: 'virtualization',
      hint: 'Creating a virtual version of a resource such as a server or operating system.',
    },
    { word: 'agile', hint: 'An iterative approach to software development.' },
    {
      word: 'machine learning',
      hint: 'A subset of artificial intelligence that enables systems to learn and improve from data.',
    },
  ];
  const [message, setMessage] = useState('???');
  const [guess, setGuess] = useState('');
  const [index, setIndex] = useState(Math.floor(Math.random() * 18));
  const handleWord = () => {
    if (guess.toLowerCase() === words[index].word) {
      setMessage(`Поздравляю,вы угадали. Слово было: ${words[index].word}`);
    } else {
      setMessage(`Попробуйте еще раз,${guess} неправильно`);
    }
    setGuess('');
  };
  const reset = () => {
    setIndex(Math.floor(Math.random() * 18));
    setMessage('???');
    setGuess('');
  };
  return (
    <div className={s.container}>
      <div className={s.gamebox}>
        <h1 className={s.header}>Угадай слово</h1>
        <p className={s.message}>{message}</p>
        <hr />
        <p className={s.hint}>
          Подсказка : <b>{words[index].hint}</b>
        </p>
        <input
          placeholder="Введите слово"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleWord}>Отправить</button>
        <button onClick={reset}>Заново </button>
      </div>
    </div>
  );
};
export default Game;
