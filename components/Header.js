import { Link, Navbar, Button, Text, Avatar, Dropdown, Image } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Switch, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import { MoonIcon, SunIcon } from "../theme";
import { useState } from "react";


const Header = () => {
  const { data: session } = useSession();
  //const {isDark} = useTheme();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

     
    const collapseItems = [
      "Fase Grupos",
      "Octavos",
      "Cuartos",
      "Semi",
      "Final",
      "Music",
      "Home",
      "Logout",
    ];

  return (
    <Navbar isBordered={isDark} variant="floating">
      <Navbar.Toggle showIn="sm" />
        <Navbar.Brand
          hideIn="sm"
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
          <Navbar.Link href="/octavos">Octavos</Navbar.Link>
          <Navbar.Link href="/cuartos">Cuartos</Navbar.Link>
          <Navbar.Link href="/semifinal">Semi</Navbar.Link>
          <Navbar.Link href="/final">Final</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content hideIn="sm" css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                  "@xs": {
                      fontSize: "0.75rem"},
                  "@sm": {
                      fontSize: "0.875rem"},
                  "@md": {
                        fontSize: "1rem"},    
                }}>
          {/* <Navbar.Link color="inherit" href="/canaltv">
            TV Online
          </Navbar.Link> */}

            <Navbar.Item>
          <Dropdown isBordered closeOnSelect="true">
              <Dropdown.Button
                auto
                flat
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                
                ripple={false}
              >
                TV Online
              </Dropdown.Button>
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
                description="Podes ver los partidos desde su web. Abre nueva pesta??a."
                
                >
                <Link href="https://www.tvpublica.com.ar/" isExternal target="_blank">
                  TV P??blica
                </Link>
                
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="Abre nueva pesta??a e ingresas con usuario y contrase??a del servicio que dispongas - Flow/DirecTV/TeleCentro."
                
                >
                  <Link href="https://play.tycsports.com/vivo.html" isExternal target="_blank">TyC Sports Play</Link>
                
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="Abre nueva pesta??a e ingresas con usuario y contrase??a del servicio DirecTV."
                
                >
                <Link href="https://www.directvgo.com/ar/iniciar-sesion" isExternal target="_blank">DTV GO</Link>
                
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="La Secta Deportiva, canal de youtube partidos online."
                
                >
                <Link href="https://www.youtube.com/channel/UCBPasXWxj1DYJLqZktw_UWg" isExternal target="_blank">Secta Deportiva</Link>
                
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="Futbol para todos, todo el mundial online."
                
                >
                <Link href="https://futbolparatodos.online/es/" isExternal target="_blank">Futbol Online</Link>
                
              </Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
                </Navbar.Item>
          </Navbar.Content>

        <Navbar.Content  css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                  "@xs": {
                      fontSize: "0.75rem"},
                  "@sm": {
                      fontSize: "0.875rem"},
                  "@md": {
                        fontSize: "1rem"},    
                }}>

          <Navbar.Item>
          <Avatar
                  bordered
                  as="button"
                  color={ session ? "success" : "warning"}
                  size="md"
                  src={ session ? `${session.user.image}` : "/img/ball-for-fifa-world-cup-2022-qatar-2.png"}>
          </Avatar>
          </Navbar.Item>
          <Navbar.Item>
          { !session ? 
            <Button auto flat color={"primary"} onClick={() => signIn()}>
               Login
            </Button>
          : <Button auto flat color={"primary"} onClick={() => signOut()}>Logout</Button>
          }
            
          </Navbar.Item>
          <Navbar.Item>
            <Switch
              size={"@sm" ? "sm" : "xs"}            
              iconOn={<SunIcon filled />}
              iconOff={<MoonIcon filled />}
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
          </Navbar.Item>
        </Navbar.Content>
        
        <Navbar.Collapse>          
            <Navbar.CollapseItem
              key="Fase Grupos"
              activeColor="secondary">
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/partidos"
              >
                Fase Grupos
              </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              key="Octavos"
              activeColor="primary"
              isActive="true">
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/octavos"
              >
                Octavos
              </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              key="Cuartos"
              activeColor="error"
              isActive="true">
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/cuartos"
              >
                Cuartos
              </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              key="Semifinal"
              activeColor="secondary">
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/semifinal"
              >
                Semifinal
              </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              key="Final"
              activeColor="secondary">
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/final"
              >
                Final
              </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              key="Music"
              activeColor="warning"
              isActive="true">
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/"
              >
                Music
              </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              key="Videos"
              activeColor="success"
              isActive="true">
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/canaltv"
              >
                Videos
              </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              key="Home"
              activeColor="secondary"
              isActive="true">
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                  color: "secondary"
                }}
                href="/"
              >
                Home
              </Link>
            </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header