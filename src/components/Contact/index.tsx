"use client";
import { useContext } from "react";
import { FaPhone } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import "./style.css";
import { LangContext } from "@/app/context/store";

function Contact() {
  const {
    state: {
      content: {
        contacts: { addresses, addressTitle, email, tel },
      },
    },
  }: any = useContext(LangContext);

  return (
    <main className="contact py-10">
      <div className="container flex  items-stretch max-md:flex-col">
        <div className="content w-[50%] max-md:w-[100%] max-md:mb-6">
          <div className="contact-location mb-6">
            <h2 className="text-Primary-0 mb-2 text-2xl">{addressTitle}:</h2>
            {addresses.map((address: string) => {
              return (
                <p className="text-[#999] flex items-center font-Belanosima tracking-[0.05em] font-normal text-lg">
                  <HiOutlineLocationMarker className="text-Primary-0 text-xl shrink-0 mr-2" />
                  {address}
                </p>
              );
            })}
          </div>

          <div className="contact-mail mb-6">
            <h2 className="text-Primary-0 mb-2 text-2xl">{email}:</h2>
            <p className="text-[#999] flex items-center font-Belanosima tracking-[0.05em] font-normal text-lg">
              <AiOutlineMail className="text-Primary-0 text-xl mr-2 shrink-0" />
              <a href="mailto:zamantravel@gmail.com">zamantravel@gmail.com</a>
            </p>
          </div>

          <div className="contact-phone">
            <h2 className="text-Primary-0 mb-2 text-2xl">{tel}:</h2>
            <p className="text-[#999] flex items-center font-Belanosima tracking-[0.05em] font-normal text-lg">
              <FaPhone className="text-Primary-0 text-xl mr-2 shrink-0" />
              <a href="tel:+998950812222">+998 95 081 22 22</a>
            </p>
          </div>
        </div>
        <div className="map bg-Secondary-0 w-[50%] max-md:w-[100%]">
          <iframe
            className="w-[100%]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2998.5509080426136!2d69.19879314345019!3d41.2751131546166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1688040914640!5m2!1suz!2s"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <a
        className="phone-btn hover:text-Primary-0 fixed bg-Secondary-0 bottom-10 right-10 p-5 rounded-[50%]"
        href="tel:+998950812222"
      >
        <FaPhone className="phone-icon" />
      </a>
    </main>
  );
}

export default Contact;
