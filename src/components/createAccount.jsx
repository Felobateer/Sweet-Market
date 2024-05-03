import React, { useState } from "react";
import UserInfo from "../proxyBackend/user";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    UserInfo.newUser(name, email, password);
    closeModal();
  };

  return (
    <div className="relative flex">
      <button
        onClick={openModal}
        className="bg-white shadow-sm shadow-gray-400 rounded-3xl w-96 mx-auto my-5 py-3 hover:shadow-lg"
      >
        Create Account
      </button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form
                onSubmit={handleSubmit}
                className="w-full px-1 py-5 sm:p-6 flex flex-col"
              >
                <h2 className="text-xl mx-auto">Create Account</h2>
                <h1 className="text-3xl sm:text-5xl text-amber-600 mx-auto my-5">
                  SWEETMARKET
                </h1>
                <div className="mb-4 flex flex-col">
                  <label className="text-lg ml-5 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="ml-5 border-2 border-amber-600 p-3 rounded-xl hover:shadow-sm hover:shadow-amber-600"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label className="text-lg ml-5 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="ml-5 border-2 border-amber-600 p-3 rounded-xl hover:shadow-sm hover:shadow-amber-600"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-6 flex flex-col">
                  <label className="text-lg ml-5 mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="ml-5 border-2 border-amber-600 p-3 rounded-xl hover:shadow-sm hover:shadow-amber-600"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex items-center justify-between px-5">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                  >
                    Create Account
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-block align-bottom bg-gray-200 text-gray-700 py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
