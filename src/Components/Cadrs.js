import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Stack, Container } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Tooltip } from '@mui/material';

const cardsContent = [
  { title: 'BMW Serije 1', price: 19999, imgSrc: 'https://autorepublika.com/wp-content/uploads/2019/02/2019-bmw-m140i-finale-edition-5.jpg', engine: ['Benzin', 'Dizel'] },
  { title: 'BMW Serije 2', price: 19999, imgSrc: 'https://autorepublika.com/wp-content/uploads/2019/02/2019-bmw-m140i-finale-edition-5.jpg', engine: ['Benzin', 'Dizel'] },
  { title: 'BMW Serije 3', price: 35000, imgSrc: 'https://www.bmw.rs/content/dam/bmw/common/all-models/2-series/coupe/2021/navigation/bmw-2-series-coupe-ag-modelfinder-890x501.png', engine: ['Benzin', 'Dizel', 'Hibrid'] },
 


]


function Card_({ title, price, img, engine ,index}) {
  return (
    <Tooltip sx={{bgcolor:'red'}} title='Explore'>
    <Card sx={{ width:{sx:"100%",md:"16.6666%"}, bgcolor: 'black', flexGrow:1,alignSelf:'center'}}>
      <CardActionArea>
        <CardMedia sx={{ bgcolor: "white" }}
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Stack direction='row'  justifyItems='center' spacing={1} sx={{ padding:'2px'}}>
         
            {engine.map((item)=>{
              return <Chip label={item}  variant="outlined" sx={{color:'white',border:"none"}} />
            })}

          </Stack>
          <Typography gutterBottom align='left' variant="h5" component="div" color="white">
            {title}
          </Typography>

          <Typography color="white" align='left'>$ {price}</Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant='contained' endIcon={<NavigateNextIcon/>} color="primary" sx={{ width: '100%' ,}}>
          Saznaj vise
        </Button>
      </CardActions>
    </Card>
    </Tooltip>
  );
}

export default function Cards() {
  return (
    <Container sx={{ bgcolor: '', padding:{} , padding:'25px',marginTop:'55px'}}>
      <Typography  variant='h4' sx={{marginBottom:'35px',textDecoration:'underline',textUnderlineOffset:'15px',textDecorationColor:'orange'}}  color='white'>Nove Generacije</Typography>
      <Stack direction="row"  justifyContent={'flex-start'}   alignItems={'start'} sx={{ flexWrap: "wrap" ,gap:{xs:'25px',md:'25px'}}}>
        {cardsContent.map((car,index) => {

          return <Card_ index={index} title={car.title} price={car.price} img={car.imgSrc} engine={car.engine}></Card_>
        })}
      </Stack>

    </Container>
  )
}