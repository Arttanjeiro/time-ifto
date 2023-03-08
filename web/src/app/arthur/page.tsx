import Image from "next/image"


interface Usuario{
  avatar_url: string
  location: string
  name: string
  company: string
  bio: string
}

export const metadata = {
  title: 'Arthur'
}

async function getData(): Promise<Usuario>{
  const repo = await fetch('https://api.github.com/users/Arttanjeiro')
  return repo.json()
}
export default async function Arthur(){
  const usuario = await getData()

  return(

    <div>
     <div>
      <Image src={usuario.avatar_url} alt='Imagem do usuario' width='120' height='120'/>
     </div>
    </div>

  )
}