import React from 'react'

interface ChurchCardProps {
    image: string,
    language: string,
    church: string,
    description: string
}

const ChurchCard: React.FC<ChurchCardProps> = ({ image, language, church, description }) => {
    return (
        <a href={language === "English" ? "/english-ministry" : "/amharic-ministry"} className="group relative block bg-black sm:w-[400px]">
            <img
                alt="Developer"
                src={image}
                className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-40 rounded-sm"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm text-white font-medium uppercase tracking-widest drop-shadow-xl">
                    {language}
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl drop-shadow-xl">{church}</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p className="text-sm text-white">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ChurchCard;