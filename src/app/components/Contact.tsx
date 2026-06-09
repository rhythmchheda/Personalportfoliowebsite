import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-af9cbe8a/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      const result = await response.json();
      console.log('Form submitted successfully:', result);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white mb-6 text-2xl sm:text-3xl">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <p className="text-gray-400 mb-8 text-sm sm:text-base">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded flex-shrink-0">
                  <Mail className="text-red-600" size={20} />
                </div>
                <div>
                  <p className="text-white mb-1 text-sm sm:text-base">Email</p>
                  <a
                    href="mailto:rhythmchheda@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base break-all"
                  >
                    rhythmchheda@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded flex-shrink-0">
                  <Phone className="text-red-600" size={20} />
                </div>
                <div>
                  <p className="text-white mb-1 text-sm sm:text-base">Phone</p>
                  <a
                    href="tel:+14696869993"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    +1 (469) 686-9993
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded flex-shrink-0">
                  <MapPin className="text-red-600" size={20} />
                </div>
                <div>
                  <p className="text-white mb-1 text-sm sm:text-base">Location</p>
                  <p className="text-gray-400 text-sm sm:text-base">Dallas, Texas</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/30 border border-green-600 rounded text-green-400 text-center text-sm sm:text-base">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/30 border border-red-600 rounded text-red-400 text-center text-sm sm:text-base">
                  Failed to send message. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}