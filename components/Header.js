import { Navbar, Button, Link, Text, Avatar, Dropdown, Card, Spacer, Radio, useTheme, Image } from "@nextui-org/react";
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
          {/* <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link> */}
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