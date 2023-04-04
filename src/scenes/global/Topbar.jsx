//we have to konw the context so we can change the mode 
import { useContext } from "react";
import { tokens,ColorModeContext } from "../../theme";
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';




const Topbar = () => {
    const theme = useTheme();
    const color = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    // box allow us write css in spicial component
    return (
    <Box display="flex" justifyContent="space-between" p={2}>
        {/*  Search Bar and this is search part*/}
        <Box display="flex"
         backgroundColor={color.primary[400]}
         borderRadius="3px"
         >
          <InputBase sx={{ml:2,flex:1}} placeholder="Search"/>
          <IconButton type="button" sx={{p:1}}>
            <SearchIcon/>
          </IconButton>
         </Box>

         {/* Icons */}
         <Box display={"flex"} >
            <IconButton onClick={colorMode.toggleColormode}>
                {theme.palette.mode === 'dark'? (
                    <DarkModeIcon/>
                ):(
                    <LightModeIcon/>
                )}
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon/>
            </IconButton>
            <IconButton>
                <SettingsIcon/>
            </IconButton>
            <IconButton>
                <PersonIcon/>
            </IconButton>

         </Box>
    </Box>)
};
export default Topbar;