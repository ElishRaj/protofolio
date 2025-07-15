import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setError('');
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1500); // Simulate API delay
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 md:p-10 shadow-xl"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold text-center text-cyan-400 mb-6"
        >
          Get In Touch
        </motion.h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-green-400 text-center text-lg font-medium"
          >
            🎉 Thank you! I’ll reach out to you shortly.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-center text-sm"
              >
                {error}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-cyan-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                aria-label="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-cyan-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 min-h-[120px] resize-none bg-white/10 text-white placeholder-gray-400 border border-cyan-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.div>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default ContactForm;
