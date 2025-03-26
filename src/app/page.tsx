// React Server Component
// Async Functional Component
// Data Fetching
// async function + await + fetch

export default function LandingPage() {
  // wait(1000), delay(1000)
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  // const response = await fetch('https://jsonplaceholder.typicode.com/users')

  // if (!response.ok) {
  //   throw new Error('데이터 페칭에 실패했습니다.')
  // }

  // const users = await response.json()

  return (
    <main>
      <h1>안녕 Next.js 15</h1>
      <img src="/nextjs.svg" alt="Next.js 프레임워크" width={64} height={64} />
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
    </main>
  )
}
