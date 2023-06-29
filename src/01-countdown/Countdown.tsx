/*
  ! Objectivo:
  El objetivo es constuir una cuenta regresiva

  Usar el código dado para constuirlo, pausarlo, animarlo y reanudarlo.

  Validaciones son requeridas

*/

import { useRef, useState } from "react"
import { RiPauseFill, RiPlayFill, RiRestartLine } from 'react-icons/ri';


export const CountdownPage = () => {

  //TODO: hacer ejercicio entre 5 a 30 segundos
  const [seconds, setSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(false)

  const timerRef = useRef<number>();

  const startTimer = () => {
    // Todo: 

    // 1. Si el timer esta corriendo, no hacer nada 
    if (isRunning) return;

    // 2. Si el timer no esta corriendo, iniciar el timer
    setIsRunning(true);

    timerRef.current = window.setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          window.clearInterval(timerRef.current);
          setIsRunning(false);
          return prevSeconds;
        }
        return prevSeconds - 1;
      })
    }, 1000);

  }

  const pauseTimer = () => {
    // Todo:

    // 1. Si el timer no esta corriendo, no hacer nada
    if (!isRunning) return;

    // 2. Si el timer esta corriendo, detener el timer
    setIsRunning(false);

    // 3. Si el timer esta corriendo, detener el timer
    window.clearInterval(timerRef.current);


  }

  const restartTimer = () => {
    // Todo:

    // 1. Si el timer esta corriendo, detener el timer
    window.clearInterval(timerRef.current);
    // 2. Si el timer esta corriendo, detener el timer
    setIsRunning(false);
    // 3. Si el timer esta corriendo, detener el timer
    setSeconds(10);
  }

  return (
    <div className="w-6/12 flex flex-col items-center">
      <span className="countdown font-mono text-6xl">
        <span style={{ '--value': seconds }}></span>
      </span>

      <div className="divider"></div>

      <div className="flex gap-2">

        <button onClick={() => startTimer()} className="btn btn-primary btn-circle">
          <RiPlayFill />
        </button>



        <button onClick={() => pauseTimer()} className="btn btn-secondary btn-circle">
          <RiPauseFill />
        </button>


        <button onClick={() => restartTimer()} className="btn btn-circle">
          <RiRestartLine />
        </button>
      </div>

    </div>
  )
}
