import React from "react";

function OfficerCard({ officer }) {
    return (
        <div className="w-80 max-w-xs rounded overflow-hidden shadow mx-auto p-3 m-3">
            <img className="w-full h-48 object-cover" src={officer.photo} alt={officer.name} />
            <div>
                <h2 className="font-semibold uppercase m-2">{officer.name}</h2>
                <p className="text-gray-700 text-base mb-1">{officer.county}</p>
                {officer.email ? (
                    <p className="text-gray-700 text-base mb-1">Email: {officer.email}</p>
                ) : (
                    <p className="text-gray-500 text-base mb-1">Email: Not Available</p>
                )}
                {officer.phone ? (
                    <p className="text-gray-700 text-base">Phone: {officer.phone}</p>
                ) : (
                    <p className="text-gray-500 text-base">Phone: Not Available</p>
                )}
            </div>
        </div>
    );
}

export default OfficerCard;
