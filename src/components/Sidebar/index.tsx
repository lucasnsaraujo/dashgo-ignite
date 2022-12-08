import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useBreakpointValue,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {

  const { isOpen, onClose } = useSidebarDrawer();
  const isDrawerNavbar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!!isDrawerNavbar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}
