import React, { useState } from 'react';

const ServicePage = ({ title, icon, description, formFields = [] }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment successful for ${title}: ${JSON.stringify(formData, null, 2)}`);
    setFormData({});
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto">
      {icon && (
        <img src={icon} alt={`${title} Icon`} className="w-16 h-16 mx-auto mb-4" />
      )}
      <h2 className="text-2xl text-blue-700 text-center font-bold mb-2">{title}</h2>
      {description && <p className="text-center text-gray-600 mb-6">{description}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        {formFields.map((field, idx) => (
          <div key={idx}>
            <label className="block font-semibold text-gray-700 mb-1">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              placeholder={field.placeholder}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default ServicePage;
