import { VStack } from "@hope-ui/solid"
import { Search } from "./Search"
import { Nav } from "./Nav"
import { Obj } from "./Obj"
import { Readme } from "./Readme"
import { Container } from "./Container"

export const Body = () => {
  return (
    <Container>
      <VStack
        class="body"
        mt="$1"
        py="$2"
        px="2%"
        minH="80vh"
        w="$full"
        gap="$4"
      >
        <Readme files={["header.md", "top.md"]} fromMeta="header" />	
        <Search />
        <Nav />
        <Obj />
        <Readme
          files={["readme.md", "footer.md", "bottom.md"]}
          fromMeta="readme"
        />
      </VStack>
    </Container>
  )
}
