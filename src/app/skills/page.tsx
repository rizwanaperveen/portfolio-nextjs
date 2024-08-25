import Link from "next/link"
export default function Skills(){
    return (
        <div>
          <title>skills</title>
           <header className="text-green-950 bg-slate-500 h-28">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
  
      <span className="ml-3 text-2xl border-2 hover:border-black">MY PORTFOLIO</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/home" className="mr-5 hover:text-gray-950 text-xl border-2 hover:border-black">HOME</Link>
      <Link href="/about" className="mr-5 hover:text-gray-950 text-xl border-2 hover:border-black">ABOUT</Link>
      <Link href="/skills" className="mr-5 hover:text-gray-950 text-xl border-2 hover:border-black">SKILLS</Link>
      <Link href="/contact" className="mr-5 hover:text-gray-950 text-xl border-2 hover:border-black">CONTACT</Link>
    </nav>
    <a href="/cv">
    <button className="inline-flex items-center bg-blue-900 border-0 py-1 px-3  hover:bg-black rounded text-white mt-4 md:mt-0 text-xl">CV
    </button></a>
  </div>
  </header>
    <h1 className=" bg-slate-500 h-20 w-300px text-center text-3xl font-bold text-white  p-4 border-2  hover:border-black underline">SKILLS</h1>   
    <div className="bg-red-200 h-100px w-300px text-center p-10">
    <p className="text-center text-3xl font-bold text-gray-900">HTML</p>
    <p className="text-center text-3xl font-bold text-gray-900 mt-7">CSS</p>
    <p className="text-center text-3xl font-bold text-gray-900 mt-7">JAVASCRIPT</p>
    <p className="text-center text-3xl font-bold text-gray-900 mt-7">TYPESCRIT</p>
    <p className="text-center text-3xl font-bold text-gray-900 mt-7">NEXT.JS</p>
  </div>
  </div>

    )
}
