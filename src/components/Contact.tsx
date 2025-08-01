import React from 'react';

const ContactCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-[#2a2d3c] p-6 rounded-md shadow-md border border-gray-600">
    <p className="text-sm font-bold mb-2">{label}</p>
    <p className="text-gray-300 text-sm">{value}</p>
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="bg-[#232533] text-white px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
         Contact Information
      </h2>
      <div className='flex 
       flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
      {/* Info Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ContactCard label="Phone:" value="469-664-1585" />
        <ContactCard label="Email:" value="anushabura12@gmail.com" />
        <ContactCard label="Website:" value="www.anusha.com" />
        <ContactCard label="Address:" value="Celina Texas" />
        <ContactCard label="GitHub:" value="github.com/anushabura" />
        <div className="bg-[#2a2d3c] p-6 rounded-md shadow-md border border-gray-600">
          <p className="text-sm font-bold mb-2">Social Media:</p>
          <div className="flex flex-col gap-2">
            <a href="https://www.linkedin.com/in/anusha-bura-abbaab245/" className="text-gray-300 text-sm hover:text-pink-400 transition">
              https://www.linkedin.com/in/anusha-bura
            </a>
            </div>
            </div>
      </div>

      {/* Google Map */}
      <div className=" mx-auto  rounded-md overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          className="w-full h-full border-0"
          src="https://maps.google.com/maps?q=33.2910019,-96.7663055&z=15&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default Contact;