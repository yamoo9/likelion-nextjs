'use client'

import { use } from "react"
import { type Photo } from "../_feature/types"

export default function List({ itemsPromise }: { itemsPromise: Promise<Photo[]> }) {
  const products = use(itemsPromise)
  
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <div>
            <p>{product.title}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
