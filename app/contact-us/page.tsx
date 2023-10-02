import ContactUs from '@/components/ContactUs';
import React from 'react'

interface ContactUsProps {}

const ContactUsPage: React.FC<ContactUsProps> = ({ }) => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 mt-[3rem] sm:px-6 lg:px-8 min-h-screen">
            <div className="flex max-[1240px]:flex-col items-center gap-4 p-2">
                <div className="lg:col-span-2 lg:py-9">
                    <p className="max-w-xl text-lg">
                        Looking to get in touch with our church. Please feel free to either call or send us a message via email. We will get back to you shortly.
                    </p>
                    <div className="mt-8">
                        <h1 className="text-2xl font-bold text-blue-400">
                            +(289) 946-1487
                        </h1>
                        <address className="mt-2 not-italic">
                            65 Sunrise Ave, Toronto, Ontario
                        </address>
                    </div>
                </div>
                <ContactUs />
            </div>
        </div>
    );
}

export default ContactUsPage;