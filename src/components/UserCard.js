import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 240,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function UserCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          John Lundgren
        </Typography>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1544450804-9e5f64cb18de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          title="Contemplative Reptile"
        />
        <Typography variant="body2" component="p">
          Email: j@hotmail.com
        </Typography>
      </CardContent>
    </Card>
  );
}