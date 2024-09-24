import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


export default function CardComp({title, image, icon1, icon2, icon3, icon4, icon5, handleModalOpen}) {
  return (
    <Card sx={{ maxWidth: 345 , width: '280px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <div style={{display: 'flex', gap: 10, textAlign: 'center', justifyContent: 'center'}}>
           {icon1}
           {icon2}
           {icon3}
           {icon4}
           {icon5}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" variant='contained' onClick={handleModalOpen}>
          Book
        </Button>
      </CardActions>
    </Card>
  );
}
