import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(0),
    display: 'flex',
    justifyContent: 'space-between'

  },
  card: {
    width: '50%',
    minWidth: 275,
    alignText: 'center'
  },
}));

export default function SmurfCard({smurf}){

  const classes = useStyles();

    return(

    <Card className={classes.root}>

      <CardContent className={classes.card}>

        <List>

          <ListItemText>Name:<br></br>{smurf.name}</ListItemText>

          <ListItemText>Age:<br></br>{smurf.age}</ListItemText>

          <ListItemText>Height:<br></br>{smurf.height}</ListItemText>

        </List>

      </CardContent>

    </Card>

  );
}
