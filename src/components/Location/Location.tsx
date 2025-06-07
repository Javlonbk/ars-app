import React from "react";
import Heading from "../ui/typography/Heading";
import Paragraph from "../ui/typography/Paragraph";

const Location: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-secondary text-center">
      <Heading level={2}>Our Location</Heading>
      <Paragraph>Serving Tashkent and surrounding areas</Paragraph>
      <iframe
        title="Google Map"
        className="w-full h-64 md:h-96 rounded-xl shadow"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5989.518278296849!2d69.2401!3d41.2995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4b3a3b0b1f7%3A0x6f0b8c4c8b0a8e3d!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1717777777777!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Location;
