import React from "react";
import OfficerCard from '../components/OfficerCard';

const officers = [
    {
        name: 'Mr Seamus DeFaoite',
        county: 'Cork County Council',
        email: 'vho@corkcoco.ie',
        phone: '123-456-7890',
        photo: 'https://via.placeholder.com/300x200',
    },
    {
        name: 'Mr Seamus DeFaoite',
        county: 'Cork County Council',
        email: 'vho@corkcoco.ie',
        phone: '123-456-7890',
        photo: 'https://via.placeholder.com/300x200',
    },
    {
        name: 'Mr Seamus DeFaoite',
        county: 'Cork County Council',
        email: 'vho@corkcoco.ie',
        phone: '123-456-7890',
        photo: 'https://via.placeholder.com/300x200',
    },
    {
        name: 'Mr Seamus DeFaoite',
        county: 'Cork County Council',
        email: 'vho@corkcoco.ie',
        phone: '123-456-7890',
        photo: 'https://via.placeholder.com/300x200',
    },
    {
        name: 'Mr Seamus DeFaoite',
        county: 'Cork County Council',
        email: 'vho@corkcoco.ie',
        phone: '123-456-7890',
        photo: 'https://via.placeholder.com/300x200',
    },
    {
        name: 'Mr Seamus DeFaoite',
        county: 'Cork County Council',
        email: 'vho@corkcoco.ie',
        phone: '',
        photo: 'https://via.placeholder.com/300x200',
    },
];

function Officers() {
    return (
        <div class="mx-auto">
            <h1 class="text-3xl py-3">Vacant property officers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {officers.map((officer, index) => (
                    <OfficerCard key={index} officer={officer} />
                ))}
            </div>
        </div>
    );
}

export default Officers;