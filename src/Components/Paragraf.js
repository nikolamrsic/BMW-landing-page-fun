import React from 'react'
import {Container,Stack, Typography,Box,Button} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function Paragraf() {
  return (
    <Container maxWidth={true} sx={{marginTop:'55px',}}>
        <Stack direction={{xs:'column',md:'row'}} sx={{bgcolor:''}}>
            <Stack sx={{flexGrow:1,width:{xs:'100%',md:'50%',},bgcolor:'white'}}  justifyContent="center"
  alignItems="center">
                <Box sx={{bgcolor:'',width:{xs:'100%',md:'70%'},padding:'3.2rem 0 3.2rem 1.5rem'}} >
                <Typography align='left' color='black' variant='h4' sx={{marginBottom:'25px'}}>Novi BMW Serije 3</Typography>
                <Typography align='left' color='black' variant='body1'>Novi BMW Serije 3 Sedan nudi izvanrednu dinamiku vožnje i sveobuhvatnu, tehnološki modernu podršku vozaču u novom sportskom dizajnu.  </Typography>
                <Typography  align='left'  color='black' variant='body1'>BMW 330i Sedan:</Typography><br/>
                <Typography  align='left' color='black' variant='body1'>Potrošnja goriva u l/100 km (kombinovano): 7.3–6.6</Typography><br/>
                <Typography  align='left' color='black' variant='body1'>Emisija C02 u g/100 km (kombinovano): 166–148</Typography><br/>
                <Button size="small" variant='contained' endIcon={<NavigateNextIcon/>} color="primary" sx={{float:'left'}}>
          Saznaj vise
        </Button>
              </Box>
            </Stack>
            <Box sx={{flexGrow:1,width:{xs:'100%',md:'50%'}}}>
                <img style={{width:'100%',height:"100%",objectFit:'cover'}} src='https://www.bmw.rs/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1651158468431.jpg'></img>
            </Box>
           
        </Stack>
    </Container>
  )
}
