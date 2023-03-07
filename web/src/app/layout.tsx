

export const metadata = {

    title:{
      default: 'Home',
      template: '%s | Home'
    }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
