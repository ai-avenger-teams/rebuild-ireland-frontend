function OfficerCard({ officer }) {
    return (
        <div className="bg-primarylight w-80 max-w-xs rounded-lg overflow-hidden shadow-lg mx-auto p-3 m-3">
            <img className="mx-auto w-40 h-50 object-cover rounded-lg" src={officer.photo} alt={officer.name} />
            <div>
                <h2 className="font-semibold uppercase m-2">{officer.name}</h2>
                <p className="text-gray-700 text-base mb-1">{officer.county}</p>
                {officer.email ? (
                    <p className="text-gray-700 text-sm mb-1">Email: {officer.email}</p>
                ) : (
                    <p className="text-gray-500 text-sm mb-1">Email: Not Available</p>
                )}
                {officer.phone ? (
                    <p className="text-gray-700 text-sm">Phone: {officer.phone}</p>
                ) : (
                    <p className="text-gray-500 text-sm">Phone: Not Available</p>
                )}
            </div>
        </div>
    );
}

export default OfficerCard;
