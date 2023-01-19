import { useState } from "react";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contact from "../assets/undraw.png"
import axios from "axios";

const Contact = () => {
  const [data,setData]= useState({});
  const handleChange=(e)=>{
    setData((prev)=>({...prev,[e.target.name]:e.target.value}));
  }
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    console.log(isValid);
    if (!isValid) {
      e.preventDefault();
    }else{
      try {
        console.log(data);
      const res= await axios.post("https://vivacious-tweed-jacket-lamb.cyclic.app/api/Message",data);
      console.log("~ e", res);      
    } catch (error) {
      console.log(error);
    }
    }
  };

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7}}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src={contact} alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            onSubmit={onSubmit}
            action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
            method="POST"
          >
            <input
              className="w-full bg-purple font-semibold placeholder-opaque-white p-3"
              type="text"
              name="username"
              placeholder="NAME"
              {...register("username", {
                required: true,
              })}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red mt-1">
                {errors.username.type === "required" && "This field is required."}
              </p>
            )}

            <input
              className="w-full bg-purple font-semibold placeholder-opaque-white p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-purple font-semibold placeholder-opaque-white p-3 mt-5"
              name="MessageDesc"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("MessageDesc", {
                required: true,
              })}
              onChange={handleChange}
            />
            {errors.MessageDesc && (
              <p className="text-red mt-1">
                {errors.MessageDesc.type === "required" &&
                  "This field is required."}
              </p>
            )}

            <button
              className="p-5 bg-yellow font-semibold text-white mt-5 hover:bg-red hover:text-white transition duration-500 " 
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;