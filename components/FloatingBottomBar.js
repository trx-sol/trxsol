"use client";

import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingBottomBar() {
  const [showCallDialog, setShowCallDialog] = useState(false);
  const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false);

  const phoneNumbers = [
    {
      number: "+919876543210",
      office: "India Office",
      location: "Delhi NCR, Uttam Nagar",
    },
    { number: "+15551234567", office: "USA Office", location: "New York, NY" },
  ];

  const whatsAppNumbers = [
    {
      number: "+919876543210",
      office: "India Office",
      location: "Delhi NCR, Uttam Nagar",
    },
    { number: "+15551234567", office: "USA Office", location: "New York, NY" },
  ];

  const handleCallClick = () => {
    setShowCallDialog(true);
  };

  const handleWhatsAppClick = () => {
    setShowWhatsAppDialog(true);
  };

  const confirmCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
    setShowCallDialog(false);
  };

  const confirmWhatsApp = (phoneNumber) => {
    const message =
      "Hello! I'm interested in your services. Can you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowWhatsAppDialog(false);
  };

  return (
    <>
      {/* Floating Bottom Bar */}
      {/* Mobile/Tablet - Full Width Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40  border-t border-white/10 md:hidden">
        <div className="flex items-center">
          {/* Call Button */}
          <button
            onClick={handleCallClick}
            className="flex items-center justify-center flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 w-full   transition-all duration-300"
          >
            <FiPhone className="w-5 h-5 mr-2" />
            <span>Call Us</span>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 w-full  transition-all duration-300"
          >
            <FaWhatsapp className="w-5 h-5 mr-2" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Desktop - Floating Right Bottom Corner */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <div className="flex flex-col space-y-4">
          {/* Call Button */}
          <button
            onClick={handleCallClick}
            className="flex items-center justify-center w-14 h-14  bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full shadow-xl shadow-trx-cyan/30 hover:scale-110 transition-all duration-300"
          >
            <FiPhone className="w-7 h-7  text-white" />
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center w-14 h-14  bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-xl shadow-green-500/30 hover:scale-110 transition-all duration-300"
          >
            <FaWhatsapp className="w-7 h-7  text-white" />
          </button>
        </div>
      </div>

      {/* Call Dialog */}
      {showCallDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-trx-purple/30 rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiPhone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-4">
                Choose Office to Call
              </h3>
              <div className="space-y-4">
                {phoneNumbers.map((phone) => (
                  <div
                    key={phone.number}
                    className="bg-black/40 border border-trx-purple/30 rounded-xl p-4 hover:border-trx-cyan/60 transition-all cursor-pointer"
                    onClick={() => confirmCall(phone.number)}
                  >
                    <h4 className="text-white font-semibold text-lg mb-1">
                      {phone.office}
                    </h4>
                    <p className="text-trx-cyan font-bold text-xl mb-1">
                      {phone.number}
                    </p>
                    <p className="text-gray-400 text-sm">{phone.location}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowCallDialog(false)}
                className="mt-6 px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 transition-colors w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Dialog */}
      {showWhatsAppDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-green-500/30 rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-4">
                Choose Office for WhatsApp
              </h3>
              <div className="space-y-4">
                {whatsAppNumbers.map((whatsapp) => (
                  <div
                    key={whatsapp.number}
                    className="bg-black/40 border border-green-500/30 rounded-xl p-4 hover:border-green-400/60 transition-all cursor-pointer"
                    onClick={() => confirmWhatsApp(whatsapp.number)}
                  >
                    <h4 className="text-white font-semibold text-lg mb-1">
                      {whatsapp.office}
                    </h4>
                    <p className="text-green-400 font-bold text-xl mb-1">
                      {whatsapp.number}
                    </p>
                    <p className="text-gray-400 text-sm">{whatsapp.location}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowWhatsAppDialog(false)}
                className="mt-6 px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 transition-colors w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
