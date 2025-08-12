// src/components/Projects.js
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import img1 from "./pic/p1.jpeg";
import img2 from "./pic/p2.jpeg";
import img3 from "./pic/p3.jpeg";
import img4 from "./pic/p4.jpeg";
import Vid2 from "./pic/v2.mp4";

const projectsData = [
  {
    id: 1,
    title: "Rotavator",
    description:
      "Using AutoCAD, I meticulously crafted the rotavator design by first developing 2D schematics to map out each component’s dimensions and alignments. I then progressed to 3D modeling to ensure accurate fit and functionality, optimizing for durability and soil tilling efficiency.",
    images: [img1, img2, img3, img4],
    video: Vid2,
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Using AutoCAD, I meticulously crafted the rotavator design by first developing 2D schematics to map out each component’s dimensions and alignments. I then progressed to 3D modeling to ensure accurate fit and functionality, optimizing for durability and soil tilling efficiency.",
    images: [img1, img2, img3, img4],
    video: Vid2,
  },
];

function Projects() {
  const [modalContent, setModalContent] = useState(null);
  const videoRef = useRef(null);
  const closeBtnRef = useRef(null);

  const openModal = (content) => setModalContent(content);

  const closeModal = () => {
    // pause & reset video if open
    if (videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch (e) {
        // ignore if can't control (safeguard)
      }
    }
    setModalContent(null);
  };

  // Lock body scroll while modal is open and restore on close
  useEffect(() => {
    if (!modalContent) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [modalContent]);

  // Close on Escape
  useEffect(() => {
    if (!modalContent) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalContent]);

  // Focus close button when modal opens (accessibility)
  useEffect(() => {
    if (modalContent) {
      // small timeout to wait for animation / mount
      const t = setTimeout(() => closeBtnRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [modalContent]);

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-white text-center mb-12 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-slate-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Title */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {index + 1}. {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Image Carousel */}
              <div className="flex overflow-x-auto gap-3 p-4">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Project ${project.id} img ${i + 1}`}
                    className="h-40 w-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal({ type: "image", src: img })}
                  />
                ))}
              </div>

              {/* Video */}
              <div className="p-4">
                <video
                  className="w-full rounded-lg shadow-lg cursor-pointer"
                  onClick={() => openModal({ type: "video", src: project.video })}
                  muted
                  loop
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Pop-out */}
      <AnimatePresence>
        {modalContent && (
          <motion.div
            // clicking this overlay closes the modal
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              // stop clicks inside the modal from bubbling to overlay
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-900 rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full border border-slate-700"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              {/* <button
                type="button"
                ref={closeBtnRef}
                onClick={closeModal}
                className="absolute top-3 right-3 bg-slate-800/80 text-white p-2 rounded-full hover:bg-slate-700 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button> */}

              {/* Content */}
              {modalContent.type === "image" ? (
                <img src={modalContent.src} alt="Preview" className="w-full h-auto" />
              ) : (
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  className="w-full h-auto"
                >
                  <source src={modalContent.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;