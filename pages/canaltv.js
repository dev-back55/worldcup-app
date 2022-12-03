import { useState } from 'react'
import { Button, Container, Grid, Modal, Text } from "@nextui-org/react";
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

    const closeHandler = () => {
    setVisible(false);
    console.log("closed");
    };

    return (
        <Container display="flex" justify="center" >
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
        <Grid.Container justify = 'center' alignItems = 'center' css={{mt: '1rem'}}> 
            <Button.Group size="xl" vertical color="gradient" bordered>
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
