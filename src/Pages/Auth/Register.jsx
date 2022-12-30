import React, { useState } from 'react'
import {useForm,Controller } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import PhoneInput,{isValidPhoneNumber } from 'react-phone-number-input'
import logo from "../../Images/logo.png";
const Register = () => {
  const { register, handleSubmit, formState: { errors },control } = useForm();
  const navigate = useNavigate();
  const onSubmit = async(data) =>{
    navigate('/admin');
  }

  return (
    <div style={{minHeight: '100vh'}} className='container mx-auto flex justify-center flex-col items-center'>
       <img className='mb-12' src={logo} alt="Logo" />
      <div className="card w-full lg:w-2/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-primary text-2xl font-bold text-center">REGISTER</h2>
          <div className="flex flex-col w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-primary">Name</span>
            </label>
            <input
             {...register("name", {
               required:{
                 value: true,
                 message: "Name is required"
               },
               minLength:{
                 value:6,
                 message:"Must be Minimum 6 charecter long"
               }
             })}
            type="text"  className="input input-bordered bg-accent w-full" />
            <label className="label">
              {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.name.message}</span>}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span  htmlFor="phone-input" className="label-text text-primary">Phone Number</span>
            </label>
          
            <Controller
          name="phone-input"
          control={control}
          rules={{
            validate: (value) => value&&isValidPhoneNumber(value)
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              value={value}
              onChange={onChange}
              defaultCountry="BD"
              id="phone-input"
              className=''
            />
          )}
        />
       
        {errors["phone-input"] && (
          <p  className="label-text-alt text-red-500 ">Invalid Phone</p>
        )}
          
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-primary">Passowrd</span>
            </label>
            <input
             {...register("password", {
               required:{
                 value: true,
                 message: "password is required"
               },
               minLength:{
                 value:6,
                 message:"Must be Minimum 6 charecter long"
               }
             })}
            type="password"  className="input input-bordered bg-accent w-full" />
            <label className="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
            </label>
          </div>

            <input className="btn btn-block hover:bg-primary hover:delay-75 bg-secondary rounded-lg text-accent border-0" type="submit" value="REGISTER" />
          </form>
          <small className='font-bold mt-5 p-0 m-0'>Already Have an Account? <Link to='/' className='text-primary pointer-events-auto text-decoration-none ps-2'>Login</Link>  </small>
      
          </div>
        </div>
      </div>


    </div>
  )
}

export default Register