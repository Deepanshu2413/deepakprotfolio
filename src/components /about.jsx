// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-slate-900 to-black text-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-white mb-10 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="space-y-10 max-w-4xl mx-auto">
          {/* About Section */}
          <motion.div
            className="bg-slate-800/80 border border-slate-700 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-slate-300 leading-relaxed text-lg">
              “I am Deepak Kumar, an AutoCAD and SolidWorks designer with a solid
              foundation in mechanical engineering and hands-on experience in
              CNC machine programming, 3D modeling, and production management.
              Over the past several years, I’ve honed my technical and managerial
              skills, working with top-tier companies like Samiksha Steels and
              Sajjan Precision Casting to bring precision, efficiency, and
              innovation to every project. My passion for industrial design and
              my attention to detail drive me to create impactful solutions that
              enhance productivity and quality. I am now excited to leverage my
              skills and experience to make a meaningful contribution to
              forward-thinking industries, continuously improving processes and
              outcomes for greater success.”
            </p>
          </motion.div>

          {/* Core Expertise Section */}
          <motion.div
            className="bg-slate-800/80 border border-slate-700 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Core Expertise:
            </h3>
            <div className="text-slate-300 text-left space-y-4 text-lg leading-relaxed">
              <p>
                • <span className="font-semibold text-white">SolidWorks & AutoCAD Design:</span>{" "}
                Certified and experienced in 3D modeling, technical drawing, and
                component design for industrial applications.
              </p>
              <p>
                •{" "}
                <span className="font-semibold text-white">
                  CNC Programming & Production Management:
                </span>{" "}
                Skilled in programming CNC plasma cutting machines and managing
                production schedules for high-efficiency workflows.
              </p>
              <p>
                •{" "}
                <span className="font-semibold text-white">
                  Project Management & Team Leadership:
                </span>{" "}
                Experienced in handling project timelines, optimizing resource
                allocation, and leading teams to meet production goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;