import React from 'react'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Stack } from '@mui/material'
export default function Hero() {
  return (
    <Container  maxWidth={true} sx={{width:'100%',height:'650px',bgcolor:'black',overflow:"hidden",position:"relative",display:'flex',alignItems:'center'}}>
     <img style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%',objectFit:'cover',zIndex:0}} src="https://www.bmw.rs/content/dam/bmw/common/all-models/x-series/x1/2022/highlights/bmw-x-series-x1-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1651041559906.jpg"></img>
     <Box sx={{position:'relative',zIndex:5,borderBottom:'solid 1px white',height:'fit-content',alignSelf:{xs:'start',md:'center'}}}>
         <Typography variant='h2' align='left' color="white">The X1</Typography>
         <Typography variant='h4' align='left'  color="white">Novi BMW X1</Typography>
     </Box>
     <Box sx={{position:"absolute",zIndex:5,bottom:'25px'}}>
         <Stack direction={{xs:'column',md:'row'}} spacing={{xs:5}}>
         <Stack>
             <Typography variant='h4' align="left"color="white">7.2–6.5 l/100 km</Typography>
             <Typography variant='subtitle1' align="left" sx={{fontWeight:'lighter'}} color="white">Potrošnja goriva u l/100 km (kombinovano)</Typography>
         </Stack>
         <Box >
             <Stack direction='row' spacing={3}>
             <Typography variant='h4' align="left"color="white">Benzin</Typography>
             <Typography variant='h4' align="left"color="white">Dizel</Typography>
             <Typography variant='h4' align="left"color="white">Hibrid</Typography><br/>
             </Stack>
             <Typography variant='subtitle1' align='left'  color="white">Motor i vrsta goriva</Typography>
         </Box>
         </Stack>
     </Box>
    </Container>
  )
}
