import Link from "next/link"
export default function About(){
    return (
        <div>
          <title>about us</title>
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
    </nav><a href="/cv">
    <button className="inline-flex items-center bg-blue-900 border-0 py-1 px-3  hover:bg-black rounded text-white mt-4 md:mt-0 text-xl">CV
    </button></a>
  </div>
  </header>
<h1 className="h-20 bg-slate-500 font-extrabold hover:text-blue-950 text-3xl text-center text-white p-4 border-2 hover:border-black underline">About</h1>
        <div className="text-center bg-red-200 font-serif text-2xl h-80 p-28 ">
            <p>Hello I am a Frontend developer expertise in HTML, CSS, Typescript and JavaScript the foundational languages for web development and also work  in popular frameworks like React.
         I'm a responsible, creative, and friendly web developer with a passion for crafting user-friendly interfaces. My skills include HTML, CSS, and JavaScript, and I've worked extensively with React and Nextjs to build dynamic web applications. I'm excited to contribute my expertise to exciting projects!"
             </p></div>
    </div>
        
    )
}