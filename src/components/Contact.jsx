import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kashi17",     // Your Service ID
      "template_qda64we",    // Your Template ID
      form.current,
      "sgxyecVRS8aSh3_ux"   // Your Public Key
    )
    .then(
      (result) => {
        alert("Message sent! Check your Gmail.");
        e.target.reset();
      },
      (error) => {
        alert("Oops! Something went wrong.");
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-slate-300">Full Name</label>
              <input
                type="text"
                name="name"  // <-- Must match template placeholder {{name}}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email Address</label>
              <input
                type="email"
                name="user_email" // <-- Optional, match placeholder {{user_email}} if used
                className="w-full mt-1 px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm text-slate-300">Message</label>
            <textarea
              name="message" // <-- Must match template placeholder {{message}}
              rows="5"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
              required
            ></textarea>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg shadow-md border border-indigo-500/50 transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
