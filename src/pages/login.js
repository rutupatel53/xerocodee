"use client";
import React, { useState } from "react";
import { loginFormFields } from "@/data";
import Link from "next/link";
import { account } from "../lib/appwrite";
import "../app/globals.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <div className="flex justify-center items-center px-4 md:px-16 w-full">
        <div className="bg-white  md:px-12 mt-5 mb-10 border border-black shadow-lg w-full max-w-4xl md:max-w-none md:w-[1114px]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2 mt-10">
              <div className="text-center md:text-center">
                <h2 className="text-3xl font-bold">Welcome Arya Soni!</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Login to your Account
                </p>
                <div className="mt-4 mb-6  border-t border-gray-300 w-full w-[300px] mx-auto " />
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {loginFormFields.map((field) => (
                  <div key={field.id}>
                    <input
                      type={field.type}
                      name={field.id}
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
                      required
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full py-4 mt-6 text-base font-bold text-white bg-blue-600 rounded-md"
                >
                  LOGIN
                </button>
              </form>
              <div className="text-center mt-7 font-extrabold text-gray-500">
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
              <p className="text-center  mt-2 mb-8 text-gray-500">
                Don’t have an Account?{" "}
                <Link href="/register" className="text-blue-600 font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className=" flex  gap-0 items-start mt-5 ">
              <div className="shrink-0 self-start  w-px border border-solid bg-slate-400 bg-opacity-50 border-slate-400 border-opacity-50 h-[603px]" />

              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d5a6c86d1e993810e54d16caec34ce12ffa04955dc46bc02ead4d0428d8f17a?"
                className="grow shrink-0 self-end ml-[50px] aspect-[4] basis-0 fill-blue-600  w-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
