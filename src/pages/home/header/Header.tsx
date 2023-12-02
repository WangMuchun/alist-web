import {
  HStack,
  useColorModeValue,
  Image,
  Center,
  Icon,
  Kbd,
} from "@hope-ui/solid"
import { Show } from "solid-js"
import { getSetting, objStore, State } from "~/store"
import { BsSearch } from "solid-icons/bs"
import { CenterLoading } from "~/components"
import { Container } from "../Container"
import { bus } from "~/utils"
import { Layout } from "./layout"
import { isMac } from "~/utils/compatibility"
import { Link } from "@solidjs/router"
import { AnchorWithBase } from "~/components"
import { useT } from "~/hooks"
import { me } from "~/store"
import { UserMethods } from "~/types"

export const Header = () => {
  const t = useT()
  return (
    <Center
      class="header"
      w="$full"
      // shadow="$md"
    >
      <Container>
        <HStack
          px="calc(2% + 0.5rem)"
          py="$2"
          w="$full"
          justifyContent="space-between"
        >
          <HStack class="header-left" h="44px">
			  <Layout />
          </HStack>
          <HStack class="header-center" h="44px">
            <Image
              src="https://cdn.jsdelivr.net/gh/WangMuchun/SVG-Free@main/SVG/download.svg"
              h="$full"
              w="auto"
              fallback={<CenterLoading />}
            />
          </HStack>
          <HStack class="header-right" spacing="$2">
			<AnchorWithBase
			  as={Link}
			  href={UserMethods.is_guest(me()) ? "/@login" : "/@manage"}
			>
			  {t(UserMethods.is_guest(me()) ? "login.login" : "home.footer.manage")}
			</AnchorWithBase>
          </HStack>
        </HStack>
      </Container>
    </Center>
  )
}
