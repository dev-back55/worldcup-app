import { useState } from 'react'
import { Button, Container, Grid, Link, Modal, Text } from "@nextui-org/react";
import { PlayIcon } from "../theme";

function Final() {
    const [ videosrc, setVideosrc ] = useState("");
    const [visible, setVisible] = useState(false);
    const handler = () => {
        setVisible(true)
        setVideosrc(process.env.NEXT_PUBLIC_VURL)
    };

    const handler2 = () => {
        setVisible(true)
        setVideosrc(process.env.NEXT_PUBLIC_VURL2)
    };

    const handler3 = () => {
        setVisible(true)
        setVideosrc(process.env.NEXT_PUBLIC_VURL3)
    };

    const handler4 = () => {
        setVisible(true)
        setVideosrc(process.env.NEXT_PUBLIC_VURL4)
    };

    const handler5 = () => {
        setVisible(true)
        setVideosrc(process.env.NEXT_PUBLIC_VURL5)
    };

    const handler6 = () => {
        setVisible(true)
        setVideosrc(process.env.NEXT_PUBLIC_VURL6)
    };

    const handler7 = () => {
        setVisible(true)
        setVideosrc(process.env.NEXT_PUBLIC_VURL7)
    };

    const handler8 = () => {
        setVisible(true)
        setVideosrc(process.env.NEXT_PUBLIC_VURL8)
    };
    
    const handler9 = () => {
      setVisible(true)
      setVideosrc(process.env.NEXT_PUBLIC_VURL9)
    };
    
    const handler10 = () => {
      setVisible(true)
      setVideosrc(process.env.NEXT_PUBLIC_VURL10)
    };

    // const handler11 = () => {
    //   setVisible(true)
    //   setVideosrc(process.env.NEXT_PUBLIC_VURL11)
    // };

    const closeHandler = () => {
    setVisible(false);
    console.log("closed");
    };

    return (
        <Container display="flex" justify="center">
        <Text                       
          css={{          
            fontSize:'calc(2rem + 1vw)',
            textGradient: "45deg, $blue600 -5%, $red600 90%",
            mt: "1rem",            
          }}
          weight="bold"
          justify="center" >
            Videos
          </Text>
        <Grid.Container direction="column" justify = 'center' alignItems = 'center' css={{mt: '1rem'}}> 
                <Link href="https://www.youtube.com/watch?v=07vFqwrz5iA" target="_blank">
                <Button color="gradient" auto iconRight={<PlayIcon />}>Streaming con Messi</Button>
                </Link>
            <Button.Group size="xl" vertical color="gradient" bordered>
               
                <Button onClick={handler9} iconRight={<PlayIcon />}>Gol Leo vs Aus</Button>
                <Button onClick={handler10} iconRight={<PlayIcon />}>Segui gritando...</Button>
                <Button onClick={handler} iconRight={<PlayIcon />}>ARG vs MEX</Button>
                <Button onClick={handler2} iconRight={<PlayIcon />}>Gol de LEO</Button>
                <Button onClick={handler3} iconRight={<PlayIcon />}>Gol de JULIAN</Button>
                <Button onClick={handler4} iconRight={<PlayIcon />}>ARG vs POL</Button>
                <Button onClick={handler5} iconRight={<PlayIcon />}>Fiesta...</Button>
                <Button onClick={handler6} iconRight={<PlayIcon />}>Banderazo Doha</Button>
                <Button onClick={handler7} iconRight={<PlayIcon />}>Muchachos...</Button>
                <Button onClick={handler8} iconRight={<PlayIcon />}>Primer Gol</Button>
            </Button.Group>
            <Modal
              closeButton
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              
              <Modal.Body>
              <video
                src={videosrc}
                width="auto"
                height="auto"
                controls
                autoPlay
                id="video-player"
              />
              </Modal.Body>
              
            </Modal>
        </Grid.Container> 
        </Container>
    )

}

export default Final;
