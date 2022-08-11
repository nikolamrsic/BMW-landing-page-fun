import { Stack, TextField } from '@mui/material'
import { Container, Box } from '@mui/system'
import FormControl from '@mui/material/FormControl';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react'

export default function Form() {
    let[errors,setErrors]=React.useState({
        errorName:{
            status:false,
            msg:'Morate uneti Vase ime.'
        },
        errorLastName:{
            status:false,
            msg:'Morate uneti Vase Prezime.'
        },

        erorEmail:{
            status:false,
            msg:'Morate uneti Vas Email.'
        },
       
    })

    return (
        <Container maxWidth={true} sx={{ bgcolor: 'black', marginTop: '55px' }}>
            <Stack justifyContent={'center'}    direction={{ xs: 'column', md: 'row' }}>
                <Stack  maxHeight={true}   width={{ xs: '100%', md: "50%" }}>

                    <Box  onSubmit={(e)=>{
                            e.preventDefault()

                            if(e.target.userName.value==''){
                                setErrors((prev)=>{
                                    return {...prev,errorName:{...prev.errorName,status:true}}
                                })
                                
                            }
                            if(e.target.userLastName.value==''){
                               
                                setErrors((prev)=>{
                                    return {...prev,errorLastName:{...prev.errorLastName,status:true}}
                                })
                              
                            }
                        console.log(errors)
                     //console.log(e.target.userLastName.value)
                            
                        
                    }}  overflow="hidden"  height="100%" component='form' sx={{ bgcolor: 'rgb(18, 18, 18)', padding:"15px"}}>

                        <FormControl error={errors.errorName.status} variant='filed' sx={{boxSizing:'border-box' ,padding: '25px', width: '100%', }}>
                            <InputLabel sx={{ color: 'white' }} htmlFor="userName">Name</InputLabel>
                            <Input variant='' sx={{ color: 'white' }} id="userName" aria-describedby="my-helper-text" />
                            <FormHelperText sx={{ color: 'white' }} id="my-helper-text">{errors.errorName.status && errors.errorName.msg}</FormHelperText>
                        </FormControl>

                        <FormControl error={errors.errorLastName.status} variant='filed' sx={{boxSizing:'border-box' ,padding: '25px', width: '100%', }}>
                            <InputLabel sx={{ color: 'white' }} htmlFor="userLastName">LastName</InputLabel>
                            <Input  variant='' sx={{ color: 'white' }} id="userLastName" aria-describedby="my-helper-text" />
                            <FormHelperText sx={{ color: 'white' }} id="my-helper-text">{errors.errorLastName.status && errors.errorLastName.msg}</FormHelperText>
                        </FormControl>


                        <FormControl variant='filed' sx={{boxSizing:'border-box' ,padding: '25px', width: '100%', }}>
                            <InputLabel sx={{ color: 'white' }} htmlFor="userEmail">Email address</InputLabel>
                            <Input variant='' type='email' sx={{ color: 'white' }} id="userEmail" aria-describedby="my-helper-text" />
                            <FormHelperText sx={{ color: 'white' }} id="my-helper-text">We'll never share your email.</FormHelperText>
                        </FormControl>


                        
                        <FormControl variant='filed' sx={{boxSizing:'border-box' ,padding: '25px', width: '100%', }}>
                            <InputLabel sx={{ color: 'white' }} htmlFor="userEmail">Email address</InputLabel>
                            <Input variant='' type='date' sx={{ color: 'white' }} id="userEmail" aria-describedby="my-helper-text" />
                            <FormHelperText sx={{ color: 'white' }} id="my-helper-text">We'll never share your email.</FormHelperText>
                        </FormControl>
                       
                        <Button type="submit" variant='contained' sx={{ width: '50%' }}>Submit</Button>

                    </Box>
                </Stack>

                <Box width={{ xs: '100%', md: "50%" }} >
                    <img style={{ width: '100%', height: '100%',objectFit:'cover' }} src='https://www.bmw.rs/content/dam/bmw/common/home/teaser/g20-bmw-3-series-sedan-lci-hometeaser-desktop.jpg.asset.1652273743580.jpg'></img>
                </Box>
            </Stack>

        </Container>
    )
}
