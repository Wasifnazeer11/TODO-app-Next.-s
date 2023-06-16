import Image from 'next/image'
import Todolist from './components/Todolist'
import Againtodo from './components/Againtodo'
import Addtodo from './components/Addtodo'
export default function Home() {
  return (
    <main className='bg-gradient-to-tr from-orange-600 to-pink-600 h-screen flex items-center justify-center '>
<div className=' bg-white  shadow-lg rounded-xl py-5 px-7 max-w-md items-center w-full  '  >
      


      {/* <Todolist/> */}
      <Againtodo/>
      <Againtodo/>
      <Againtodo/>
      <Againtodo/>

      <Addtodo/>

      

      <div className='w-1/2 h-2 bg-black content-end rounded-lg mx-auto mt-5'>

      </div>
      </div>

    </main>
  )
}
