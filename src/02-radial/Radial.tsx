/**
 * ! Objetivo: 
 * Similar al anterior, hay que constuir un timer
 * 
 * Pero la idea es convertir los segundos restantes en un porcentaje
 * que muestre el radia-progress siempre al inicio al 100% y dependiendo del valor
 * ajuste el porcentaje correctamente.
 * 
 * No olvidar de las validaciones
 * 
 */

import { useRef, useState } from "react"
import { RiPauseFill, RiPlayLine, RiRestartLine } from "react-icons/ri";


interface Props {
  initialValue?: number;
}

export const RadialPage = ({ initialValue = 20 }: Props) => {

  // Todo: cambiar el número de 100 a 10 o cualquier otro número
  // pero el porcentaje del radial-progress debe de ser correcto basado en ese numero
  const [seconds, setSeconds] = useState(initialValue);
  const [isRunning, setIsRunning] = useState(false)
  // const percentage = seconds; 
  // Todo: Realizar el calculo
  const percentage = 100 - (seconds * 100 / initialValue);
  const timerRef = useRef<number>();

  const startTimer = () => {
    // Todo:
    // 1. Si el timer esta corriendo, no hacer nada
    if (isRunning) return;

    // 2. Si el timer no esta corriendo, iniciar el timer
    setIsRunning(true);

    // 3. Si el timer no esta corriendo, iniciar el timer
    const timer = window.setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          window.clearInterval(timer);
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
  }

  const restartTimer = () => {
    // Todo:

    // 1. Si el timer esta corriendo, detener el timer
    window.clearInterval(timerRef.current);
    // 2. Si el timer esta corriendo, detener el timer
    setIsRunning(false);
    // 3. Si el timer esta corriendo, detener el timer
    setSeconds(initialValue);
  }


  return (
    <div className="w-4/12 flex flex-col items-center">

      {/* Radial Primario */}
      <div
        className="radial-progress bg-secondary text-primary-content border-4 border-secondary text-3xl text-center"
        style={{ '--value': percentage, "--size": '12rem', '--thickness': '2rem' }}>
        <span>{seconds}</span>
        <span className='text-sm'>
          {/* Cuando falten 10 segundos, pasar a porcentaje */}
          {seconds <= 10 ? `${percentage.toFixed(0)}%` : 'Segundos'}
        </span>
      </div>

      {/* Radial para hacer efecto de sombra */}
      <div
        className="absolute radial-progress text-primary-content opacity-40 border-4 border-secondary"
        style={{ '--value': 100, "--size": '12rem', '--thickness': '2rem' }}></div>

      <div className="divider"></div>

      <div className="flex mt-2 gap-2">

        <button
          onClick={() => startTimer()}
          className="btn btn-accent">
          <RiPlayLine />
        </button>

        <button
          onClick={() => pauseTimer()}
          className="btn ">
          <RiPauseFill />
        </button>

        <button
          onClick={() => restartTimer()}
          className="btn ">
          <RiRestartLine />
        </button>

      </div>


    </div>
  )
}
