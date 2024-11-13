// src/components/Projects.js
import React from 'react';
import img1 from './pic/p1.jpeg'
import img2 from './pic/p2.jpeg'
import img3 from './pic/p3.jpeg'
import img4 from './pic/p4.jpeg'

import Vid2 from './pic/v2.mp4'





function Projects() {
  return (

    <>
    <section id="projects" className="py-10">
  <div className="container mx-auto text-left">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">Projects</h2>
    <div className="flex flex-wrap justify-center mt-6">
      
      {/* Project Card */}
      
      <div className=" sm:w-full md:w-full lg:w-full p-6">
        <div className="bg-yellow-50 rounded-lg*2 shadow-lg p-4   ">
          
          {/* Image Placeholder */}
          <h3 className="text-xl font-bold">1. Rotavator</h3>
          <p className="mt-2 text-gray-600">
          Using AutoCAD, I meticulously crafted the rotavator design by first developing 2D schematics to map out each component’s dimensions and alignments. I then progressed to 3D modeling to ensure accurate fit and functionality, optimizing for durability and soil tilling efficiency. Through detailed layer management and precise measurement tools, I achieved a high level of accuracy, creating a reliable blueprint for manufacturing
          </p>
          <br />

          <div class="carousel overflow-hidden w-full">
            <div class="carousel-track flex space-x-4 animate-scroll">

                <img src={img1} alt="Image 1" className="w-50 h-auto" />
                <img src={img2} alt="Image 1" className="w-50 h-auto" />
                <img src={img3} alt="Image 1" className="w-50 h-auto" />
                <img src={img4} alt="Image 1" className="w-50 h-auto" />
   
            </div>
         
          
          {/* Video Placeholder */}

            

          <div className="relative flex justify-center h-screen rounded-lg shadow-lg" > {/* Aspect ratio 16:9 */}
          
          <video width="w-full rounded-lg shadow-lg " controls autoPlay loop muted >
            <source src={Vid2} type="video/mp4" /> 
            Your browser does not support the video tag.
        </video>
          </div>
          
          {/* Project Title and Description */}
          
        
        </div>
      </div>
      
    </div>
    </div>
  </div>
</section>

{/* project 2 */}

<section id="projects" className="py-10">
  <div className="container mx-auto text-center">
    
    <div className="flex flex-wrap justify-center mt-6">
      
      {/* Project Card */}
      
      <div className="w-full sm:w-1/2 md:w-full lg:w-full p-8">
        <div className="bg-yellow-50 rounded-lg shadow-lg p-4">
          
          {/* Image Placeholder */}
          <h3 className="text-xl font-bold">2. Project</h3>
          <p className="mt-2 text-gray-600">
          Using AutoCAD, I meticulously crafted the rotavator design by first developing 2D schematics to map out each component’s dimensions and alignments then i progressed to 3D modeling to ensure accurate fit and functionality, optimizing for durability and soil tilling efficiency. Through detailed layer management and precise measurement tools, I achieved a high level of accuracy, creating a reliable blueprint for manufacturing
          </p>
          <br />

          <div class="carousel overflow-hidden w-full">
            <div class="carousel-track flex space-x-4 animate-scroll">

                <img src={img1} alt="Image 1" className="w-50 h-auto" />
                <img src={img2} alt="Image 1" className="w-50 h-auto" />
                <img src={img3} alt="Image 1" className="w-50 h-auto" />
                <img src={img4} alt="Image 1" className="w-50 h-auto" />
   
            </div>
         
          
          {/* Video Placeholder */}
          
          <div className="relative flex justify-center h-screen rounded-lg shadow-lg" > {/* Aspect ratio 16:9 */}
          
          <video width="w-full rounded-lg shadow-lg " controls autoPlay loop muted >
            <source src={Vid2} type="video/mp4" /> 
            Your browser does not support the video tag.
        </video>
          </div>
          
          {/* Project Title and Description */}
          
        
        </div>
      </div>
      
    </div>
    </div>
  </div>
</section>

{/* project 3 */}

{/* project 4 */}

</>
  );
}

export default Projects;