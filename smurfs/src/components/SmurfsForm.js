import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchRoster, addSmurf } from "../actions/index";

import {makeStyles} from '@material-ui/core';
import {Button} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  addItemTextField:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const SmurfsForm = (props) => {

  const [count, setCount] =useState(0);

  useEffect(()=>{
    props.fetchRoster();
  },[count])

  const classes = useStyles();

  const [user, setUser] = useState({});

     const handleInputChange = event => {
         setUser({...user, [event.target.name]: event.target.value});
         console.log(user);
     }

     const submitForm = event => {
        event.preventDefault();
         props.addSmurf(user);
         setUser({name: "", age: "", height: ""});
     }

     return(

   <div className={classes.root}>

      <AppBar position="static">

        <Typography>Add a Smurf:</Typography>

           <Toolbar>

             <form onSubmit={submitForm}>

                <TextField placeholder='Name'
                   name='name'
                   value={props.name}
                   onChange={handleInputChange}/>

                 <TextField placeholder='Age'
                   name='age'
                   value={props.age}
                   onChange={handleInputChange}/>

                 <TextField placeholder='Height'
                   name='height'
                   value={props.height}
                   onChange={handleInputChange}/>

                 <Button type='submit' onClick = {submitForm}>Submit</Button>

               </form>

             </Toolbar>

           </AppBar>

         </div>

    );
 }
 
 function mapStateToProps(state) {
   return {
     smurfs: state.smurfs,
     isLoading: state.isLoading,
     error: state.error,
     user: state.user,
   };
 }

 const mapDispatchToProps = {
   addSmurf,
   fetchRoster
 }

 export default connect(mapStateToProps, mapDispatchToProps)(SmurfsForm);
