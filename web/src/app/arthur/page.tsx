import Image from "next/image"

interface Usuario {
  avatar_url: string
  location: string
  name: string
  bio: string
}


async function getData(): Promise<Usuario> {
  const repo = await fetch('https://api.github.com/users/Arttanjeiro')
  return repo.json()
}
export default async function Arthur() {
  const usuario = await getData()

  return (

    <div className="flex justify-center items-center h-screen  flex-col bg-black">
      <div className="flex items-center  gap-2">

        <Image src={usuario.avatar_url} className='flex rounded-full ' alt='Imagem do usuario' width='120' height='120' />
        <div className="flex  gap-4 ml-4 text-white text-xl ">
          <h3 className="">{usuario.name} </h3>
          <span >{usuario.location}</span>
          <span >{usuario.bio}</span>
        </div>
      </div>


      <div >
        <hr className="border border-violet-700 mt-6" />
        <h2 className="text-2xl mt-3 text-white ">Sobre</h2>

        <div className="font-bold text-lg ml-6 w-[923px] text-white ">
          <p className="mt-3" >Muito prazer me chamo Arthur Sousa Rabelo, tenho 20 anos,  e sou candidato a vagas de programador Front-End júnior e estagiário, minha experiência na área da programação em si vem inicialmente do instituto em que estudo, que é o instituto federal do tocantins no curso de Sistema para Internet. </p>



          <p className="mt-3">
            Recentemente fiz curso da Udemy , optei por fazer trilha de Nextjs e lá conheci o
            Typescript , conceito de Single Page Applications , Server-Side Rendered , Static Site Generation.
            Terminei curso , mas ainda passo horas na internet buscando novas fonte de conhecimento e empresa para
            trabalhar e ir pra prática de verdade.
          </p>
        </div>


      </div>
    </div>

  )
}