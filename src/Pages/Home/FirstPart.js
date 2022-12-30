import React, { useState } from 'react';

const FirstPart = () => {

    const [posts, setPosts] = useState({})

    fetch('https://hello-book-server.vercel.app/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'

        },
        body: JSON.stringify(posts)
    })
    .then(res => res.json())
    .then(data => console.log(data))

    return (
       

        <section class="relative flex flex-wrap lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div class="mx-auto max-w-lg text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Let's post today!</h1>

                    <p class="mt-4 text-gray-500">
                        Share your thinking to others. Write your desire things and post your photos. 
                    </p>
                </div>

                <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                        <label for="email" class="sr-only">Post Massages</label>

                        <div class="relative">
                            <input
                                type="text"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Post Massages"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="sr-only">Photo</label>
                        <div class="relative">
                            <input
                                type="password"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Post Photos"
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        

                        <button
                            type="submit"
                            class=" inline-block rounded-lg btn px-5 py-3 text-sm font-medium text-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src="https://img.freepik.com/free-vector/selfie-concept-illustration_114360-560.jpg?w=740&t=st=1672169500~exp=1672170100~hmac=23df472826c3c7fdc187c42d683e32027189ff3332a1b9940af2900d740b9fbf"
                    class="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>

    );
};

export default FirstPart;