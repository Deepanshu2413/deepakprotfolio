// src/components/About.js
import React from 'react';

function About() {
  return (
    <section id="about" className="py-10 bg-yellow-50 text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
        <div className="container mx-auto p-6 space-y-8">

    {/* About Section */}
    <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mt-4">
            “I am Deepak Kumar, an AutoCAD and SolidWorks designer with a solid foundation in mechanical engineering and hands-on experience in CNC machine programming, 3D modeling, and production management. Over the past several years, I’ve honed my technical and managerial skills, working with top-tier companies like Samiksha Steels and Sajjan Precision Casting to bring precision, efficiency, and innovation to every project. My passion for industrial design and my attention to detail drive me to create impactful solutions that enhance productivity and quality. I am now excited to leverage my skills and experience to make a meaningful contribution to forward-thinking industries, continuously improving processes and outcomes for greater success.”
        </p>
    </div>

    {/* Core Expertise Section */}
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Core Expertise:</h3>
        <p className="text-gray-600 space-y-2 text-left">
            • <span className="font-semibold  ">SolidWorks & AutoCAD Design:</span> Certified and experienced in 3D modeling, technical drawing, and component design for industrial applications.
            <br />
            • <span className="font-semibold">CNC Programming & Production Management:</span> Skilled in programming CNC plasma cutting machines and managing production schedules for high-efficiency workflows.
            <br />
            • <span className="font-semibold">Project Management & Team Leadership:</span> Experienced in handling project timelines, optimizing resource allocation, and leading teams to meet production goals.
        </p>
    </div>
    
</div>
      </div>
    </section>
  );
}

export default About;