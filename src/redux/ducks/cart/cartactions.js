import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

const ADD_PRODUCT = "cart/ADD_PRODUCT"
const DEL_PRODUCT = "cart/DEL_PRODUCT"
const CART_VIEW = "cart/CART_VIEW"

const initialState = {
  cart: [],
  cartView: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, cart: [...state.cart, action.payload] }
    case DEL_PRODUCT:
      return {
        ...state,
        cart: [...state.cart.filter(cart => cart !== action.payload)]
      }
    case CART_VIEW:
      return { ...state, cartView: !state.cartView }
    default:
      return state
  }
}

function addProduct(product) {
  return dispatch => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product
    })
  }
}

function delProduct(product) {
  return dispatch => {
    dispatch({
      type: DEL_PRODUCT,
      payload: product
    })
  }
}

function toggleView() {
  return {
    type: CART_VIEW
  }
}

export function useChooks() {
  const dispatch = useDispatch()
  const cartView = useSelector(appState => appState.cartState.cartView)
  const cart = useSelector(appState => appState.cartState.cart)
  const add = product => dispatch(addProduct(product))
  const del = product => dispatch(delProduct(product))
  const view = () => dispatch(toggleView())
  useEffect(() => {}, [])
  return { cart, add, del, view, cartView }
}
