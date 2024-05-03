import React from "react";
import Modal from "../components/createAccount";
import UserInfo from "../proxyBackend/user";

export default function Signing() {
  const handleSigningIn = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    UserInfo.signIn(username, password);
  };

  const handleForgetPassword = () => {
    UserInfo.forgotPassword;
  };
  return (
    <>
      <section className="flex">
        <form
          onSubmit={handleSigningIn}
          className="w-full sm:w-[600px] mx-auto my-20 flex flex-col"
        >
          <h2 className="text-xl mx-auto">Sign in</h2>
          <h1 className="text-3xl sm:text-5xl text-amber-600 mx-auto my-5">
            SWEETMARKET
          </h1>
          <label htmlFor="username" className="text-lg ml-5 mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Type your email or phone"
            id="username"
            className="ml-5 border-2 border-amber-600 p-3 rounded-xl hover:shadow-sm hover:shadow-amber-600"
          />
          <label htmlFor="password" className="text-lg ml-5 mt-5 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Type your password"
            id="password"
            className="ml-5 border-2 border-amber-600 p-3 rounded-xl hover:shadow-sm hover:shadow-amber-600"
          />
          <div className="ml-5 mt-5 flex flex-row justify-between">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-lg mx-2">
                Remember me
              </label>
            </div>
            <div>
              <a
                onClick={handleForgetPassword}
                className="text-lg text-amber-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <Modal />
          <button
            type="submit"
            className="bg-blue-500 text-gray-200 shadow-sm shadow-gray-400 rounded-3xl w-full sm:w-96 mx-auto py-3 hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>
      </section>
    </>
  );
}
