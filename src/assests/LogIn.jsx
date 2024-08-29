import React from 'react'

const LogIn = () => {
  return (
  
    <div className="flex min-h-full flex-col justify-center px-6 py-24 lg:px-8 bg-black  ">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Login your account
      </h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6  text-white"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required=""
              placeholder='Enter email'
              className="block w-full rounded-md border-0 py-1.5  text-black outline-none pl-3  "
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6  text-white"
            >
              Password
            </label>
            <div className="text-sm">
              
            </div>
          </div>
          <div className="mt-2">
            <input
              placeholder='Enter password'
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required=""
              className="block w-full rounded-md border-0 py-1.5  outline-none pl-3 text-black"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-500 to-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Log in
          </button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a
          href="#"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Start a 14 day free trial
        </a>
      </p>
    </div>
  </div>

)
}

export default LogIn