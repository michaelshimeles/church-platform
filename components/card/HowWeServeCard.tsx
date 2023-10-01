import React from 'react'

interface HowWeServeCardProps {
    title: string,
    description: string,
    imageUrl: string
}

const HowWeServeCard: React.FC<HowWeServeCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="max-w-xs border border-gray-800 rounded-lg shadow">
            <img className="rounded-t-lg" src={imageUrl} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
        </div>
    );
}

export default HowWeServeCard;