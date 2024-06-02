"use client";
import React, { useEffect, useState } from "react";
import "./../app/globals.css";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/router";

export default function Welcome() {
  const [user, setUser] = useState();
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");
  const router = useRouter();

  const getAccount = async () => {
    const accountData = await account.get();
    setUser(accountData);
  };

  const handleSubmit = (path) => {
    router.push(path);
  };

  const handleClick = (type) => {
    setFormType(type);
    setShowForm(true);
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center bg-white">
        <div className="flex flex-col px-20 pt-12 w-full max-md:px-5 max-md:max-w-full">
          <div className="justify-center self-end px-12 py-4 text-sm font-bold leading-5 text-center capitalize rounded-md border border-solid bg-white bg-opacity-0 border-neutral-400 text-black text-opacity-50 max-md:px-5">
            Log Out
          </div>
          <div className="flex flex-col items-center self-center px-20 mb-28 w-full bg-white max-w-[1508px] rounded-[35px] ">
            {user && (
              <div className="mt-14 text-3xl font-bold leading-10 text-center text-black capitalize max-md:mt-10">
                Welcome {user.name}!
              </div>
            )}
            <div className="inline-grid grid-cols-3 gap-4">
              <button
                onClick={() => handleSubmit("/hosting")}
                className="items-center self-start px-0 pt-6 pb-4 mt-32 w-80 text-xl font-semibold leading-8 text-center capitalize whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-slate-950 w-[376px] max-md:px-5 max-md:mt-10 max-md:ml-2.5 hover:bg-blue-500 hover:text-white"
              >
                Developer
              </button>
              <button
                onClick={() => handleClick("organisation")}
                className="items-center self-start px-0 pt-6 pb-4 mt-32 w-80 text-xl font-semibold leading-8 text-center capitalize whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-slate-950 w-[376px] max-md:px-5 max-md:mt-10 max-md:ml-2.5 hover:bg-blue-500 hover:text-white"
              >
                Organisation
              </button>
              <button
                onClick={() => handleClick("company")}
                className="z-10 items-center self-end px-16 pt-6 pb-4 mt-0 mr-16 w-80 text-xl font-semibold leading-8 text-center capitalize whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-slate-950 w-[376px] max-md:px-5 max-md:mr-2.5 hover:bg-blue-500 hover:text-white"
              >
                Company
              </button>
            </div>
            {showForm && (
              <div className="px-5 py-20 mt-14 max-w-full bg-white rounded-md border border-white border-solid w-[660px] max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
                    <div className="justify-center items-start px-7 py-4 w-full text-sm font-semibold leading-5 capitalize bg-white rounded-md border border-solid border-stone-300 text-slate-950 text-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                      {formType === "organisation"
                        ? "Organization Name"
                        : "Company Name"}
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                    <button
                      onClick={() => handlesubmit("/hosting")}
                      className="justify-center px-8 py-5 w-full text-sm font-bold leading-5 text-center text-white capitalize whitespace-nowrap bg-blue-600 rounded-md max-md:px-5 max-md:mt-10"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
