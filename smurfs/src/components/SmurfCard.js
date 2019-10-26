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
  },
}));

export default function SmurfCard({smurf}){
  const classes = useStyles();

    console.log('smurf_card props', smurf);
    return(
    <Card className={classes.root}>
      <CardContent>
        <List>
        <ListItemText>Name:{smurf.name}</ListItemText>
        <ListItemText>Age:{smurf.age}</ListItemText>
        <ListItemText>Height:{smurf.height}</ListItemText>
        </List>
    </CardContent>
    </Card>

    );
}
