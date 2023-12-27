import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton,MenuList,MenuItem } from '@chakra-ui/react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>


            <Flex>
              <Link to='/'>
                <Box p='4' >
                 Totua 

                </Box>
                </Link>

          
                <Spacer />
              

                <Menu isLazy>
                    <MenuButton>Categorias</MenuButton>
                    <MenuList>
                    {/* MenuItems are not rendered unless Menu is open */}
                    <Link to= '/categoria/carpinteria'>
                        <MenuItem>Carpinteria</MenuItem>
                    </Link>
                    <Link to= '/categoria/plomeria'>
                        <MenuItem>Plomeria</MenuItem>
                    </Link>
                    <Link to= '/categoria/electricidad'>
                        <MenuItem>Electricidad</MenuItem>
                    </Link>
          
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
