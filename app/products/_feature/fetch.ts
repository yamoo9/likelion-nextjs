import delay from "app/utils/delay"
import { type Photo } from "./types"

export const fetchProducts = async () => {
  await delay(2000)
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')

  if (!response.ok) {
    throw new Error('데이터 페칭에 실패함.')
  }

  return await response.json() as Photo[]
}