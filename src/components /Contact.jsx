// src/components/Contact.js
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Apple } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-slate-900 to-black text-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-white mb-6 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-lg text-slate-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Feel free to reach out via LinkedIn, email, or phone. I’d be happy to
          connect!
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {/* Email */}
          <motion.div
            className="bg-slate-800/80 border border-slate-700 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Mail className="text-yellow-400 w-10 h-10 mb-3" />
            <p className="font-semibold text-white">Email</p>
            <a
              href="mailto:mdcomputer_dk@hotmail.com"
              className="text-yellow-400 hover:underline"
            >
              mdcomputer_dk@hotmail.com
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="bg-slate-800/80 border border-slate-700 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Linkedin className="text-yellow-400 w-10 h-10 mb-3" />
            <p className="font-semibold text-white">LinkedIn</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              Visit Profile
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="bg-slate-800/80 border border-slate-700 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Phone className="text-yellow-400 w-10 h-10 mb-3" />
            <p className="font-semibold text-white">Mobile</p>
            <a
              href="tel:+919464987827"
              className="text-yellow-400 hover:underline"
            >
              +91-9464987827
            </a>
          </motion.div>

          {/* Address */}
          <motion.div
            className="bg-slate-800/80 border border-slate-700 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MapPin className="text-yellow-400 w-10 h-10 mb-3" />
            <p className="font-semibold text-white">Address</p>
            <p className="text-slate-300">
              Ludhiana, Punjab <br /> (141017)
            </p>
          </motion.div>
        </div>

        {/* Footer Line */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-2 text-slate-300 text-sm 
                    backdrop-blur-lg bg-white/5 border border-white/10 
                    rounded-2xl shadow-lg shadow-black/40 px-6 py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-center text-md leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
            Designed & Maintain by - {" "}
            
            <a 
              href="https://deepanshu2413.github.io/Deepanshu_protfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 text-md hover:underline hover:text-yellow-200 transition-colors"
            >
              Deepanshu Kumar
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;