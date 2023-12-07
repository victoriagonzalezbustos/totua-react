import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton,MenuList,MenuItem } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>


            <Flex>
                <Box p='4' >
                 Totua 
                </Box>
                <Spacer />


                <Menu isLazy>
                    <MenuButton>Categorias</MenuButton>
                    <MenuList>
                    {/* MenuItems are not rendered unless Menu is open */}
                        <MenuItem>Carpinteria</MenuItem>
                        <MenuItem>Plomeria</MenuItem>
                        <MenuItem>Electricidad</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />


                <Box p='4' >
                    <CartWidget/>
                </Box>
            </Flex>
                  
                  
    </div>
  )
}

export default Navbar
