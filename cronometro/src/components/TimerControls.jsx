import React from 'react'

function TimerControls({onStart, onStop}) {
  return (
    <div className='timer-controls'>
        <button onClick={onStart}>Iniciar</button>
        <button onClick={onStop}>Zerar</button>
    </div>
  )
}

export default TimerControls