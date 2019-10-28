import {FETCH_SMURFS,
        FETCH_SMURFS_SUCCESS,
        FETCH_SMURFS_ERROR,
        ADD_SMURF,
        ADD_SMURF_SUCCESS,
        ADD_SMURF_ERROR} from "../actions/index"

const initialState = {
  smurfs:[],
  isLoading: false,
  error: ''
};

export function reducer (state = initialState, action) {

  switch(action.type) {

    case FETCH_SMURFS:
      return{
        ...state,
        isLoading:true
      }

      case FETCH_SMURFS_SUCCESS:
        return{
          ...state,
          smurfs: action.payload,
          isLoading: false
        }

        case FETCH_SMURFS_ERROR:
          return{
            ...state,
            error: action.payload,
            isLoading: false
          }

          case ADD_SMURF:
          return {
                ...state,
            };

          case ADD_SMURF_SUCCESS:
          return{
            ...state,
              name: action.payload.name,
              age: action.payload.age,
              height: action.payload.height,
              isPosting: false
          }

          case ADD_SMURF_ERROR:
          return{
            ...state,
            error: action.payload,
            isPosting: false
          }

    default:
      return state;
      
  }
}
