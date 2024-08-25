import Link from "next/link"
export default function About(){
    return (
        <div>
          <title>contact</title>
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
  <h1 className="text-center p-4 text-white font-bold text-3xl  bg-slate-500 h-20 underline border-2 hover:border-black">CONTACT</h1>
  <div className="text-center p-4 bg-red-200 text-xl font-semibold">WhatsApp  
    <br/>03122229020
    <div className="text-center text-xl font-semibold">LinkedIn 
    <br/>https://www.linkedin.com/in/rizwana-perveen-31b4352b5/</div>
    <div className="text-center text-xl font-semibold">GitHub 
    <br/>https://github.com/rizwanaperveen</div>
    <div className="text-center text-xl font-semibold">FaceBook 
    <br/>https://www.facebook/rizwanaperveen/.com</div>
    <div className="text-center text-xl font-semibold">Gmail 
    <br/>rizwanaperveen9020@gmail.com</div>
    <div className="text-center text-xl font-semibold">
            <p>Rizwana Perveen</p>
    </div>
    </div>
  </div>
  )
}