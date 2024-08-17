
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Card = ({ search }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/cards')
            .then(res => {
                setCards(res.data);
            })
            .catch(err => {
                console.error('There was an error fetching the data!', err);
            });
    }, []);

    return (
        <div className="max-w-6xl pt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
            {cards.filter(card => {
                return search.toLowerCase() === '' 
                    ? card 
                    : card.title.toLowerCase().includes(search.toLowerCase());
            }).map((card, index) => (
                <div key={index} className="bg-slate-100 p-6 rounded-lg border-2 border-slate-200 ">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{card.title}</h3>
                    <hr className="border-gray-300 my-2" />
                    <p className="text-gray-600">
                        {card.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Card;
