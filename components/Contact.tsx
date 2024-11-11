"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 text-white max-w-[1200px] mx-auto px-4 overflow-x-clip"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12 w-full">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-300">touch</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="tel:+63158777385"
                className="text-2xl font-semibold hover:text-purple-300 transition duration-300 flex items-center gap-2"
              >
                +0915 8777 385
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto:hydxenonmain@gmail.com"
                className="text-2xl lg:text-2xl font-semibold hover:text-purple-300 transition duration-300 flex items-center"
              >
                hydxenonmain@gmail.com
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Location</p>
              <address className="text-xl not-italic leading-relaxed">
                Science City of Muñoz, Nueva Ecija, Philippines
              </address>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1141.8699898977618!2d120.90591009421591!3d15.709954897506856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390d605bde3284f%3A0x6d2cd1332c82fc6c!2sMunoz!5e0!3m2!1sen!2sph!4v1731321170433!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
