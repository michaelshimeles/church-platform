import React from 'react'

interface FaithPageProps {}

const FaithPage: React.FC<FaithPageProps> = ({ }) => {
    return (
        <section className="flex justify-center min-w-screen">
            <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">Our Statement of Faith</h2>
                    <p className="mt-4 text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                        dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
                        sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default FaithPage;