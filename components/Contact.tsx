import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';
import { ContactFormData, FormStatus } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    website: '',
    revenue: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus(FormStatus.SUCCESS);
        setFormData({ name: '', email: '', website: '', revenue: '', budget: '', message: '' });
        setTimeout(() => setStatus(FormStatus.IDLE), 4000);
      } else {
        setStatus(FormStatus.ERROR);
        setTimeout(() => setStatus(FormStatus.IDLE), 4000);
      }
    } catch {
      setStatus(FormStatus.ERROR);
      setTimeout(() => setStatus(FormStatus.IDLE), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-bold-light/30 border-t border-gray-100 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bold-acid/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bold-purple/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-black mb-8 text-bold-black leading-[0.9] tracking-tighter">
                LET'S <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-bold-acid to-bold-purple">SCALE</span>
              </h2>
              <p className="text-bold-gray text-lg mb-10 font-medium leading-relaxed">
                Ready to dominate your niche? Fill out the application form. We only work with brands we are confident we can scale.
              </p>
              
              <div className="space-y-6">
                <div className="group p-8 border border-gray-100 bg-bold-light rounded-[2rem] hover:bg-bold-black hover:text-white transition-colors duration-500">
                  <h4 className="font-bold text-xs mb-4 uppercase tracking-widest text-gray-400 group-hover:text-gray-500">EMAIL US</h4>
                  <a href="mailto:growth@boldframe.com" className="text-xl md:text-2xl font-display font-bold flex items-center justify-between">
                    growth@boldframe.com
                    <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-bold-black/5 border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-bold-light border-none px-6 py-4 text-bold-black focus:ring-2 focus:ring-bold-black outline-none transition-all rounded-xl font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-bold-light border-none px-6 py-4 text-bold-black focus:ring-2 focus:ring-bold-black outline-none transition-all rounded-xl font-medium"
                    placeholder="john@brand.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Brand Website</label>
                  <input
                    type="url"
                    name="website"
                    required
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-bold-light border-none px-6 py-4 text-bold-black focus:ring-2 focus:ring-bold-black outline-none transition-all rounded-xl font-medium"
                    placeholder="https://"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Monthly Revenue</label>
                  <div className="relative">
                    <select
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full bg-bold-light border-none px-6 py-4 text-bold-black focus:ring-2 focus:ring-bold-black outline-none transition-all rounded-xl font-medium appearance-none cursor-pointer"
                    >
                      <option value="">Select Range</option>
                      <option value="0-100k">Rs. 0 - 100k</option>
                      <option value="100k-1M">Rs. 100k - 1M</option>
                      <option value="1M-5M">Rs. 1M - 5M</option>
                      <option value="5M+">Rs. 5M+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Monthly Ad Budget</label>
                <div className="relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-bold-light border-none px-6 py-4 text-bold-black focus:ring-2 focus:ring-bold-black outline-none transition-all rounded-xl font-medium appearance-none cursor-pointer"
                  >
                    <option value="">Select Budget</option>
                    <option value="<50k">Under Rs. 50k</option>
                    <option value="50k-200k">Rs. 50k - 200k</option>
                    <option value="200k-1M">Rs. 200k - 1M</option>
                    <option value="1M+">Rs. 1M+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-bold-light border-none px-6 py-4 text-bold-black focus:ring-2 focus:ring-bold-black outline-none transition-all rounded-xl font-medium resize-none"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === FormStatus.SUBMITTING}
                className="w-full py-5 bg-bold-black text-white font-display font-bold uppercase tracking-widest hover:bg-bold-acid hover:text-bold-black transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 text-sm"
              >
                {status === FormStatus.SUBMITTING ? (
                  'Sending...'
                ) : status === FormStatus.SUCCESS ? (
                  <>Sent <CheckCircle className="w-5 h-5" /></>
                ) : (
                  <>Submit Application <Send className="w-4 h-4" /></>
                )}
              </button>
              
              {status === FormStatus.SUCCESS && (
                <p className="text-green-600 text-sm text-center mt-2 font-bold">Received. We will be in touch shortly.</p>
              )}
              {status === FormStatus.ERROR && (
                <p className="text-red-500 text-sm text-center mt-2 font-bold">Something went wrong. Please email us directly at growth@boldframe.com</p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;