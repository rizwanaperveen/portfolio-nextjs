import Link from "next/link";
export default function Home(){
  return(
    
    <div className="text-sky-950 font-bold bg-red-300 text-center">
    <title>Portfolio</title>
    <h1 className="border-4 hover:border-black h-32 text-2xl text-center p-12 underline">"HELLO WORLD"</h1>
    <header className="text-blue-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
  
      <span className="ml-3 text-2xl border-2 hover:border-black underline">MY PORTFOLIO</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/home" className="mr-5 hover:text-gray-900 text-xl border-2 hover:border-black">HOME</Link>
      <Link href="/about" className="mr-5 hover:text-gray-900 text-xl border-2 hover:border-black">ABOUT</Link>
      <Link href="/skills" className="mr-5 hover:text-gray-900 text-xl border-2 hover:border-black">SKILLS</Link>
      <Link href="/contact" className="mr-5 hover:text-gray-900 text-xl border-2 hover:border-black">CONTACT</Link>
    </nav>
    <a href="/cv">
    <button className="inline-flex items-center bg-blue-900 border-0 py-1 px-3  hover:bg-black rounded text-white mt-4 md:mt-0 text-xl">
      CV
    </button></a>
  </div>
</header>
<div>
<img className="w-full h-96" src="https://t4.ftcdn.net/jpg/03/14/92/75/360_F_314927575_yqFMAuXFTNC6gBflR2njRZ4bQb8dAb7y.jpg" alt="pic"/>
    </div>
    </div>
);
}
