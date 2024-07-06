"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ErrorProps {
  userNameError: string | "";
  userEmailError: string | "";
  userMessageError: string | "";
}

const initialErrorState: ErrorProps = {
  userNameError: "",
  userEmailError: "",
  userMessageError: "",
};

export default function SupportForm() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });
  const [error, setError] = useState(initialErrorState);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    if (!formData.userName) {
      setError((prevError) => ({
        ...prevError,
        userNameError: "이름이 작성되지 않았습니다.",
      }));

      return;
    } else if (!formData.userEmail) {
      setError((prevError) => ({
        ...prevError,
        userEmailError: "이메일이 작성되지 않았습니다.",
      }));

      return;
    } else if (!formData.userMessage) {
      setError((prevError) => ({
        ...prevError,
        userMessageError: "문의 내용이 작성되지 않았습니다.",
      }));

      return;
    }

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            setFormData({
              userName: "",
              userEmail: "",
              userMessage: "",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setError({
      userNameError: "",
      userEmailError: "",
      userMessageError: "",
    });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mt-10 flex flex-col justify-center items-center space-y-5">
      <div>
        <div className="flex items-center space-x-5">
          <label className="mr-5 w-24 text-center">이름</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-[700px] px-4 py-2 rounded-lg border border-slate-400 border-solid focus:border focus:border-slate-700 focus:border-solid"
          />
        </div>
        {error.userNameError && (
          <div className="text-red-600 text-sm mt-3 ml-36">
            {error.userNameError}
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center space-x-5">
          <label className="mr-5 w-24 text-center">이메일</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            className="w-[700px] px-4 py-2 rounded-lg border border-slate-400 border-solid focus:border focus:border-slate-700 focus:border-solid"
          />
        </div>
        {error.userEmailError && (
          <div className="text-red-600 text-sm mt-3 ml-36">
            {error.userEmailError}
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center space-x-5">
          <label className="mr-5 w-24 text-center">문의 내용</label>
          <textarea
            name="userMessage"
            value={formData.userMessage}
            onChange={handleChange}
            className="w-[700px] px-4 py-2 rounded-lg h-40 resize-none border border-slate-400 border-solid focus:border-slate-700 focus:outline-none"
          />
        </div>
        {error.userMessageError && (
          <div className="text-red-600 text-sm mt-3 ml-36">
            {error.userMessageError}
          </div>
        )}
      </div>
      <div className="flex items-center space-x-5">
        <label className="mr-5 w-24 text-center">전송 버튼</label>
        <button
          type="submit"
          className="w-[700px] px-4 py-2 rounded-lg border border-slate-400 border-solid">
          보내기
        </button>
      </div>
    </form>
  );
}
