import { Button, Card, Container, Grid, Link, Row, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { PlayIcon } from "../theme";

function Semifinal() {
    
    const flag_a ="https://t4.ftcdn.net/jpg/00/03/65/05/240_F_3650524_rojAR7d8GBbG83v8s0VnV4Lm1nbcyb7g.jpg"
    const flag_b = "https://t3.ftcdn.net/jpg/01/07/55/22/240_F_107552218_I0fgobfytTCXKIFaD9S6n1v7tz1hbMUj.jpg"

    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (

        <Container display="flex" justify="center" >
          
          <Text                       
          css={{          
            fontSize:'calc(2rem + 1vw)',
            textGradient: "45deg, $blue600 -5%, $red600 80%",
            mt: "1rem",            
          }}
          weight="bold"
          justify="center" >
            Semis
          </Text>
        
        <Grid.Container gap={1} justify="center" >
       
        <Grid xs={12} sm={12} justify="center">
        
          <Card css={{ mw: "450px" }} cardvariants = 'shadow'>
            <Card.Header>
              <Text b>Martes, 13 Dic</Text>
              <Spacer x={4} />
              <Text>16hs</Text>
            </Card.Header>
            <Row justify="center">
              <Text justify="center" color="primary">TV Pública/DSports</Text>
            </Row>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Grid.Container gap={1} justify="center" >
                <Grid xs={6} md={6}>
                    <Image src="https://t4.ftcdn.net/jpg/01/07/44/93/240_F_107449329_XU4V2Q532Us81EAU5OG255aghqmVtdTH.jpg" width="58px" height="38px" alt="Argentina" />
                  
                  <Spacer x={1} />
                       <>
                          <Text>
                            ARG
                          </Text>
                          <Spacer x={1} />
                          <div>
                              <span style={{color: "#9750DD", fontWeight: "bold", fontSize:"1.2rem"}}>3</span>
                          </div>
                        </>
                </Grid>
                                            
              <Grid xs={6} md={6}>
                
                    <>
                      <div>
                      <span style={{color: "#9750DD", fontWeight: "bold", fontSize:"1.2rem"}}>0</span>
                      </div>
                      <Spacer x={1} />
                      <Text>
                        CRO
                      </Text>
                    </>
                <Spacer x={1} />
                   <Image src="https://t3.ftcdn.net/jpg/01/17/57/26/240_F_117572666_FeneGZAZbbAYhfPcVvHuDBCsRzVpTHeY.jpg" width="58px" height="38px" alt="Croacia" />

              </Grid>
              </Grid.Container>
              
              
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center">
                <div>
                    <Link href="https://www.youtube.com/watch?v=lM1bF8hD8-g" isExternal target="_blank">
                        <Button auto color="gradient" iconRight={<PlayIcon />}>
                          Resumen
                        </Button>
                    </Link>    
                    </div>
                    
              </Row>
            </Card.Footer>
          </Card>
          
        </Grid>

        <Grid xs={12} sm={12} justify="center">
        
          <Card css={{ mw: "450px" }} cardvariants = 'shadow'>
            <Card.Header>
              <Text b>Miercoles, 14 Dic</Text>
              <Spacer x={4} />
              <Text>16hs</Text>
            </Card.Header>
            <Row justify="center">
              <Text justify="center" color="primary">TV Pública/DSports</Text>
            </Row>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Grid.Container gap={1} justify="center" >
                <Grid xs={6} md={6}>
                  {flag_a ?
                      <Image src={flag_a} width="58px" height="38px" alt="" />
                    : <Image src={'/icon-512x512.png'} width="38px" height="38px" alt="" />  
                  }
                  <Spacer x={1} />
                       <>
                          <Text>
                            FRA
                          </Text>
                          <Spacer x={1} />
                          <div>
                              <span style={{color: "#9750DD", fontWeight: "bold", fontSize:"1.2rem"}}>2</span>
                          </div>
                          </>
                  
                </Grid>
                                            
              <Grid xs={6} md={6}>
                
                    <>
                      <div>
                      <span style={{color: "#9750DD", fontWeight: "bold", fontSize:"1.2rem"}}>0</span>
                      </div>
                      <Spacer x={1} />
                      <Text>
                        MAR
                      </Text>
                      </>
                
                <Spacer x={1} />
                {flag_b ?
                    <Image src={flag_b} width="58px" height="38px" alt="" />
                  : <Image src={"/icon-512x512.png"} width="38px" height="38px" alt="" />
                }

              </Grid>
              </Grid.Container>
              
              
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center">
              
                    <div>
                    <Link href="#" isExternal target="_blank">
                        <Button auto color="gradient" iconRight={<PlayIcon />}>
                          Resumen
                        </Button>
                    </Link>    
                    </div>
              
              </Row>
            </Card.Footer>
          </Card>
          
        </Grid>
       
        </Grid.Container>
    </Container>    
        
    )

}

export default Semifinal;
