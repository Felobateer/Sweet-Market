import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const contacts = [
    {
      type: "email",
      description: "sweetmarket@gmail.com",
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
    {
      type: "find",
      description: "Central Park, Manhattan <br/> New York, 1101",
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
    },
    {
      type: "call",
      description: "+1 292 543 876",
      icon: <FontAwesomeIcon icon={faPhoneAlt} />,
    },
  ];
  return (
    <footer className="flex flex-col justify-center bg-gray-100">
      <div className="flex flex-col justify-center mt-16 w-full">
        <h1 className="text-center mx-auto text-2xl">SWEETMARKET</h1>
        <p className="w-fit px-5 text-[14px] text-center mx-auto py-4 sm:text-lg text-gray-800 sm:w-[450px]">
          We always strive to deliver delicous sweets to bring happieness to
          everyone in the world
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-evenly my-20 w-full">
        {contacts.map((contact) => (
          <div className="my-3" key={contact.type}>
            <div className="flex justify-center mb-5 text-4xl text-gray-600">
              {contact.icon}
            </div>
            <p className="text-center text-xl">{contact.type.toUpperCase()}</p>
            <p
              className="text-center pt-2"
              dangerouslySetInnerHTML={{ __html: contact.description }}
            ></p>
          </div>
        ))}
      </div>
    </footer>
  );
}
