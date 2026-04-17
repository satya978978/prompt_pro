function About() {
  return (
    <section className="hero-section min-h-screen flex flex-col items-center justify-center p-8 mt-8 gap-3">
      {/* Text outside the image */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Enhance Your Chatbot Prompts
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Automatically improve your conversations with intelligent suggestions.
        </p>
      </div>

      {/* Image + Video container */}
      <div className="hero-container max-w-[1200px] w-full flex justify-center">
        <div className="relative w-[1050px] aspect-video rounded-xl overflow-hidden">
          <img
            src="/aboutbg.png"
            alt="AI Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-end justify-center">
            <video
              className="w-1/2 aspect-square object-cover rounded-tl-2xl rounded-tr-2xl"
              autoPlay
              loop
              muted
              src="/inline.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
