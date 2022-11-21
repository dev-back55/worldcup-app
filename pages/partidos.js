import { useState } from 'react';
//import { SelectorWrapper } from '../components/SelectorWrapper';
import {  Grid, Button, Text, Link } from "@nextui-org/react";
import styles from '../styles/Partidos.module.scss';
import Image from 'next/image'
import { PlayIcon } from '../theme';
//import { getPartidos } from '../services/partidosServices';
//import { getGrupos } from '../services/gruposServices';
//import { getEquipos } from '../services/equiposServices';


function Partidos({ partidos, grupos, paises }) {

  const [partidosToShow, setPartidosToShow] = useState(partidos)

  const handlePartidos = () => {
    setPartidosToShow(partidos);
  }

  // const handleGrupos = () => {
  //   setPartidosToShow(grupos);
  // }

  const handleFilterGroup = (e) => {
   
    const value = e.target.value
    let partidosFilterGroup = []
        
      if(value === 'All'){
        setPartidosToShow(grupos);
      }
  
      if(value === 'A'){
        partidosFilterGroup = grupos.filter(elem => elem.grupo === 'A')
        setPartidosToShow(partidosFilterGroup)
      }
  
      if(value === 'B'){
        partidosFilterGroup = grupos.filter(elem => elem.grupo === 'B')
        setPartidosToShow(partidosFilterGroup)
      }
      
      if(value === 'C'){
        partidosFilterGroup = grupos.filter(elem => elem.grupo === 'C')
        setPartidosToShow(partidosFilterGroup)
      }

      if(value === 'D'){
        partidosFilterGroup = grupos.filter(elem => elem.grupo === 'D')
        setPartidosToShow(partidosFilterGroup)
      }

      if(value === 'E'){
        partidosFilterGroup = grupos.filter(elem => elem.grupo === 'E')
        setPartidosToShow(partidosFilterGroup)
      }

      if(value === 'F'){
        partidosFilterGroup = grupos.filter(elem => elem.grupo === 'F')
        setPartidosToShow(partidosFilterGroup)
      }

      if(value === 'G'){
        partidosFilterGroup = grupos.filter(elem => elem.grupo === 'G')
        setPartidosToShow(partidosFilterGroup)
      }
     
      if(value === 'H'){
        partidosFilterGroup = grupos.filter(elem => elem.grupo === 'H')
        setPartidosToShow(partidosFilterGroup)
      }

      
  }
  
  const handleFilterPais = (e) => {
    
    const value = e.target.value
    let partidosFilterGroup = []
    
    partidosFilterGroup = partidos.filter(elem => elem.equipo_a === value || elem.equipo_b === value)
    setPartidosToShow(partidosFilterGroup)
    
  }

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  
  return (
    <>
      
      <div className={styles.group}>
          
          <Text className={styles.group_title}
             h1
             size={50}
             css={{
               textGradient: "45deg, $blue600 -5%, $red600 80%",
             }}
             weight="bold">Fase de Grupos</Text>
          
                <Grid.Container gap={2} justify="center">
                    <Grid>
                      <Button color="primary" css={{width: '1rem', height: '3rem'}} ghost onClick={handlePartidos}>Fecha</Button>
                      {/* <Button ShowIn = "sm" color="primary" css={{width: '0.5rem', height: '1.5rem'}} ghost onClick={handlePartidos}>Fecha</Button> */}
                    </Grid>

                    <Grid>
                      <div className={styles.divboton}>
                        <Text h6 color="primary">Grupos :</Text>
                            <div className={styles.content_select}>
                            <select onChange={e => handleFilterGroup(e)}>
                              <option value='All'>todos</option>
                              <option value='A'>A</option>
                              <option value='B'>B</option>
                              <option value='C'>C</option>
                              <option value='D'>D</option>
                              <option value='E'>E</option>
                              <option value='F'>F</option>
                              <option value='G'>G</option>
                              <option value='H'>H</option>
                            </select>
                            </div>
                      </div>      
                      
                    </Grid>
                    <Grid>
                      
                        <div className={styles.divpais}>
                          <Text h6 color="primary">País :</Text>
                            <div className={styles.content_select_pais}>
                                <select onChange={e => handleFilterPais(e)}>
                                {
                                    paises.sort().map(pais =>(
                                        <option value={pais.name} key={pais.name}>{pais.name}</option>
                                        ))
                                }
                                </select>
                            </div>
                          </div>
                      
                    </Grid>
                </Grid.Container>
            
        

        {
        partidosToShow.map((partido) => {
            return (
                <div className={styles.matches} key={partido.id}>
                    <div className={styles.fecha}>
                          <span>{(partido.dia).split(/[-/]/).reverse().join("-")}</span>
                          <span>{partido.horario}</span>
                          <span style={{color: "#0070f3"}}>{partido.canaltv}</span>  
                      {/* <div className={styles.match}>
                        <div className={styles.match_team}>
                            <img src={partido.flag_a} />
                            
                            {(partido.equipo_a).slice(0, 3)}
                            
                        </div>

                        <div className={styles.match_team}>
                            {(partido.equipo_b).slice(0, 3)}
                            <img src={partido.flag_b} />
                        </div>
                    </div> */}
                        <div className={styles.match}>

                            <div className={styles.match_team}>
                                <Image src={partido.flag_a} width="38px" height="28px" alt={(partido.equipo_a).slice(0, 3)} />
                                <span>{(partido.equipo_a).slice(0, 3)}</span>    
                            </div>
                            <div>
                              <span style={{color: "#17C964", fontWeight: "bold"}}>{partido.goles_a}</span>
                            </div>
                            <div>
                              <span style={{color: "#17C964", fontWeight: "bold"}}>{partido.goles_b}</span>
                            </div>
                            <div className={styles.match_team}>
                                <span>{(partido.equipo_b).slice(0, 3)}</span>
                                <Image src={partido.flag_b} width="38px" height="28px" alt={(partido.equipo_b).slice(0, 3)}/>
                            </div>
                        </div>
                        <span>Grupo: {partido.grupo}</span>
                    </div>

                    {partido.resumen_url ?
                    <div>
                    <Link href={partido.resumen_url} isExternal target="_blank">
                        <Button size="xs" color="gradient" onClick={handler} icon={<PlayIcon />}>
                          Play
                        </Button>
                    </Link>    
                    </div>
                    : null  
                    }
                </div>
            )
          }
          )
        }
      </div>  
      
    </>
    )
}
  
export default Partidos;

export async function getServerSideProps() {
    const { NEXT_PUBLIC_API_URL } = process.env
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/partidos`);
    const data = await res.json();
    
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/grupos`);
     const grupo = await response.json();
    // const grupos = grupo.data
    //const response = await getGrupos();

    const resp = await fetch(`${NEXT_PUBLIC_API_URL}/equipos`);
    const equipo = await resp.json();
    // const equipos = equipo.data
    //const resp = await getEquipos();

    return {
      props: {
        partidos: data,
        grupos: grupo,
        paises: equipo
      }
    }
}
  