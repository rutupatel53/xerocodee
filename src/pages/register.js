"use client";
import React, { useState } from "react";
import { RegistrationformFields } from "@/data";
import "../app/globals.css";
import Link from "next/link";
import { account } from "../lib/appwrite";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Registration successful:", data);
        // Redirect to login page after successful registration
        // Replace '/login' with your actual login page route
        window.location.href = "/login";
      } else {
        console.error("Registration failed:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <div className="flex justify-center items-center px-4 md:px-4 w-full">
        <div className="bg-white pt-5  md:px-12 mt-5 mb-10 border border-black shadow-lg w-full max-w-4xl md:max-w-none md:w-[1114px]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <div className="text-center ">
                <h2 className="text-3xl text-center  font-bold">Hello!</h2>
                <p className="mt-2 text-sm text-center text-gray-500">
                  Create your Account
                </p>
                <div className="mt-4 mb-6 border-t  border-gray-300  w-[300px] mx-auto " />
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {RegistrationformFields.map(
                  ({ id, type, name, placeholder }) => (
                    <div key={id}>
                      <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        value={formData[name]}
                        onChange={handleChange}
                        className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
                        required
                      />
                    </div>
                  )
                )}

                <button
                  type="submit"
                  className="w-full py-4 mt-6 text-base font-bold text-white bg-blue-600 rounded-md"
                >
                  SIGN UP
                </button>
              </form>
              <div className="text-center  mt-7 font-extrabold text-gray-500">
                OR
              </div>
              <div className="flex flex-col md:flex-row gap-5 mt-7">
                <button
                  type="button"
                  onClick={() => {
                    account.createOAuth2Session(
                      "google",
                      "http://localhost:3000/welcome",
                      "http://localhost:3000"
                    );
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-full md:w-1/2"
                >
                  <span className="flex-grow text-center">
                    Sign Up With Google
                  </span>
                  <img
                    loading="lazy"
                    src="google-logo-url"
                    alt="Google"
                    className="w-6 h-6"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    account.createOAuth2Session(
                      "github",
                      "http://localhost:3000/welcome",
                      "http://localhost:3000"
                    );
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-full md:w-1/2"
                >
                  <span className="flex-grow text-center">
                    Sign Up With GitHub
                  </span>
                  <img
                    loading="lazy"
                    src="github-logo-url"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </button>
              </div>
              <p className="text-center  mt-2 text-gray-500">
                Already have an Account?{" "}
                <Link href="/login" className="text-blue-600 font-medium">
                  Login
                </Link>
              </p>
            </div>
            <div className="flex grow gap-0 items-start  mt-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="shrink-0 self-start  w-px border border-solid bg-slate-400 bg-opacity-50 border-slate-400 border-opacity-50 h-[603px]" />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d5a6c86d1e993810e54d16caec34ce12ffa04955dc46bc02ead4d0428d8f17a?"
                className="grow shrink-0 self-end ml-[50px] aspect-[4] basis-0 fill-blue-600 mt-[563px] w-fit max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
