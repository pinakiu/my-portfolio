import React, { useState } from 'react'
import { RevealOnScroll } from '../RevealOnScroll'
import emailjs from 'emailjs-com'

export const Contacts = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault() //when send form, do not refresh website
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, e.target, 
            import.meta.env.VITE_API_KEY)
            .then((result) => {
            alert('Message sent successfully!');
            setFormData({name: "", email: "", message: ""}); //clear form after submit
        }).catch(() => alert('Oh no! Something went wrong. Please try again.'));

    }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
            <div className="px-4 w-150">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#A0ECD0] to-[#479c7e]  bg-clip-text text-transparent text-center">Contact Me</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Name"
                            required 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                    </div>
                    <div className="relative">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="example@email.com"
                            required 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                    </div>
                    <div className="relative">
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Your Message..."
                            rows={5}
                            required 
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                    </div>
                    <button type="submit" className="w-full bg-[#008080] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        Send Message
                    </button>
                
                </form>
            </div>
    </RevealOnScroll>

    </section>
  )
}
