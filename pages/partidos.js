import { useState } from 'react';
import { SelectorWrapper } from '../components/SelectorWrapper';
import { Grid, Button, Text, Image } from "@nextui-org/react";
import styles from '../styles/Partidos.module.scss';
import { getPartidos } from '../services/partidosServices';
import { getGrupos } from '../services/gruposServices';
import { getEquipos } from '../services/equiposServices';


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
        partidosFilterGroup = grupos.filter(elem => elem.attributes.grupo === 'A')
        setPartidosToShow(partidosFilterGroup)
      }
  
      if(value === 'B'){
        partidosFilterGroup = grupos.filter(elem => elem.attributes.grupo === 'B')
        setPartidosToShow(partidosFilterGroup)
      }
      
      if(value === 'C'){
        partidosFilterGroup = grupos.filter(elem => elem.attributes.grupo === 'C')
        setPartidosToShow(partidosFilterGroup)
      }

      if(value === 'D'){
        partidosFilterGroup = grupos.filter(elem => elem.attributes.grupo === 'D')
        setPartidosToShow(partidosFilterGroup)
      }

      if(value === 'E'){
        partidosFilterGroup = grupos.filter(elem => elem.attributes.grupo === 'E')
        setPartidosToShow(partidosFilterGroup)
      }

      if(value === 'F'){
        partidosFilterGroup = grupos.filter(elem => elem.attributes.grupo === 'F')
        setPartidosToShow(partidosFilterGroup)
      }

      if(value === 'G'){
        partidosFilterGroup = grupos.filter(elem => elem.attributes.grupo === 'G')
        setPartidosToShow(partidosFilterGroup)
      }
     
      if(value === 'H'){
        partidosFilterGroup = grupos.filter(elem => elem.attributes.grupo === 'H')
        setPartidosToShow(partidosFilterGroup)
      }

      
  }
  
  const handleFilterPais = (e) => {
    
    const value = e.target.value
    let partidosFilterGroup = []
    
    partidosFilterGroup = partidos.filter(elem => elem.attributes.equipo_a === value || elem.attributes.equipo_b === value)
    setPartidosToShow(partidosFilterGroup)
    
  }
  
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
                                <select onClick={e => handleFilterPais(e)}>
                                {
                                    paises.sort().map(pais =>(
                                        <option value={pais.attributes.name} key={pais.attributes.name}>{pais.attributes.name}</option>
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
                          <span>{(partido.attributes.dia).split(/[-/]/).reverse().join("-")}</span>
                          <span>{partido.attributes.horario}</span>  
                      <div className={styles.match}>
                        <div className={styles.match_team}>
                            <img src={partido.attributes.flag_a} />
                            
                            {(partido.attributes.equipo_a).slice(0, 3)}
                            
                        </div>

                        <div className={styles.match_team}>
                            {(partido.attributes.equipo_b).slice(0, 3)}
                            <img src={partido.attributes.flag_b} />
                        </div>
                    </div>
                        <span>Grupo: {partido.attributes.grupo}</span>
                    </div>
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

export async function getStaticProps() {
    // const { API_URL } = process.env
    // const res = await fetch(`${API_URL}/api/partidos?pagination[pageSize]=50&sort[0]=dia`);
    // const data = await res.json();
    // const datas = data.data
    const res = await getPartidos();


    // const response = await fetch(`${API_URL}/api/partidos?pagination[pageSize]=50&sort[0]=grupo&sort[1]=dia`);
    // const grupo = await response.json();
    // const grupos = grupo.data
    const response = await getGrupos();

    // const resp = await fetch(`${API_URL}/api/equipos?pagination[pageSize]=50&sort[0]=name`);
    // const equipo = await resp.json();
    // const equipos = equipo.data
    const resp = await getEquipos();

    return {
      props: {
        partidos: res,
        grupos: response,
        paises: resp
      }
    }
}
  