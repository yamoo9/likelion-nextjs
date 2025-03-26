import { Suspense } from 'react'
import List from './_components/list'
import { fetchProducts } from './_feature/fetch'

export default async function ProductPage() {
  const productsPromise = fetchProducts()

  return (
    <main>
      <h1>상품 목록</h1>
      <Suspense fallback={<div role="status">리스트 로딩 중...</div>}>
        <List itemsPromise={productsPromise} />
      </Suspense>
    </main>
  )
}
