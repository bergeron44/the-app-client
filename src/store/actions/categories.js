import {SET_ALLCATEGORIES_VALUE} from '../constants/categories'
import axios from 'axios'

export const setAllCategoryName = () => async dispatch => {
    // do logic for getting to server side (axios.get('someurl)) // not relevant for this action
    const categories = await axios.get(`http://localhost:3001/api/categorys`)
    console.log("set all categorys")
    await dispatch({type:SET_ALLCATEGORIES_VALUE, payload: categories.data})
}


