import React, { useEffect } from 'react';

import SmurfCard from './SmurfCard';

import { fetchRoster } from '../actions/index';

import { connect } from "react-redux";

function Smurfs (props) {

  useEffect(()=>{
    props.fetchRoster()
  },[])

  return (

    <div>
      {(props.smurfs).map(smurf=>(

        <SmurfCard smurf={smurf}/>

      ))}

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
  fetchRoster
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);
