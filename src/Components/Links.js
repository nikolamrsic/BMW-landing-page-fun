import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


let links=[
    {url:'www.facbook.com',title:'fejs',pogodak:false},
    {url:'www.youtube.com',title:'yt',pogodak:false},
    {url:'www.twiter.com',title:'tw',pogodak:false},
    {url:'www.react.org',title:'reac',pogodak:true},
]




export default function Links() {
 let[pogodak,setPogodak]=React.useState(null)
 
 
 function myFn(link){
     
   
    if(link.pogodak){
        setPogodak(true)
    }else{
        setPogodak(false)
    }
    console.log('>>>',link.url)
   setTimeout(()=>{
       setPogodak(null)
   },1000)
 }



  return (
    <div>

        {pogodak !=null && <Typography variant="body1" color="white">
            {pogodak==true ? 'pogodak' :'promasaj'}
            
            </Typography>}
        {links.map((item)=>{
            return <Button onClick={()=>{
                myFn(item)
            }}>{item.title}</Button>
        })}
    </div>
  )
}
