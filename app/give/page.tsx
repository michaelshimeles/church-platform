"use client"
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import Link from 'next/link';

interface GivePageProps { }
const GivePage: React.FC<GivePageProps> = () => {
  return (
    <section>
      <div
        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
          >
            <img
              alt="Party"
              src="/tithe.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Thank you for using the Grace (Tsega) Church Online Giving Option</h2>

            <p className="mt-4 light:text-gray-600 dark:text-gray-300">
              Support the mission and vision of Tsega Bible Fellowship Church with your generous donations through our online giving platform. Your offering is an investment in serving our community and spreading the love of Jesus. Giving is a spiritual discipline and act of worship, helping to provide for the congregation and fulfill our mission. Donate easily and securely by entering the amount you would like to give. Thank you for your support, an act of worship and vital to spreading hope through Jesus.
            </p>

            <a
              href={`${process.env.NEXT_PUBLIC_STRIPE_LINK}`}
              target='_blank'
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Give
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Ways To Give</h2>
        </div>
        <div
          className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
        >
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold">Online Giving</h2>

              <p className="mt-1 text-sm light:text-gray-600 dark:text-gray-300">
                Online giving is a quick and easy way to give. Click on the blue &apos;Give Online&apos; button below which will take you
              </p>
              <Link href={`${process.env.NEXT_PUBLIC_STRIPE_LINK}`} target='_blank'>
                <Button className='mt-3'>Give</Button>
              </Link>
            </div>

          </div>
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold">Sunday Giving</h2>

              <p className="mt-1 text-sm light:text-gray-600 dark:text-gray-300">
                If you prefer, you can give during our Sunday service
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold">Text Giving</h2>

              <p className="mt-1 text-sm light:text-gray-600 dark:text-gray-300">
                Text the word &apos;GIVE&apos; to +17576459906. In return you will receive a text message with a link to our giving platform. (Msg & Data Rates Apply).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold">Interac E-Transfer</h2>

              <p className="mt-1 text-sm light:text-gray-600 dark:text-gray-300">
                Text the word &apos;GIVE&apos; to +17576459906. In return you will receive a text message with a link to our giving platform. (Msg & Data Rates Apply).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GivePage;
