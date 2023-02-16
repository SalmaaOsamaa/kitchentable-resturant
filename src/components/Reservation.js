import React, { useState } from "react";
//importing data
import { reservationData } from "../data";
//import react-hook-form
import { useForm, Controller } from "react-hook-form";
// import yup
import * as yup from "yup";
// import resolver
import { yupResolver } from "@hookform/resolvers/yup";
//import datepicker
import DatePicker from "react-datepicker";
//import datepicker css
import "react-datepicker/dist/react-datepicker.css";
//import timepicker
import {TextField} from '@mui/material'
//import timepicker css
import "../timepicker.css";
//import icons
import { FaUsers, FaCalendar, FaClock, FaUser, FaMobile } from "react-icons/fa";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn, staggerContainer } from "../variants";
//import modal
import Modal from "./Modal";
const Reservation = () => {
  //destructure reservation data
  const { title, subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  // const [time,setTime] = useState("11:00")
  // const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [guest, setGuest] = useState(0);
  const [modalOn, setModalOn] = useState(false);
  const [close, setClose] = useState(false);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const schema = yup.object().shape({
    phone: yup.string().matches(phoneRegExp,"Phone number is not valid").required("Your Phone number is required !"),
    name: yup.string().required("name is required"),
    guest:  yup.number(null, "Must be a number type").typeError("Please enter a number of guests.") // Validates for numerical value
    .positive("This number is invalid").max(8, "for more than 8 guests please contact us") // Validates against negative values
    .required("Please enter a number of guests. The field cannot be left blank."),// Sets it as a compulsory field
    date: yup.date().required("date of reservation is required"),
    time: yup.string().required(""),
    eatingoccasion: yup.string().oneOf(["lunch","dinner"]).typeError("please choose an eating occasion").required("please choose an eating occasion")

  });
  const { register, handleSubmit, control, formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  });
  console.log(errors);
  const onSubmit = (data) => {
    
    setModalOn(true);
    setPhoneNumber("")
   
  };

  return (
    <section className="relative top-96 mt-52 z-30 pt-10 lg:py-[10px]">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          className="text-center"
        >
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1.6)}
            className="h2 capitalize "
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1.6)}
            className="mb-8 text-zinc-600"
          >
            {subtitle}
          </motion.p>
          {/*model */}
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className="flex justify-center mb-10"
          >
            <img src={modelImg} alt="" />
          </motion.div>
        </motion.div>
        {/* form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          variants={fadeIn("up", "tween", 0.7, 1.6)}
          initial="hidden"
          whileInView={"show"}
        >
          <div
            className="flex flex-col 
     lg:flex-row gap-y-4 gap-x-3
      flex-wrap items-center 
      justify-center mb-8 "
          >
            {/* person number */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaMobile />
                <div>Enter you phone number</div>
              </div>
              <input
                className="input"
                type="phone"
                name="phone"
                {...register("phone")}
                id=""
                placeholder="phone number"
                
              
              />
              <p className="mx-auto text-red-600 ">{errors.phone?.message}</p>
            </div>
            {/* reservation name */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaUser />
                <div>Please enter your name</div>
              </div>
              <input
                {...register("name")}
                className="input"
                type="text"
                id=""
                placeholder="Name"
                name="name"
              />
              <p className="mx-auto text-red-600 ">{errors.name?.message}</p>
            </div>
            {/* number of guests */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaUsers />
                <div>Enter your number of Guests</div>
              </div>
              <input
                {...register("guest")}
                className="input"
                type="number"
               
               
               name="guest"
                placeholder="number of guests"
                
              />
              <p className="mx-auto text-red-600 ">{errors.guest?.message}</p>
            </div>
            {/* datepicker */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaCalendar />
                <div>Choose Reservation Date</div>
              </div>
              <Controller
                control={control}
                name="date"
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="input"
                    minDate={new Date()}
                    placeholderText="Select date"
                    onChange={(date) => {
                      onChange(date);
                      setStartDate(date);
                    }}
                    selected={value ? new Date(value) : ""}
                  />
                )}
              />
              <p className="mx-auto text-red-600 ">{errors.date?.message}</p>
            </div>
            {/* timepicker */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaClock />
                <div>Choose Reservation time</div>
              </div>
              <TextField
              name="time"
              variant="standard"
              className="input "
          label="Choose Time"
          defaultValue=""
        type="time"
        {...register("time")}
        InputLabelProps={{
          shrink: true,
          
        }}
        // 5 minutes
        inputProps={{
          step: 300,
          className:"input",
        }}
      />
      <p className="mx-auto text-red-600 ">{errors.time?.message}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-[10px] font-semibold text-dark text-base mb-3" {...register("eatingoccasion")}>
  
         
          <select name="eatingoccasion" {...register("eatingoccasion")} id="" className="input" placeholder="eating occasion" >
          <option value="" disabled selected hidden>choose eating occation</option>
            <option value="lunch">
              lunch
            </option>
            <option value="dinner">
              
              dinner
            </option>
          </select>
          
      
          </div>
          <p className="mx-auto text-red-600 text-center mb-3">{errors.eatingoccasion?.message}</p>
          
          {/* button */}
          <div className="max-w-[316px] mx-auto flex justify-center pt-10">
            <button
              type="submit"
             
              className="btn capitalize w-full lg:w-auto text-black hover:bg-zinc-600 hover:text-white "
            >
              {btnText}
            </button>
          </div>
        </motion.form>
      </div>
      {modalOn && (
        <Modal
          setModalOn={setModalOn}
          setClose={setClose}
          
        />
      )}
    </section>
  );
};

export default Reservation;
