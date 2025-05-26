import React, { useState } from 'react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', agreed: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert('You must agree to the Privacy Policy');
      return;
    }
    alert(`Submitted: ${JSON.stringify(formData, null, 2)}`);
    // Add actual submission logic here
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center" id='appointment'
      style={{ backgroundImage: "url('/bg-appointment.jpg')" }} // Replace with your image
    >
      <form
        onSubmit={handleSubmit}
        className="bg-transparent px-6 py-8 text-white text-center w-full max-w-6xl"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-6">Make An Appointment</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="NAME"
            className="border-2 border-white px-6 py-3 w-full md:w-[250px] bg-transparent placeholder-white font-bold text-sm"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL"
            className="border-2 border-white px-6 py-3 w-full md:w-[250px] bg-transparent placeholder-white font-bold text-sm"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="PHONE"
            className="border-2 border-white px-6 py-3 w-full md:w-[250px] bg-transparent placeholder-white font-bold text-sm"
          />
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-8 py-3 text-sm"
          >
            SEND MESSAGE
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            className="accent-cyan-500"
          />
          <label htmlFor="agreed" className="text-white text-sm">
            I have read and agree with the <span className="underline">Privacy Policy</span>.
          </label>
        </div>
      </form>
    </div>
  );
}
