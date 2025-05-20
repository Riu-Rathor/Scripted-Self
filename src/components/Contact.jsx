import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    console.log("Service ID:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    console.log("Template ID:",process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("Public Key:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="max-w-lg p-6 bg-gray-800 text-white rounded shadow-md mb-16">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block mb-1">Your Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block mb-1">Your Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded transition"
        >
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-green-400">{status}</p>}
    </div>
  );
};

export default Contact;
