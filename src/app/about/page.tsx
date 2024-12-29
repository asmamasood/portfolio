
export default function about() {
    return (
      <div className="min-h-screen bg-purple-300">
        <div className="box-border h-auto p-5 md:p-20">
          <div className="bg-pink-800 p-8 md:p-24">
            <p className="bg-pink-200 p-5 md:p-8 outline-dotted rounded-2xl text-sm md:text-base">
              Hey, I am <strong>ASMA MASOOD</strong>, an aspiring web developer with a passion for creating dynamic and user-friendly websites.
              I am diving deep into coding, design, and all things web to bring ideas to life on the screen. I’m constantly learning and experimenting
              with new tools and technologies to sharpen my skills and stay ahead in the fast-evolving world of web development. This site is my space to
              share my journey, projects, and insights as I work toward becoming a skilled web developer.
            </p>
          </div>
  
          <strong className="text-xl md:text-4xl underline block text-center mt-8">Skills:</strong>
  
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <div className="text-center w-24 md:w-32 p-2 md:p-4 box-border rounded-xl hover:bg-pink-400 outline bg-pink-200">
              HTML
            </div>
            <div className="text-center w-24 md:w-32 p-2 md:p-4 box-border rounded-xl hover:bg-pink-400 outline bg-pink-200">
              CSS
            </div>
            <div className="text-center w-24 md:w-32 p-2 md:p-4 box-border rounded-xl hover:bg-pink-400 outline bg-pink-200">
              Next.js
            </div>
            <div className="text-center w-24 md:w-32 p-2 md:p-4 box-border rounded-xl hover:bg-pink-400 outline bg-pink-200">
              Tailwind CSS
            </div>
            <div className="text-center w-24 md:w-32 p-2 md:p-4 box-border rounded-xl hover:bg-pink-400 outline bg-pink-200">
              TypeScript
            </div>
            <div className="text-center w-24 md:w-32 p-2 md:p-4 box-border rounded-xl hover:bg-pink-400 outline bg-pink-200">
              JavaScript
            </div>
          </div>
        </div>
      </div>
    );
  }
  