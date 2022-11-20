import { useState } from 'react'
import styles from '../styles/Home.module.scss';
import { Text, Grid } from "@nextui-org/react";


export default function Home() {
  const [ dias, setDias ] = useState(0)
  const [ horas, setHoras ] = useState(0)
  const [ minutos, setMinutos ] = useState(0)
  const [ segundos, setSegundos ] = useState(0)

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
    
  const kickOffWorldCupDate = new Date('2022-12-18 12:00:00')
  
  function zeroLeft (number) {
      return String(number).padStart(2, '0')
  }
  
  function diffKickOffDateWorldCup () {
      const currentDate = new Date().getTime()
      return kickOffWorldCupDate.getTime() - currentDate
  }
  
  // function setCountDown (element, value) {
  //     document.querySelector(`.${element}`).innerHTML = value
  // }
  
  function diffDay (diff) {
      return Math.floor(diff / day)
  }
  
  function diffHour (diff) {
      const round = Math.floor(diff % day / hour)
      return zeroLeft(round)
  }
  
  function diffMinute (diff) {
      const round = Math.floor(diff % hour / minute)
      return zeroLeft(round)
  }
  
  function diffSecond (diff) {
      const round = Math.floor(diff % minute / second)
      return zeroLeft(round)
  }
  
  function countDown () {
    
      const diff = diffKickOffDateWorldCup()
  
      // setCountDown('days', diffDay(diff))
      // setCountDown('hours', diffHour(diff))
      // setCountDown('minutes', diffMinute(diff))
      // setCountDown('seconds', diffSecond(diff))

      setDias(diffDay(diff));
      setHoras(diffHour(diff));
      setMinutos(diffMinute(diff));
      setSegundos(diffSecond(diff));
  }

  function comienza () {
    setInterval(countDown, 1000)
  }
  comienza();

  // {window.load = setInterval(countDown, 1000)}
  
  return (
    
    <div className={styles.container}>
      

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Bienvenidos
        </h1> */}
        <div className={styles.container_title}>
            <Text  h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -5%, $red600 80%",
            }}
            weight="bold">Bienvenidos
            </Text>

            <Text  h5
                size={20}
                css={{
                  textGradient: "45deg, $blue600 -5%, $red600 80%",
                  paddingLeft: "1rem"
                }}
                weight="bold">
                  la final del Mundial se juega en
            </Text>
        </div>

        <div className={styles.container_countdown}>
            <ul className={styles.count_down}>
                <li className="days">{dias}</li>
                <li className="hours">{horas}</li>
                <li className="minutes">{minutos}</li>
                <li className="seconds">{segundos}</li>
            </ul>
            {/* <div className={styles.container_countdown_fechas}>
                <Text size="$xs" >días</Text>
                <Text size="$xs" >horas</Text>
                <Text size="$xs">minutos</Text>
                <Text size="$xs">segundos</Text>
            </div> */}
            <Grid.Container gap={0.5} display="inline-block" justify="space-around" css={{mt:"-1.5rem"}}>
              <Grid xs={2}>
                <Text size="$xs" css={{ ml: "0.8rem" }}>dias</Text>
              </Grid>
              <Grid xs={2}>
                <Text size="$xs" css={{ ml: "0.7rem" }}>horas</Text>
              </Grid>
              <Grid xs={2}>
                <Text size="$xs">minutos</Text>
              </Grid>
              <Grid xs={2}>
                <Text size="$xs">segundos</Text>
              </Grid>
            </Grid.Container>

        </div>
      </main>

      
    </div>
    
  )
}
