import axios from "axios"
export const FETCH_SMURFS = "FETCH_SMURFS"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR"

export const ADD_SMURF = "ADD_SMURF"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR"

export function addSmurf(smurf){
  return (dispatch) => {

    dispatch ({type: ADD_SMURF})

    axios.post('http://localhost:3333/smurfs', smurf)

    .then(res=>{

       console.log('add action',res.data)

       dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data})
     })

    .catch(err=>{

        dispatch({ type: ADD_SMURF_ERROR, payload: err})
      })
  }
}



export function fetchRoster (){

  return (dispatch) =>{

    dispatch({ type: FETCH_SMURFS })

    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
	     console.log('fetch action',res.data)

       dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
     })

    .catch(err=>{
        dispatch({ type: FETCH_SMURFS_ERROR, payload: err})
      })
  }
}
