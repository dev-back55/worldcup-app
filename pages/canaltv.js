import { useState } from 'react'
import { Button, Container, Grid, Modal, Text } from "@nextui-org/react";
import { PlayIcon } from "../theme";

function Final() {
    const [ videosrc, setVideosrc ] = useState("");
    const [visible, setVisible] = useState(false);
    const handler = () => {
        setVisible(true)
        setVideosrc("https://res.cloudinary.com/djdp4cavt/video/upload/v1669575675/Mundial/Todo_eso_que_no_se_puede_explicar-Vamos_Argentina_a0klyr.mp4")
    };

    const handler2 = () => {
        setVisible(true)
        setVideosrc("https://res.cloudinary.com/djdp4cavt/video/upload/v1670020921/Mundial/No_se_puede_explicar_r6fian.mp4")
    };

    const handler3 = () => {
        setVisible(true)
        setVideosrc("https://res.cloudinary.com/djdp4cavt/video/upload/v1670019863/Mundial/La_locura_que_se_vive_con_la_selecci%C3%B3n_Argentina_mvza3r.mp4")
    };

    const handler4 = () => {
        setVisible(true)
        setVideosrc("https://res.cloudinary.com/djdp4cavt/video/upload/v1670020997/Mundial/Vamos_argentina_que_ma%C3%B1ana_cueste_lo_que_cueste_rcpmq3.mp4")
    };

    const handler5 = () => {
        setVisible(true)
        setVideosrc("https://res.cloudinary.com/djdp4cavt/video/upload/v1670021014/Mundial/La_fiesta_que_se_vive_con_la_selecci%C3%B3n_en_Doha_b01x3a.mp4")
    };

    const handler6 = () => {
        setVisible(true)
        setVideosrc("https://res.cloudinary.com/djdp4cavt/video/upload/v1670021000/Mundial/En_cualquier_parte_del_mundo_en_Argentina_nac%C3%AD_f4lmg8.mp4")
    };

    const handler7 = () => {
        setVisible(true)
        setVideosrc("https://res.cloudinary.com/djdp4cavt/video/upload/v1670020998/Mundial/Unidos_por_un_sue%C3%B1o_Doha_Souq_Waqif_19-30_hs_25-11-22_a7ltch.mp4")
    };

    const handler8 = () => {
        setVisible(true)
        setVideosrc("https://res.cloudinary.com/djdp4cavt/video/upload/v1669115005/Mundial/GOL_DE_MESSI_-Argentina_1_-_0_Arabia_Saudita_kzayfd.mp4")
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
