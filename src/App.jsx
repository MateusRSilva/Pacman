import React, { useState } from 'react';
import './App.css';
import Pacman from './Pacman'

export default function App() {
  const [renderCount, setRenderCount] = useState(0);

  const handleRender = () => {
    setRenderCount(prevCount => prevCount + 1);
  };

  const [showBalloon, setShowBalloon] = useState(false);

  const handleClick = () => {
    setShowBalloon(!showBalloon);
  };
  return (
    <>
      <main className="nintendo-switch">
        <aside className="actions left">
          <div className="analogic">
            <div className="center-circle" />
          </div>
          <div className="buttons">
            <button />
            <button />
            <button />
            <button />
          </div>
          <div className="square button" onClick={handleRender}><a></a></div>
          <p className='startbutton'>START</p>
        </aside>
        <label className="middle" htmlFor="screen">
          <div className="screen">
            <div className="glass" />
            {renderCount > 0 && <Pacman key={renderCount} />}

          </div>
        </label>
        <aside className="actions right">
          <div className="analogic">
            <div className="center-circle" />
          </div>
          <div className="buttons">
            <button />
            <button />
            <button />
            <button />
          </div>
          <div className="circle" />
          <div className='circle neon' />
          <div className='helpButtonContainer'>
            <div class="button" onClick={handleClick}>
              <a>?</a>
            </div>
            {showBalloon && (
              <div className="balloon">
                <div className="balloon-content">
                  Aperte Start para começar!<br />Use as setas do teclado para mover o Pacman!
                </div>
              </div>
            )}
          </div>
        </aside>
      </main>

    </>
  );
}
