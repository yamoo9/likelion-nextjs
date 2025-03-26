'use client'

import { useEffect, useState } from 'react'
import { fetchProducts } from './_feature/fetch'
import { type Photo } from './_feature/types'
// import { useParams } from 'next/navigation'

export default function ProductPage() {
  // const params = useParams()

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Photo[] | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let ignore = false;

    (async () => {
      setLoading(true)
      try {
        const products = await fetchProducts()
        if (!ignore) {
          setData(products)
        }
      } catch (error) {
        if (!ignore) {
          setError(error as Error)
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    })()

    return () => {
      ignore = true
    }
  }, [])

  if (loading) {
    return <div role='status'>로딩 중...</div>
  }

  if (error) {
    return <div role='alert'>{error.message}</div>
  }

  return (
    <main>
      <h1>상품 목록</h1>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>
            <div>
              <p>{product.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
