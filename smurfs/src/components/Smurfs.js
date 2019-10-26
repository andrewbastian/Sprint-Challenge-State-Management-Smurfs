import React, {useEffect} from 'react';
import SmurfCard from './SmurfCard';
import { fetchRoster } from '../actions/index';
import { connect } from "react-redux";

function Smurfs (props) {
  useEffect(()=>{
    props.fetchRoster()
  },[])
console.log('rosterProps',props.smurfs);
  return (
    <div>
{(props.smurfs).map(smurf=>(
  <SmurfCard smurf={smurf}
    />
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
// notice how "mapDispatchToProps" is optional.
// since we're not calling action creators here, we don't need it.
export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);
