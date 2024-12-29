import Image from "next/image";
import profilePic from "./public/profile-pic.jpg";

export default function Home() {
  return (
    <div className="relative bg-purple-950 h-screen flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1358013032/photo/web-development-concept.jpg?s=612x612&w=0&k=20&c=d0F_7Rs2bysfEL9zr9JVN1TLzVOlEycNkz-vd19OANA=')",
        }}
      ></div>

      {/* Overlay for text and profile picture */}
      <div className="relative z-10 flex flex-col items-center bg-blue-400 bg-opacity-70 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg text-center max-w-xs sm:max-w-sm md:max-w-md mx-4">
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mb-4 sm:mb-6 md:mb-8"
        />
        
        <strong className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl font-serif">
          WELCOME TO MY PORTFOLIO...
        </strong>
      </div>
    </div>
  );
}
