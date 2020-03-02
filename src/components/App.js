import React from "react"
import "../styles/App.css"
import Products from "./Product"
import Cart from "./Cart"
import { BrowserRouter as Router, Route } from "react-router-dom"

export default props => {
  return (
    <Router>
      <div className="container">
        <div className="products">
          <Route path="/" component={Products} />
        </div>
        <div className="cart">
          <Route path="/" component={Cart} />
        </div>
      </div>
    </Router>
  )
}
