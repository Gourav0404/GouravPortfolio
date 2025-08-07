import profileImage from "/portfolioImage.png.jpg";

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <img src={profileImage} alt="Profile" className="w-60 h-60 rounded-full mb-4 shadow-lg object-cover" />
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Hi, I'm Gourav Chouhan
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2">
        Frontend Developer | React.js | JavaScript  |Tailwind CSS
      </p>
      <a href="#contact" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Contact Me
      </a>
    </section>
  );
};

export default Home;