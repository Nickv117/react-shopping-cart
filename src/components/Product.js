import React, { useEffect, useState } from "react"
import { usePhooks } from "../hooks"
import { useChooks } from "../hooks"
import axios from "axios"

export default props => {
  const { products } = usePhooks()
  const { add } = useChooks()
  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id}>
          <img src={`/assets/${product.sku}_1.jpg`} />
          <p className="pText">{product.title}</p>
          <p classname="pText">
            {product.currencyFormat}
            {product.price.toFixed(2)}
          </p>
          <button className="addCart" onClick={e => add(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  )
}
