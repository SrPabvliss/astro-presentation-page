import React from "react";
import { motion } from "@/components/motion";
import { Send } from "lucide-react";
import { useContactForm } from "./useContactForm";
import { toast } from "sonner";

const ContactForm = () => {
  const { formData, handleChange, handleSubmit, isSending, sendStatus } = useContactForm();

  
  React.useEffect(() => {
    if (sendStatus === 'success') {
      toast.success('¡Mensaje enviado con éxito!');
    } else if (sendStatus === 'error') {
      toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    }
  }, [sendStatus]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-800/50 rounded-xl p-6 border border-white/5"
    >
      <h2 className="text-2xl font-semibold mb-6">Send me a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors resize-none"
            required
          />
        </div>
        <motion.button
          type="submit"
          disabled={isSending}
          className={`w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-medium hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-300 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
          whileHover={{ scale: isSending ? 1 : 1.02 }}
          whileTap={{ scale: isSending ? 1 : 0.98 }}
        >
          {isSending ? (
            <>Enviando...</>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm; 