import React from 'react'
import { useState,useRef } from 'react'
import emailjs from '@emailjs/browser'
import {styles} from '../style'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { EarthCanvas } from "./canvas";
import { motion } from 'framer-motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(
    { name:"",
      email:"",
      message:""}
  )
  const [loading, setLoading] = useState(false)
  const handleChange=(e)=>{
    const {name,value} = e.target
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Haipeng(Paul) Wu",
          from_email: form.email,
          to_email: "haipwu98@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <section className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn("left","tween",0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText} >Get In Touch</p>
        <h3 className={styles.sectionHeadText} >Contact.</h3>
        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col' htmlFor="name">
              <span className='text-white font-medium mb-4'>Your name</span>
              <input type="text" name="name" onChange={handleChange} placeholder="What's your name"
              value={form.name}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>
          <label className='flex flex-col' htmlFor="email">
              <span className='text-white font-medium mb-4'>Your email</span>
              <input type="text" name="email" onChange={handleChange} placeholder="What's your email"
              value={form.email}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>
          <label className='flex flex-col' htmlFor="message">
              <span className='text-white font-medium mb-4'>Your message</span>
              <textarea name="message" onChange={handleChange} placeholder="What do you want to say"
              value={form.message}
              rows="7"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>
          <button type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div 
      className='xl:flex-1 xl:h-auto md:h-[550px] h-350[px]'
      variants={slideIn("right","tween",0.2,1)}>
          <EarthCanvas/>

      </motion.div>
    </section>
  )
}

export default  SectionWrapper(Contact,"contact")
