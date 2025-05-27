import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SECTION_HEADERS } from "../constants";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);

          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setStatus("❌ Failed to send message. Please try again later.");
          console.error(error.text);
          setLoading(false);

          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <section id='contact' className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4 py-16">
      <div
        className="w-full max-w-2xl bg-gray-800 rounded-2xl p-8 shadow-lg border border-cyan-500 
        hover:shadow-cyan-500/30 hover:shadow-2xl transition-transform transform duration-300"
      >
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-6">
          {SECTION_HEADERS.CONTACT}
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Got a question or want to work together? Drop a message!
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 
            text-white font-semibold rounded-lg shadow-lg transition duration-300
            ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:from-cyan-600 hover:to-blue-600 hover:scale-105"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                <span>Sending...</span>
              </div>
            ) : (
              "🚀 Send Message"
            )}
          </button>
        </form>
        {status && (
          <p className="mt-6 text-center text-sm text-green-400 font-medium animate-pulse">
            {status}
          </p>
        )}
      </div>
      
    </section>
  );
};

export default Contact;
