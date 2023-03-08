<<<<<<< HEAD

=======
import '../styles/globo.css'
>>>>>>> arthur

export const metadata = {

    title:{
      default: 'Home',
      template: ' Usuário | %s'
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
