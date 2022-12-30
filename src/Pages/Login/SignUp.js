import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {

  const { createUser, updateUserProfile } = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleSignUp = event => {
    event.preventDefault();
    const name = event.target.name.value
    const image = event.target.image.files[0]
    const email = event.target.email.value
    const password = event.target.password.value

    const formData = new FormData()
    formData.append('image', image)

    // 574523334ae338eded7dff52821ce347

    const url = `https://api.imgbb.com/1/upload?key=574523334ae338eded7dff52821ce347`
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.data.display_url)

        createUser(email, password)
          .then(result => {
            console.log(result)
            updateUserProfile(name, data.data.display_url)
            navigate(from, {replace: true})
          })
          .catch(err => console.log(err))

      })
      .catch(err => console.log(err))

    // console.log(formData);



  }

  return (


    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section
          class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
        >
          <img
            alt="Night"
            src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1672251355~exp=1672251955~hmac=12a07442ee4a79f744de65f56348acf95e0cbaaff39f097f8fc61da6be469d4f"
            class="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div class="hidden lg:relative lg:block lg:p-12">


            <h2 class="mt-6 text-2xl font-bold text-gray sm:text-3xl md:text-4xl">
              Welcome to HelloBook
            </h2>

            <p class="mt-4 leading-relaxed text-gray">
              Please Sign Up for stay connected on this platform.
            </p>
          </div>
        </section>

        <main
          aria-label="Main"
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div class="max-w-xl lg:max-w-3xl">
            <div class="relative -mt-16 block lg:hidden">
              <h2 class="mt-6 text-2xl font-bold text-gray sm:text-3xl md:text-4xl">
                Welcome to HelloBook
              </h2>

              <p class="mt-4 leading-relaxed text-gray">
                Please Sign Up for stay connected on this platform.
              </p>
            </div>

            <form onSubmit={handleSignUp} action="#" class="mt-8 grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="FirstName"
                  class="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="Name"
                  name="name"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">

                <label htmlFor='image' className='block mb-2 text-sm font-medium text-gray-700'>
                  Select Image:
                </label>
                <input
                  type='file'
                  id='image'
                  name='image'
                  accept='image/*'
                  required
                />

              </div>

              <div class="col-span-6">
                <label for="Email" class="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Address"
                  class="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>

                <input
                  type="address"
                  id="Address"
                  name="address"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>



              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  class="inline-block btn shrink-0 rounded-md border border-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500"
                >
                  Create an account
                </button>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to="/login" class="text-gray-700 underline">Log in</Link>.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>

  );
};

export default SignUp;