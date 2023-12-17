import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { useDrawerContext } from '../../contexts';

interface IMenuLateralProps {
  children: React.ReactNode
}
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  
  const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext();
  console.log(isDrawerOpen);

  return (  
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' :'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12)
              }}
              alt='Remy Sharp'
              src='https://media.licdn.com/dms/image/D4D03AQHIiMX4i4UXvw/profile-displayphoto-shrink_800_800/0/1699879557886?e=1708560000&v=beta&t=C-Nk65WkVNrHDNcLhH8hoKG_NJw35QCgdQXes61S9UM' />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component='nav'>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary='Página inicial'/>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer >
      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};