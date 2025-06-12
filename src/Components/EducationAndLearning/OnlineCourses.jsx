import React, { useState } from "react";

const courseList = [
  { id: 1, name: "React for Beginners", provider: "Udemy", price: 499 },
  { id: 2, name: "Python Masterclass", provider: "Coursera", price: 699 },
  { id: 3, name: "Data Science Bootcamp", provider: "edX", price: 999 },
  { id: 4, name: "UI/UX Design Fundamentals", provider: "Skillshare", price: 399 },
];

const OnlineCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [paymentMessage, setPaymentMessage] = useState("");

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setPaymentMessage("");
  };

  const handlePayment = () => {
    if (selectedCourse) {
      setPaymentMessage(
        `Successfully enrolled in "${selectedCourse.name}" for ₹${selectedCourse.price}!`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Enroll in Online Courses</h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {courseList.map((course) => (
          <div
            key={course.id}
            className={`p-4 rounded-lg shadow-md cursor-pointer border ${
              selectedCourse?.id === course.id ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
            onClick={() => handleSelectCourse(course)}
          >
            <h2 className="text-lg font-semibold text-gray-800">{course.name}</h2>
            <p className="text-sm text-gray-600">Provider: {course.provider}</p>
            <p className="text-blue-600 font-bold mt-2">₹{course.price}</p>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <button
          onClick={handlePayment}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Pay ₹{selectedCourse.price} & Enroll
        </button>
      )}

      {paymentMessage && (
        <div className="mt-6 text-green-600 font-medium text-center">{paymentMessage}</div>
      )}
    </div>
  );
};

export default OnlineCourses;
