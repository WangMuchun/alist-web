import {
  HStack,
  Icon,
  Kbd,
} from "@hope-ui/solid"
import { Show } from "solid-js"
import { getSetting, objStore, State } from "~/store"
import { BsSearch } from "solid-icons/bs"
import { Container } from "./Container"
import { bus } from "~/utils"
import { isMac } from "~/utils/compatibility"

export const Search = () => {
	return (
	   <HStack>
		<Show when={objStore.state === State.Folder}>
		  <Show when={getSetting("search_index") !== "none"}>
			<HStack
			  bg="$neutral4"
			  w="$80"
			  p="$2"
			  rounded="$md"
			  justifyContent="space-between"
			  border="2px solid transparent"
			  cursor="pointer"
			  _hover={{
				borderColor: "$info6",
			  }}
			  onClick={() => {
				bus.emit("tool", "search")
			  }}
			>
			  <Icon as={BsSearch} />
			  <HStack>
				{isMac ? <Kbd>Cmd</Kbd> : <Kbd>Ctrl</Kbd>}
				<Kbd>K</Kbd>
			  </HStack>
			</HStack>
		  </Show>
		</Show>
	  </HStack>
	)
} 
