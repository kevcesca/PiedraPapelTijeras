'use client'
import React, { useState } from 'react';
import Modal from "./components/Modal/Modal";
import Image from 'next/image';
import styles from './page.module.css';
import { Grid } from '@mui/material';
import piedra from './punio.png';
import tijeras from './tijeras.png';
import papel from './manita.png';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [mostrarImagenes, setMostrarImagenes] = useState(false);

  const [eleccionJugador, setEleccionJugador] = useState(null);
  const [eleccionBot, setEleccionBot] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [jugadorGana, setJugadorGana] = useState(0);
  const [botGana, setBotGana] = useState(0);

  const opciones = ['piedra', 'papel', 'tijeras'];

  const empezarJuego = (eleccionJugador) => {
    const eleccionBot = opciones[Math.floor(Math.random() * opciones.length)];
    setEleccionJugador(eleccionJugador);
    setEleccionBot(eleccionBot);
    setShowModal(true);
    setMostrarImagenes(true);

    setTimeout(() => {
      setMostrarImagenes(false);
      if (eleccionJugador === eleccionBot) {
        setResultado("Empate");
      } else if (
        (eleccionJugador === 'piedra' && eleccionBot === 'tijeras') ||
        (eleccionJugador === 'papel' && eleccionBot === 'piedra') ||
        (eleccionJugador === 'tijeras' && eleccionBot === 'papel')
      ) {
        setResultado('Ganaste');
        setJugadorGana((victorias) => victorias + 1);
      } else {
        setResultado('Perdiste');
        setBotGana((victorias) => victorias + 1);
      }
    }, "1000");

    setTimeout(() => {
      setShowModal(false);
    }, "2000");
  };

  return (
    <main className={styles.centroColumna}>
      <h1>Piedra, Papel o Tijera</h1>

      {/* ***Aqui va el puntaje*** */}
      <div className={styles.centroColumna}>
        <div>
          <span className={styles.marcador}>{jugadorGana}</span>
          <span className={styles.marcador}>-</span>
          <span className={styles.marcador}>{botGana}</span>
          <br></br>
        </div>
        <span className={styles.texto}>marcador</span>
      </div>

      <Grid container sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}>
        {/* ***Parte izquierda del juego (jugador)*** */}
        <Grid item xs={5} sm={5} md={5} lg={5} className={styles.izquierdo}>
          <h2 className={styles.texto}>Tú</h2>
          <span className={styles.texto}>Selecciona una opción</span>
          <div className={styles.centroColumna}>
            <button onClick={() => empezarJuego('papel')} className={styles.imagenes}>
              <Image
                src={papel}
                priority
              />
            </button>
            <button onClick={() => empezarJuego('piedra')} className={styles.imagenes}>
              <Image
                src={piedra}
                priority
              />
            </button>
            <button onClick={() => empezarJuego('tijeras')} className={styles.imagenes}>
              <Image
                src={tijeras}
                priority
              />
            </button>
          </div>
        </Grid>

        {/* ***Parte derecha del juego (CPU)*** */}
        <Grid item xs={5} sm={5} md={5} lg={5} className={styles.derecho}>
          <h2 className={styles.texto}>Computadora</h2>
          <br></br>
          <br></br>
          <div className={styles.centroColumna}>
            <button className={styles.imagenes}>
              <Image
                src={papel}
                priority
              />
            </button>
            <button className={styles.imagenes}>
              <Image
                src={piedra}
                priority
              />
            </button>
            <button className={styles.imagenes}>
              <Image
                src={tijeras}
                priority
              />
            </button>
          </div>
        </Grid>
      </Grid>

      {/* ***Aqui va el modal para mostrar la eleccion de los jugadores y avisar quien gana*** */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {mostrarImagenes ? (
            //Se muestra en imagenes la seleccion de cada jugador
            <div className={styles.contenedorModal}>
              {/* Eleccion del jugador humano */}
              <div className={styles.centroColumna}>
                {eleccionJugador === 'piedra' && <Image src={piedra} className={styles.imagenesModal} priority />}
                {eleccionJugador === 'papel' && <Image src={papel} className={styles.imagenesModal} priority />}
                {eleccionJugador === 'tijeras' && <Image src={tijeras} className={styles.imagenesModal} priority />}
                <p className={styles.texto}>{eleccionJugador}</p>
              </div>
              {/* Eleccion del jugador maquina */}
              <div className={styles.centroColumna}>
                {eleccionBot === 'piedra' && <Image src={piedra} className={styles.imagenesModal} priority />}
                {eleccionBot === 'papel' && <Image src={papel} className={styles.imagenesModal} priority />}
                {eleccionBot === 'tijeras' && <Image src={tijeras} className={styles.imagenesModal} priority />}
                <p className={styles.texto}>{eleccionBot}</p>
              </div>
            </div>
          ) : (
            //Despues de 1 segundo se muestra el resultado en texto
            <div>
              <span className={styles.resultados}>{resultado}</span>
            </div>
          )}
        </Modal>
      )}
    </main>
  );
}