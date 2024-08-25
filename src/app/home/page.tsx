"use client";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
export default function House(){
    return (
       <div>
        <title>home</title>
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
<div>
<h1 className="bg-slate-500 h-20 w-300px text-center text-3xl font-bold text-white  p-4 underline border-2  hover:border-black">HOME</h1></div>
       <div className="text-center pt-10 bg-red-200 max-h-full font-bold text-2xl">
            <img className="h-44 ml-80 rounded-full -inset-8 -skew-y-12" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90d6b865-497d-4d81-9e40-6db0e4652b57/dfwhds2-6e029225-72fc-4fba-b1d7-77783e073f12.jpg/v1/fill/w_1095,h_730,q_70,strp/cute_girl_with_hijab_by_grandmasterxl_dfwhds2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvOTBkNmI4NjUtNDk3ZC00ZDgxLTllNDAtNmRiMGU0NjUyYjU3XC9kZndoZHMyLTZlMDI5MjI1LTcyZmMtNGZiYS1iMWQ3LTc3NzgzZTA3M2YxMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.i_XdJOBaTEwxAhU6EdB3NYgorJAL2q8i2M2Lzt3ZbVM"/>
            
    <h2>Hi, I am Rizwana.</h2>
    <Typewriter
  options={{
    strings: ['I am a web developer,', 'problem solving'],
    autoStart: true,
    loop: true,
  }}
/>
        </div>
        </div>
    )
}