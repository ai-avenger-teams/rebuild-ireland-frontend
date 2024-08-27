import { FaGithub, FaLinkedin } from 'react-icons/fa';

function TeamMemberCard({ member }) {
    return (
        <div className="bg-primarylight w-80 max-w-xs rounded-lg overflow-hidden shadow mx-auto p-3 m-3">
            <img className="w-full h-48 object-cover" src={member.photo} alt={member.name} />
            <div>
                <h2 className="font-semibold uppercase m-2">{member.name}</h2>
                <p className="text-gray-700 text-base mb-2">{member.description}</p>
                <div className="flex justify-center space-x-3 mt-2">
                    {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub`}>
                            <FaGithub className="text-customLightGreen hover:text-customGreen text-2xl" />
                        </a>
                    )}
                    {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                            <FaLinkedin className="text-customLightGreen hover:text-customGreen text-2xl" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TeamMemberCard;
