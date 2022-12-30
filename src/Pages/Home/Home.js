import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';

const Home = () => {
    const posts = useLoaderData()
    return (
        <div>
            <FirstPart />
            <header class="text-center">
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Latest Posts
                </h2>

                <p class="max-w-md mx-auto mt-4 text-gray-500">
                    Top liked posts are here
                </p>
            </header>

            <div className='justify-center'>

                {
                    posts.map(post => <SecondPart
                        key={post.id}
                        post={post}
                    ></SecondPart>)
                }
            </div>
        </div>
    )
};

export default Home;