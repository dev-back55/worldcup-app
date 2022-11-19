import { Link, Navbar, Button, Text, Avatar, Dropdown, Card, Spacer, Radio, useTheme, Image } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";



const Header = () => {
  const { data: session } = useSession();
    const {isDark} = useTheme();

    const collapseItems = [
      "Fase Grupos",
      "Octavos",
      "Cuartos",
      "Semi",
      "Final",
      "Home",
      "Logout",
    ];

  return (
    <Navbar isBordered={isDark} variant="floating">
      <Navbar.Toggle showIn="sm" />
        <Navbar.Brand
           css={{
            "@xs": {
              w: "12%",
            },
          }}>
          <Link href="/">
            <Image src="/img/Copa1.png" alt="Copa Mundial" width={45} height={45} />
            <Text b color="primary" hideIn="xs" 
            css={{
              "@sm": {
                fontSize: "0.8rem",
                "@md": {
                  fontSize: "1rem",
                }
              },
            }}
            >
              WCQ 22
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight
                         activeColor="primary"
                         hideIn="sm" variant="highlight"
                         css={{
                          "@sm": {
                            fontSize: "0.8rem",
                            "@md": {
                              fontSize: "1rem",
                            }
                          },
                        }}>
          <Navbar.Link href="/partidos">Fase Grupos</Navbar.Link>
          <Navbar.Link href="#">Octavos</Navbar.Link>
          <Navbar.Link href="#">Cuartos</Navbar.Link>
          <Navbar.Link href="#">Semi</Navbar.Link>
          <Navbar.Link href="#">Final</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          {/* <Navbar.Link color="inherit" href="/canaltv">
            TV Online
          </Navbar.Link> */}

          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                  fontSize: {xs: "0.6rem", sm: "0.8rem" }
                }}
                
                ripple={false}
              >
                TV Online
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              
              <Dropdown.Item
                key="autoscaling"
                showFullDescription
                description="Podes ver los partidos desde su web. Acá abrimos una ventana en la app."
  
              >
                <Link href="/canaltv">
                  TV Pública
                </Link>
                
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="Abre nueva pestaña e ingresas con usuario y contraseña del servicio que dispongas - Flow/DirecTV/TeleCentro."
                
                >
                  <Link href="https://play.tycsports.com/vivo.html" isExternal target="_blank">TyC Sports Play</Link>
                
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="Abre nueva pestaña e ingresas con usuario y contraseña del servicio DirecTV."
                
              >
                <Link href="https://www.directvgo.com/ar/iniciar-sesion" isExternal target="_blank">DTV GO</Link>
                
              </Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>

          <Navbar.Item>
          <Avatar
                  bordered
                  as="button"
                  color={ session ? "success" : "warning"}
                  size="md"
                  src={ session ? `${session.user.image}` : "/img/futbol.ico"}>
          </Avatar>
          </Navbar.Item>
          <Navbar.Item>
          { !session ? 
            <Button auto flat as={Link} color={"primary"} href="#" >
               Login
            </Button>
          : <Button auto flat onClick={() => signOut()}>Logout</Button>
          }
            
          </Navbar.Item>
        </Navbar.Content>
        
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 5}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item==="Fase Grupos" ? "/partidos" : "/"}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header