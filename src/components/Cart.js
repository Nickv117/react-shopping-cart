import React from "react"
import { useChooks } from "../hooks"
import "../styles/cartstyle.css"

export default function(e) {
  const { cart, view, cartView, del } = useChooks()

  return (
    <div className="checkoutcart">
      <button onClick={e => view()}>placeholder</button>
      {cart.map(item => (
        <div key={item.id}>
          <img src={`/assets/${item.sku}_2.jpg`} />
          <p className="cartText">{item.title}</p>
          <p className="cartText">
            {item.availableSizes[0]} | {item.style}
          </p>
          <p className="price">
            {item.currencyFormat}
            {item.price.toFixed(2)}
          </p>
          <button className="deleteX" onClick={e => del(item)}>
            X
          </button>
        </div>
      ))}
    </div>
  )
}
