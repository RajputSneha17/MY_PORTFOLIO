import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("Failed to send message ❌");
          console.log(error);
        },
      );
  };

  return (
    <section
      id="Contact"
      className="min-h-screen px-10 md:px-20 py-24
      bg-white dark:bg-[#071c24]
      text-gray-800 dark:text-gray-300 transition-all duration-500"
    >
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
            I'm currently open to new opportunities. Whether you have a project
            idea, internship opportunity, or just want to connect, feel free to
            reach out.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gray-200 dark:bg-[#0c2b35] text-teal-500">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p className="font-medium">sneharajput63154@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gray-200 dark:bg-[#0c2b35] text-teal-500">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </p>
                <p className="font-medium">Rajasthan, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gray-200 dark:bg-[#0c2b35] text-teal-500">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone
                </p>
                <p className="font-medium">+91 9460992991</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8 rounded-2xl bg-gray-100 dark:bg-[#0c2b35] border border-gray-200 dark:border-gray-700">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your name"
                  className="w-full mt-2 px-4 py-2 rounded-lg
          bg-white dark:bg-[#071c24]
          border border-gray-300 dark:border-gray-600
          placeholder-gray-400 dark:placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="your@email.com"
                  className="w-full mt-2 px-4 py-2 rounded-lg
          bg-white dark:bg-[#071c24]
          border border-gray-300 dark:border-gray-600
          placeholder-gray-400 dark:placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 dark:text-gray-400">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full mt-2 px-4 py-2 rounded-lg
        bg-white dark:bg-[#071c24]
        border border-gray-300 dark:border-gray-600
        placeholder-gray-400 dark:placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 dark:text-gray-400">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                required
                placeholder="Your message..."
                className="w-full mt-2 px-4 py-2 rounded-lg
        bg-white dark:bg-[#071c24]
        border border-gray-300 dark:border-gray-600
        placeholder-gray-400 dark:placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2
      bg-teal-500 hover:bg-teal-600
      text-white font-medium py-3 rounded-lg
      transition duration-300 disabled:opacity-60"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm mt-2 text-center text-teal-500">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
