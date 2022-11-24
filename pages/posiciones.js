import { Grid, Card, Text } from "@nextui-org/react";
import Image from "next/image";


function Posiciones() {
    const MockItem = ({ text }) => {
        return (
          <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                {text}
              </Text>
            </Card.Body>
          </Card>
        );
      };
      return (
        <>
        <Card>
            <Card.Body >
              <Text h1 size={50} css={{
               textGradient: "45deg, $blue600 -10%, $red600 30%",
               justifyContent:"center",
             alignItems:"center"     
             }}
             weight="bold" >
                Posiciones
              </Text>
            </Card.Body>
          </Card>
        {/* <Text 
             h1
             size={50}
             
             css={{
               textGradient: "45deg, $blue600 -10%, $red600 30%",
               justifyContent:"center",
             alignItems:"center"     
             }}
             weight="bold">Posiciones</Text> */}
        <Grid.Container gap={1} wrap="wrap">
          <Grid xs={12} md={3} bg="#000000">
            <Card>
                <Card.Image src="/img/pgrupo-a.png" />
            </Card>
          {/* <Image src="/img/pgrupo-a.png"
            alt="grupoa"
            width={650}
            height={500} >
            </Image> */}
          </Grid>
          <Grid xs={12} md={3}>
            <Card>
                <Card.Image src="/img/pgrupo-b.png" />
            </Card>    
          {/* <Image src="/img/pgrupo-b.png"
            alt="grupoa"
            width={650}
            height={500} >
            </Image> */}
          </Grid>
          <Grid xs={12} md={3}>
            <Card>
                <Card.Image src="/img/pgrupo-c.png" />
            </Card>
            {/* <Image src="/img/pgrupo-c.png"
            alt="grupoa"
            width={650}
            height={500} >
            </Image> */}
          </Grid>
          <Grid xs={12} md={3}>
            <Card>
                <Card.Image src="/img/pgrupo-d.png" />
            </Card>
            {/* <Image src="/img/pgrupo-d.png"
            alt="grupoa"
            width={650}
            height={500} >
            </Image> */}
          </Grid>
          <Grid xs={12} md={3}>
            <Card>
                <Card.Image src="/img/pgrupo-e.png" />
            </Card>
            {/* <Image src="/img/pgrupo-e.png"
            alt="grupoa"
            width={650}
            height={500} >
            </Image> */}
          </Grid>
          <Grid xs={12} md={3}>
          <Card>
                <Card.Image src="/img/pgrupo-f.png" />
            </Card>
            {/* <Image src="/img/pgrupo-f.png"
            alt="grupoa"
            width={650}
            height={500} >
            </Image> */}
          </Grid>
          <Grid xs={12} md={3}>
          <Card>
                <Card.Image src="/img/pgrupo-g.png" />
            </Card>
            {/* <Image src="/img/pgrupo-g.png"
            alt="grupoa"
            width={650}
            height={500} >
            </Image> */}
          </Grid>
          <Grid xs={12} md={3}>
          <Card>
                <Card.Image src="/img/pgrupo-h.png" />
            </Card>
            {/* <Image src="/img/pgrupo-h.png"
            alt="Picture of the author"
            width={650}
            height={500} >
            </Image>    */}
          </Grid>
          
        </Grid.Container>
        </>
      );


}

export default Posiciones;