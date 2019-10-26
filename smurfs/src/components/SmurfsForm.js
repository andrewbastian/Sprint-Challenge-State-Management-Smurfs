import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

import {makeStyles} from '@material-ui/core';
import {Button} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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

  const classes = useStyles();

  const [smurf, setSmurf] = useState({name:"", age:"", height:""});

  const handleInputChanges = event => {
      event.preventDefault();
      setSmurf({...smurf,[event.target.name]:event.target.value});
  };

  const submitForm = (event) => {
      event.preventDefault();

      props.addSmurf(smurf)
      setSmurf({
          name:"",
          age: "",
          height:""
      });
  };

  return (

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>

          <form onSubmit={submitForm}>

              <label htmlFor="SmurfForm" hidden>
                  Add a Smurf
              </label>

            <TextField  label="Name"
                          onChange={handleInputChanges}
                          value={smurf.name}
              />
            <TextField  label="Age"
                          onChange={handleInputChanges}
                          value={smurf.age}
              />
            <TextField  label="Height"
                          onChange={handleInputChanges}
                          value={smurf.height}
              />

            <Button type="submit" onClick = {submitForm}> + </Button>


            </form>

        </Toolbar>
      </AppBar>

      </div>
  );
}
export default connect(null, {addSmurf})(SmurfsForm)
