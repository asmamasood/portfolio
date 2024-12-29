import Image from "next/image";
import calculator from "@/app/public/calculator.png";
import guessnumber from "@/app/public/guess-number.png";
import Atmmechine from "@/app/public/Atm-mechine.png";
import todo from "@/app/public/todo.png";
import pixel from "@/app/public/pixel.png";
import resume from "@/app/public/resume.png";
export default function projects ()
   {
  return (
<div className=" bg-purple-300 py-20 "><strong className="bg-purple-300 text-4xl justify-center items-center px-96 underline">Typescript Project</strong>
    <div className="flex items-center justify-center min-h-screen p-5 ">
            <div className="flex flex-wrap justify-center gap-10">
   <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 ">
        <Image src={calculator}
         alt="calculator" width={400} height={300}
          className="w-full h-48 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Calculator</h3>
            <p className="text-gray-600 mb-4">This is my cli based calculator.</p>
            <a href="https://github.com/asmamasood/simple-calculator.git" className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 
            transition-colors duration-300">click me</a>   
            
        </div>
    </div> 

    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 ">
        <Image src={guessnumber}
         alt="Number guessing game" width={400} height={300}
         className="w-full h-48 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Number guessing game</h3>
            <p className="text-gray-600 mb-4">My cli based Number guessing <br />game.</p>
            <a href="https://github.com/asmamasood/cli-number-guessing.git"  className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 
            transition-colors duration-300">click me</a>
        </div>
    </div>

    <div className=" max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:scale-105">
        <Image src={Atmmechine} alt="ATM mechine"
        width={400} height={300} className="w-full h-48 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">ATM mechine </h3>
            <p className="text-gray-600 mb-4">I have done my ATM mechine.</p>
            <a href="https://github.com/asmamasood/ATM-mechine.git" className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 
            transition-colors duration-300">click me</a>
    </div>
   </div>

<div className=" max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:scale-105">
        <Image src={todo} alt="To-Do-List"
         width={400} height={300} className="w-full h-48 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">To-Do-List </h3>
            <p className="text-gray-600 mb-4">My To-Do-List is fantastic.</p>
            <a href="https://github.com/asmamasood/To-do-list" className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 
            transition-colors duration-300">click me</a>
                   
        </div>
    </div>`
    </div>
    </div>
    
   
    <div className=" flex justify-center "><strong className=" text-4xl underline">Next.Js Projects</strong>`
    <div className="flex items-center justify-center min-h-screen ">
<div className=" max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:scale-105">
        <Image src={pixel} alt="Pixel Perfect Page"
        width={400} height={300} className="w-full h-48 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Pixel Perfect Page </h3>
            <p className="text-gray-600 mb-4">My fantastic Pixel Perfect Page.</p>
            <a href="https://github.com/asmamasood/pixel-perfect-page-1.git" className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 
            transition-colors duration-300">click me</a>
    </div>
       </div> 
       </div>
       </div>


       <div className="flex justify-center "><strong className=" text-4xl underline">Html and Css Projects</strong>`
       <div className="flex items-center justify-center min-h-screen  ">
    <div className=" max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:scale-105">
    <Image src={resume} alt="My Resume"
        width={400} height={300} className="w-full h-48 object-cover"/>
             <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">My Resume </h3>
                <p className="text-gray-600 mb-4">Static Resume.</p>
                <a href="https://github.com/asmamasood/My-Resume.git" className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 
                
                transition-colors duration-300">click me</a>
        </div>
           </div> 
           </div>
       </div>
       
       </div>
  );
}
