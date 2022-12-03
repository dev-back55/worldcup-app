import { Button, Card, Grid, Link, Row, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { PlayIcon } from "../theme";

function CardOctavos({octavo}) {
    
    const { dia, horario, equipo_a, equipo_b, flag_a, flag_b, clave_a, clave_b, canaltv, resumen_url } = octavo

    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (
        
        <Grid.Container gap={2} justify="center" justifycontent="center" alignitems="center" aligncontent="center" wrap="wrap">
        <Grid xs={0} sm={4}>
        </Grid>
        <Grid xs={12} sm={4}>
        
          <Card css={{ mw: "430px" }} cardvariants = 'shadow'>
            <Card.Header>
              <Text b>{new Date(dia).toLocaleDateString('es-Es', { weekday:"long", month:"short", day: 'numeric' })}</Text>
              <Spacer x={4} />
              <Text>{horario}</Text>
            </Card.Header>
            <Row justify="center">
              <Text justify="center" color="primary">{canaltv}</Text>
            </Row>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Grid.Container gap={2} justify="center" >
                <Grid xs={6} sm={6}>
                  {flag_a ?
                      <Image src={flag_a} width="58px" height="38px" alt={equipo_a} />
                    : <Image src={'/icon-512x512.png'} width="38px" height="38px" alt={equipo_a} />  
                  }
                  <Spacer x={1} />
                  { !equipo_a ?
                          <Text>
                          {clave_a}
                          </Text>
                    :      
                          <Text>
                            {(equipo_a).slice(0, 3)}
                          </Text>
                  }
                </Grid>
              <Grid xs={6} sm={6}>
                
                { !equipo_b ?
                      <Text>
                        {clave_b}
                      </Text>
                  :    
                      <Text>
                        {(equipo_b).slice(0, 3)}
                      </Text>
                }
                <Spacer x={1} />
                {flag_b ?
                    <Image src={flag_b} width="58px" height="38px" alt={equipo_b} />
                  : <Image src={"/icon-512x512.png"} width="38px" height="38px" alt={equipo_b} />
                }

              </Grid>
              </Grid.Container>
              
              
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center">
              {resumen_url ?
                    <div>
                    <Link href={resumen_url} isExternal target="_blank">
                        <Button size="xs" color="gradient" onClick={handler} iconRight={<PlayIcon />}>
                          Play
                        </Button>
                    </Link>    
                    </div>
                    : null  
                    }
              </Row>
            </Card.Footer>
          </Card>
          
        </Grid>
        <Grid xs={0} sm={4}>
        </Grid>
        </Grid.Container>
        
    )

}

export default CardOctavos;