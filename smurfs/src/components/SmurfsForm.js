import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchRoster, addSmurf } from "../actions/index";

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

  const [count, setCount] =useState(0)

  useEffect(()=>{
    props.fetchRoster()
  },[count])

  const [smurfV, setSmurfV] = useState({name:'', age:'', height:''})

  const classes = useStyles();

  const handleInputChanges = event => {
      event.preventDefault()
      setSmurfV({...smurfV, [event.target.name] : event.target.value, [event.target.age] : event.target.value, [event.target.height] : event.target.value});
  };

  const submitForm = (event) => {
      event.preventDefault();
      props.addSmurf(smurfV);
      setCount(count +1)
}


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
                          name= 'name'
              />
            <TextField  label="Age"
                          onChange={handleInputChanges}
                          age = 'age'
              />
            <TextField  label="Height"
                          onChange={handleInputChanges}
                          height = 'height'
              />

            <Button type="submit" onClick = {submitForm}> + </Button>


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
    error: state.error
  };
}

const mapDispatchToProps = {
  addSmurf,
  fetchRoster
}

export default connect(mapStateToProps, mapDispatchToProps)(SmurfsForm);
