import React from 'react';

const Header = () => {
    return (
        <header className="header bg-black ">
            <div className="header-content text-white p-5 flex justify-between items-center">
                
                <h1>Abstract | Help Center</h1>
                <button className="button bg-zinc-800 text-white px-4 py-2 rounded-lg border-2 border-salt-300  ">Submit a request</button>
            </div>
        </header>
    );
};

export default Header;


