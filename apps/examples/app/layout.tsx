import localFont from 'next/font/local'
import { type PropsWithChildren } from 'react'
import './globals.css'

const pretendard = localFont({
  src: [
    {
      path: './fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    { path: './fonts/Pretendard-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-pretendard',
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  )
}
