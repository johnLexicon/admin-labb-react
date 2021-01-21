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

export default function UserCard({user}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {user.firstName} {user.lastName}
        </Typography>
        <CardMedia
          className={classes.media}
          image={user.avatar}
          title="Contemplative Reptile"
        />
        <Typography variant="body2" component="p">
          Email: {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
}