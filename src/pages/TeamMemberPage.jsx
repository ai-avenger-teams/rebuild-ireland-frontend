import React from 'react';
import { Helmet } from 'react-helmet-async';
import TeamMemberCard from '../components/TeamMemberCard';

const members = [
    {
        name: 'Viola Bergere',
        photo: 'path/to/photo.jpg',
        description: 'Full Stack Developer',
        github: 'https://github.com/violaberg',
        linkedin: 'https://www.linkedin.com/in/viola-bergere-5a668699/'
    },
    {
        name: 'Darrach Barneveld',
        photo: 'path/to/photo.jpg',
        description: 'Full Stack Developer',
        github: 'https://github.com/DarrachBarneveld',
        linkedin: 'https://www.linkedin.com/in/darrach-barneveld-2b493511b/'
    },
    {
        name: 'Stephen Dawson',
        photo: 'path/to/photo.jpg',
        description: 'Full Stack Developer',
        github: 'https://github.com/stephendawsondev',
        linkedin: 'https://linkedin.com/in/johndoe'
    },
    {
        name: 'Jhoan Trujillo',
        photo: 'path/to/photo.jpg',
        description: 'Full Stack Developer',
        github: 'https://github.com/jhoanTrujillo',
        linkedin: 'https://www.linkedin.com/in/jhoan-trujillo-92b03517b/'
    },
    {
        name: 'Charles J. Fowler',
        photo: 'path/to/photo.jpg',
        description: 'Full Stack Developer',
        github: 'https://github.com/iPoetDev',
        linkedin: 'https://www.linkedin.com/in/charlesjfowler/'
    },
];

function Members() {
    return (
        <>
            <Helmet>
                <title>Meet ReBuild Ireland Team</title>
                <meta name="description" content="Meet the talented developers behind ReBuild Ireland. Our dedicated team combines expertise in AI and software development to create an innovative platform that simplifies property renovation across Ireland." />
                <meta name="keywords" content="ReBuild Ireland team, project developers, AI platform developers, software development team, Ireland tech team, ReBuild Ireland creators, development team, innovative platform creators" />
            </Helmet>
            <div className="mx-auto py-3">
                <h1 className="text-customGreen font-semibold text-3xl py-3">ReBuild Ireland Team</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-3">
                    {members.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Members;
