import { useState } from 'react'
import styles from '../styles/Home.module.scss';
import { Text, Grid, Container, Spacer, Switch, Row, Button, Modal } from "@nextui-org/react";
import ReactHowler from 'react-howler';
import { VolumeDown, VolumeUp, VolumeUpIcon } from '../theme';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { PlayIcon } from '../theme';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

export default function Home() {
  const [ soundOn, setsoundOn ] = useState(false);
  const handleChange = (event) => {
    setsoundOn(event.target.checked);
  }

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

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
        <Spacer y={17}></Spacer>
        <Grid.Container justifyContent="center" alignItems="center" css={{ml:"5rem"}}>
        
            <Grid xs={1} md={6} />
            <Grid xs={5} md={3}>
            <Button size="xs" color="gradient" onClick={handler} iconRight={<PlayIcon />}>
              Video
            </Button>

            <Modal
              closeButton
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              
              <Modal.Body>
              <video
                src="https://res.cloudinary.com/djdp4cavt/video/upload/v1669575675/Mundial/Todo_eso_que_no_se_puede_explicar-Vamos_Argentina_a0klyr.mp4"
                width="auto"
                height="auto"
                controls
                autoPlay
                id="video-player"
              />
              </Modal.Body>
              
            </Modal>

            </Grid>
            <Grid xs={6} md={3}>
            <Text color="#9750DD">Música</Text>
                <Spacer x={1}></Spacer>
                <Switch
                  size={"@sm" ? "sm" : "xs"}           
                  color="secondary"
                  // iconOn={<VolumeUp />}
                  // iconOff={<VolumeDown />}
                  icon={<VolumeUpIcon />}
                  checked={!!soundOn}
                  onChange={handleChange}
                />      
            </Grid>
            <ReactHowler
                src='https://res.cloudinary.com/djdp4cavt/video/upload/v1669119331/Mundial/Qatar_World_Cup_Release_p060pg.mp3'
                preload={true}
                playing={soundOn}
                // mute={soundOn}
                loop={true}
            />
        </Grid.Container>
        {/* <Spacer y={1}></Spacer>
        <Grid.Container justifyContent="center" alignItems="center">     
            <Grid xs={12} md={6} />
            <Grid xs={12} md={6}>
              <Swiper
              spaceBetween={50}
              slidesPerView={3}
              loop={true}
              navigation={true}
              autoplay={true}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
              >
              <SwiperSlide>
                <Image src="/img/imagen1.jpg" width="550px" height="350px" alt="image1"/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/img/imagen2.jpg" width="550px" height="350px" alt="image2"/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/img/imagen3.jpg" width="550px" height="350px" alt="image3"/>  
              </SwiperSlide>
              <SwiperSlide>
              <Image src="/img/imagen4.jpg" width="550px" height="350px" alt="image4"/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/img/imagen5.png" width="550px" height="350px" alt="image5"/>
              </SwiperSlide>
              <SwiperSlide>
              <Image src="/img/imagen6.webp" width="550px" height="350px" alt="image6"/>
              </SwiperSlide>
              </Swiper>  
            </Grid>
            
            
            
        </Grid.Container>     */}
      </main>
                
      
    </div>
    
  )
}
