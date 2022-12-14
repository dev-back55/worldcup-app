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

    const handler11 = () => {
      setVisible(true)
      setVideosrc(process.env.NEXT_PUBLIC_VURL11)
    };

    const handler12 = () => {
      setVisible(true)
      setVideosrc(process.env.NEXT_PUBLIC_VURL12)
  };

  const handler13 = () => {
      setVisible(true)
      setVideosrc(process.env.NEXT_PUBLIC_VURL13)
  };

  const handler14 = () => {
      setVisible(true)
      setVideosrc(process.env.NEXT_PUBLIC_VURL14)
  };

  const handler15 = () => {
      setVisible(true)
      setVideosrc(process.env.NEXT_PUBLIC_VURL15)
  };

  const handler16 = () => {
      setVisible(true)
      setVideosrc(process.env.NEXT_PUBLIC_VURL16)
  };

  const handler17 = () => {
      setVisible(true)
      setVideosrc(process.env.NEXT_PUBLIC_VURL17)
  };

  const handler18 = () => {
      setVisible(true)
      setVideosrc(process.env.NEXT_PUBLIC_VURL18)
  };

  const handler19 = () => {
    setVisible(true)
    setVideosrc(process.env.NEXT_PUBLIC_VURL19)
};
const handler20 = () => {
  setVisible(true)
  setVideosrc(process.env.NEXT_PUBLIC_VURL20)
};
const handler21 = () => {
  setVisible(true)
  setVideosrc(process.env.NEXT_PUBLIC_VURL21)
};
const handler22 = () => {
  setVisible(true)
  setVideosrc(process.env.NEXT_PUBLIC_VURL22)
};
const handler23 = () => {
  setVisible(true)
  setVideosrc(process.env.NEXT_PUBLIC_VURL23)
};

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
                <Button onClick={handler23} iconRight={<PlayIcon />}>Spiderman que golazo!</Button>
                <Button onClick={handler22} iconRight={<PlayIcon />}>No lo pueden parar</Button>
                <Button onClick={handler21} iconRight={<PlayIcon />}>ARG 3-0 CRO</Button>  
                <Button onClick={handler20} iconRight={<PlayIcon />}>ARG 2-0 CRO</Button>
                <Button onClick={handler19} iconRight={<PlayIcon />}>ARG 1-0 CRO</Button>
                <Button onClick={handler18} iconRight={<PlayIcon />}>Anto que miras</Button>
                <Button onClick={handler17} iconRight={<PlayIcon />}>Que Miras Bobo!</Button>
                <Button onClick={handler16} iconRight={<PlayIcon />}>Leo vs Van Vende Humo</Button>
                <Button onClick={handler15} iconRight={<PlayIcon />}>Leo y Juli</Button>
                <Button onClick={handler14} iconRight={<PlayIcon />}>Leo y Dibu</Button>
                <Button onClick={handler13} iconRight={<PlayIcon />}>Asi pasamos</Button>
                <Button onClick={handler12} iconRight={<PlayIcon />}>Dibu Dibujito</Button>
                <Button onClick={handler11} iconRight={<PlayIcon />}>Que Miras...</Button>
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
