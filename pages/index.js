import styles from '../styles/Home.module.scss';
import { Text, Card } from "@nextui-org/react";


export default function Home() {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  
  const kickOffWorldCupDate = new Date('2022-11-20 13:00:00')
  
  function zeroLeft (number) {
      return String(number).padStart(2, '0')
  }
  
  function diffKickOffDateWorldCup () {
      const currentDate = new Date().getTime()
      return kickOffWorldCupDate.getTime() - currentDate
  }
  
  function setCountDown (element, value) {
      document.querySelector(`.${element}`).innerHTML = value
  }
  
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
  
      setCountDown('days', diffDay(diff))
      setCountDown('hours', diffHour(diff))
      setCountDown('minutes', diffMinute(diff))
      setCountDown('seconds', diffSecond(diff))
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
                  el Mundial comienza en
            </Text>
        </div>

        <div className={styles.container_countdown}>
            <ul className={styles.count_down}>
                <li className="days"></li>
                <li className="hours"></li>
                <li className="minutes"></li>
                <li className="seconds"></li>
            </ul>
            <div className={styles.container_countdown_fechas}>
                <Text size="$xs" css={{
                  pl: "$10", pr: "$1"
                }}>días</Text>
                <Text size="$xs"
                css={{
                  pl: "$8",
                }}>horas</Text>
                <Text size="$xs">minutos</Text>
                <Text size="$xs">segundos</Text>
            </div>        
        </div>
      </main>

      
    </div>
    
  )
}
