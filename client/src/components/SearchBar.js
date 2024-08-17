
import React from 'react';

const SearchBar = ({ setSearch }) => {
    return (
        <div className='search bg-indigo-100 flex justify-center items-center flex-col pt-10'>
            <h2 className="text-black text-6xl mb-6">How can we help?</h2>
            
            <form className="max-w-md w-full mb-10 ">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <input 
                        type="search" 
                        id="default-search" 
                        className="block w-full p-2 text-sm text-gray-900 border border-gray-300 ring-balck-900 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                        placeholder="Search" 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
