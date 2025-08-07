import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      image: "/reactHook.jpg", // must begin with '/' if in public/
      title: "React Hooks Crash Course",
    },
    {
      image: "/jsFundamental.jpg", // must begin with '/' if in public/
      title: "javascript Fundamentals",
    },
    {
      image: "/NodeJs.jpg", // must begin with '/' if in public/
      title: "Node.js Bootcamp",
    },
    {
      image: "/Digitial101.jpg", // must begin with '/' if in public/
      title: "Digital 101 Journey",
    }
  ];

  return (
    <section id="certificates" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-lg shadow-md overflow-hidden object-fill hover:shadow-lg transition duration-300"
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-64 object-fill"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{certificate.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
