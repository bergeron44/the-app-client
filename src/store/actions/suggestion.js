import {SET_SUGGESTION_VALUE} from '../constants/suggestion'
import axios from 'axios'

export const setSuggestion = (suggestion) => async dispatch => {
    const data= await axios.post('http://localhost:3001/api/suggestion/create',suggestion)
    alert('the suggestion create succsfuly :'+JSON.stringify( data.data))
    
   await dispatch({type:SET_SUGGESTION_VALUE, payload: data.data})
}

