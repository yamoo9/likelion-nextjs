type Props = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko-KR">
      <body>{children}</body>
    </html>
  )
}
