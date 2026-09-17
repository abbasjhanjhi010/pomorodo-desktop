import { useState, useEffect } from 'react'
import './App.css'


import playImg from "./assets/play.png";
import resetImg from "./assets/reset.png";
import workBtnClicked from "./assets/work-clicked.png";
import workBtn from "./assets/work.png";
import breakBtnClicked from "./assets/break-clicked.png";
import breakBtn from "./assets/break.png";
import breakGif from "./assets/break.gif";
import timer from "./assets/timer.mp3";
import closeBtn from "./assets/close.png";
import idleGif from "./assets/idle.gif";
import workGif from "./assets/work.gif";



function App() {

  const [timeLeft, setTimeLeft] = useState(25*60);
  const [isRunning, setIsRunning] = useState(false); 
  const [isBreak, setIsBreak] = useState(false);
  const [encouragement, setEncouragement] = useState("");

  // errors will go away once you import the assets. 
  const [breakButtonImage, setBreakButtonImage] = useState(breakBtn);
  const [workButtonImage, setWorkButtonImage] = useState(workBtn);
  const [gifImage, setGifImage] = useState(idleGif);
  const [image, setImage] = useState(playImg);

  // timer audio 
  const timerSound = new Audio(timer);



  //    MESSAGES
  // Work session messages (shown when a focus session starts)
const workMessages = [
  "Time to focus. One task, one Pomodoro.",
  "25 minutes of deep work. You've got this.",
  "Cut the noise. Focus your mind.",
  "Dripping water penetrates stone",
  "Smart work over Hard work",
  "Jarvis, active Focus mode",
  "Your future self will thank you for this ;)",
  "DnD user in Deep Focus Mode",
];

/*
// Cheer messages (shown when a session/break completes)
const cheerMessages = [
  "Nice work! Another Pomodoro in the books.",
  "You crushed that session. Take a breather.",
  "Progress made. Go stretch those legs.",
  "That's one more step closer to done.",
  "Well earned break. Enjoy it.",
  "You showed up and did the work. 🍅",
  "Session complete. You're on a roll.",
  "Great focus! Recharge for the next round.",
  "Look at you, getting things done.",
  "Another one down. Keep the momentum going.",
];
*/

// Fun facts (shown during breaks or as rotating tips)
const funFacts = [
  "Did you know: The word pomodoro means 'tomato' in Italian?",
  "Fact: The Pomodoro Technique was invented by Francesco Cirillo in the late 1980s.",
  "Fact: Cirillo used a tomato-shaped kitchen timer, which inspired the name.",
  "Did you know: The original technique recommends a 5-minute break after each 25-minute session.",
  "Fact: After 4 Pomodoros, you're meant to take a longer break — usually 15-30 minutes.",
  "Did you know: Multitasking can reduce productivity by up to 40%, according to researchers.",
  "Fact: Our brains can typically sustain deep focus for about 20-30 minutes before attention drifts.",
  "Did you know: Taking short breaks can actually improve your ability to focus for extended periods.",
  "Fact: The 'Zeigarnik Effect' explains why unfinished tasks tend to stick in your mind more than completed ones.",
  "Did you know: Parkinson's Law states that work expands to fill the time available for its completion.",
  "Fact: Studies show single-tasking is more efficient than switching between multiple tasks.",
  "Did you know: The average human attention span for a single task is estimated at around 20 minutes.",
];

// updates the encouragement messages

useEffect( () => {
  let messageInterval: NodeJS.Timeout;
  
  if(isRunning) { 
    const messages = isBreak? workMessages : funFacts;
    setEncouragement(messages[0]);      //starts with messages in order
    let index =1

    messageInterval = setInterval(() => {
      setEncouragement(messages[index])
      index = (index + 1) % messages.length;
    }, 12000);   // alternates every 12 seconds
  } else {
    setEncouragement("");
  }

  return() => clearInterval(messageInterval);
}, [isRunning, isBreak]);




//      countdown timer
  useEffect( () => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
       setTimeLeft(prev => prev - 1); 
      }, 1000);
    }
    return() => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // switch mode set to false
  useEffect( () => {
    switchMode(false);
  }, []);


  // timer alert
     useEffect(() => {
    if (timeLeft === 0 && isRunning) {
        timerSound.play().catch(err => {
            console.error("Audio play failed:", err);
        });
        setIsRunning(false); // Optional: auto-stop the timer
        setImage(playImg);   // Reset to play button
        setGifImage(idleGif); // Reset to idle gif
        setTimeLeft(isBreak ? 5 * 60 : 25 * 60);
    }
}, [timeLeft]);


  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');

    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const switchMode = (breakMode: boolean) => {
    setIsBreak(breakMode);
    setIsRunning(false);
    setBreakButtonImage(breakMode ? breakBtnClicked : breakBtn);
    setWorkButtonImage(breakMode ? workBtn : workBtnClicked);
    setTimeLeft(breakMode ? 5 * 60: 25 * 60);
    setGifImage(idleGif);
  }

  const handleClick = () => {
    if (!isRunning)  {
      setIsRunning(true); 
      setGifImage(isBreak ? breakGif : workGif);
      setImage(resetImg);
    } else {
      setIsRunning(false);
      setTimeLeft(isBreak ? 5 * 60: 25*60);
      setGifImage(idleGif);
      setImage(playImg);
    }
  }

  const containerClass = `home-container ${isRunning ? "background-green": ""}} `; 

  return (
    <>
    <div className={containerClass} style={{position: 'relative'}}>
    <div>
      <button className='close-button' onClick={() => window.electronAPI?.closeApp()}>
        <img src={closeBtn} alt="close"/>
      </button>
    </div>

    <div className="home-content">
      <div className="home-control">
        <button className ="image-button" onClick={() => switchMode(false)}>
          <img src={workButtonImage} alt="Work"/>
        </button>
        <button className="image-button" onClick={() => switchMode(true)}>
          <img src={breakButtonImage} alt="Break"/>
        </button>
      </div>

      <p className={`encouragement-text ${!isRunning ? "hidden" : ""}`}>
        { encouragement }
      </p>

      <h1 className='home-timer'>{formatTime(timeLeft)}</h1>
      <img src={gifImage} alt="Timer Status" className="gif-image" />
      <button className='home-button' onClick={handleClick}>
        <img src={image} alt="button icon"/>
      </button>
    </div>
    </div>
    </>
  )
}

export default App
