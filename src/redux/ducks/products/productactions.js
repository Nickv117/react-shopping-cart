import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const GRAB_PRODUCTS = "cart/GRAB_PRODUCTS"

const initialState = {
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GRAB_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}

function grabProducts() {
  return dispatch => {
    axios.get("/products").then(resp => {
      dispatch({
        type: GRAB_PRODUCTS,
        payload: resp.data
      })
    })
  }
}

export function usePhooks() {
  const dispatch = useDispatch()
  const products = useSelector(appState => appState.productState.products)
  useEffect(() => {
    dispatch(grabProducts())
  }, [])
  return { products }
}
