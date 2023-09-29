import React from 'react'

interface ServiceScheduleProps {

}

const ServiceSchedule: React.FC<ServiceScheduleProps> = ({ }) => {
    return (
        <section className='w-[90%] pt-[5rem]'>
            <div
                className="py-8 sm:py-12 lg:py-16"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                            alt="Party"
                            src="/church.png"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    <section className="antialiased">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                                    Sunday Service Schedule
                                </h2>

                                <div className="mt-4">
                                    <a target='_blank' href="https://www.google.com/maps/place/Tsega+Bible+Fellowship+Church/@43.7183451,-79.3083306,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4cdcb4c7c4faf:0xdc229ad703493b53!8m2!3d43.7183413!4d-79.3057503!16s%2Fg%2F11trldgc9b?entry=ttu" title=""
                                        className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Visit us at 65 Sunrise Ave, Toronto, Ontario
                                        <svg aria-hidden="true" className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                                <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                                    <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            4:00pm
                                        </p>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            <p>Doors Open</p>
                                        </h3>
                                    </div>

                                    <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            4:30pm
                                        </p>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            <p>Church Service Starts</p>
                                        </h3>
                                    </div>

                                    <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            6:00pm
                                        </p>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            <p>After Service Fellowship</p>
                                        </h3>
                                    </div>

                                    <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            7:00pm
                                        </p>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            <p>Doors Close</p>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default ServiceSchedule;