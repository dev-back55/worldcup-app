import { Container, Text } from "@nextui-org/react";
import CardOctavos from "../components/CardOctavos";


function Cuartos({cuartos}) {

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
            Fase de Cuartos
          </Text>
          
          {
            cuartos ?
            cuartos.map( (octavo, index) => {
              return (
              <CardOctavos
                key={index}
                octavo={octavo}  
              />
            )})
            : null
          }
        </Container>
    )

}

export default Cuartos;

export async function getServerSideProps() {
  const { NEXT_PUBLIC_API_URL } = process.env
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/cuartos`);
  const data = await res.json();
  
  return {
    props: {
      cuartos: data
    }
  }
}