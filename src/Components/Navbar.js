import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material'
import { Fragment } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import InfoIcon from '@mui/icons-material/Info';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EmailIcon from '@mui/icons-material/Email';
let drawerWidth=250
const NavLinks=[
    {title:'Modeli i ponude',icon:DirectionsCarIcon},
    {title:'Servis i oprema',icon:MiscellaneousServicesIcon},
    {title:'Info',icon:InfoIcon},
    {title:'Kontakt',icon:EmailIcon},
]



function SideBar({isOpen}){
 return( <Drawer
        sx={{
          bgcolor:'black',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor:'black',
            color:"white",
            stroke:'white',
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <Toolbar />
        <Typography>Menu</Typography>
        <Divider />
        <List>
          {NavLinks.map((item, index) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <item.icon></item.icon>
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
     
      </Drawer>)
}




export default function Navbar() {
  let[openSideBar,setOpenSidebar]=React.useState(false)
   const closeSidebarOnScreenSize=()=>{
     if(window.innerWidth>=500){
      setOpenSidebar(false)
     }
   }
  useEffect(()=>{
     window.addEventListener('resize',closeSidebarOnScreenSize)
     return(()=>{
       window.removeEventListener('resize',closeSidebarOnScreenSize)
     })
  })
  return (
    <>
    <SideBar isOpen={openSideBar}/>
    <AppBar position="sticky"  color="secondary" sx={{bgcolor:' rgba(20, 20, 20, 0.36)',backdropFilter: "blur(15px)",borderBottom:'solid 2px orange'}}>
      <Toolbar >
       <Stack direction='row'  alignItems="center" justifyContent="space-between" sx={{width:'100%'}}>

      
        <Typography variant="h6">
          BMW   
        </Typography>
        <Box  sx={{display:{xs:'none',sm:'none',md:"block"}}}>

         <Stack direction={'row'}
         
         >
          {NavLinks.map((link)=>{
              return <Button  variant="text" sx={{borderBottom:'solid 1px transparent', color:'white',padding:'10px 25px',borderRadius:0,'&:hover':{borderBottom:'solid 1px white'}}}>{link.title}</Button>
          })}
         
          </Stack>
        
         
      
          </Box>
          </Stack>
          <IconButton onClick={()=>{setOpenSidebar(!openSideBar)}} sx={{justifyContent:'center',bgcolor:'none',display:{
              sm:'flex',
              md:"none"
          }}}>
              <MenuIcon sx={{fill:'white'}}/>
          </IconButton>
      </Toolbar>
    </AppBar>
    </>
  )
}
