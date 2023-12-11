import { faker } from '@faker-js/faker';
import { MdOutlineEventRepeat } from 'react-icons/md';
import { TbWaveSawTool } from 'react-icons/tb';
import { BiBookBookmark } from 'react-icons/bi';

export const Links = [
    { linkName: 'Home', linkUrl: '/' },
    { linkName: 'Courses', linkUrl: '/courses' },
    { linkName: 'About', linkUrl: '/about' },
    { linkName: 'Faq', linkUrl: '/faq' }
];

export const renderDemoFaq = () => {
    return {
        data: [
            {
                id: faker.string.uuid(),
                question: "What is Forex trading?",
                explanation: `Forex trading, or foreign exchange trading, 
                involves buying and selling currencies in the global marketplace. 
                It's a way to profit from changes in exchange rates.`
            },
            {
                id: faker.string.uuid(),
                question: `What is your community like, and how can I join?`,
                explanation: `Our forex community is a supportive network of traders. 
                To join, simply click on the "Join us" button in the community section on the home page, and you'll gain access to the community forum.`
            },
            {
                id: faker.string.uuid(),
                question: `Are your courses suitable for beginners?`,
                explanation: `Yes, we offer courses for traders of all levels. 
                Our beginner course is designed to provide a strong 
                foundation for those new to forex.`
            },
            {
                id: faker.string.uuid(),
                question: `Is forex trading risky?`,
                explanation: `Yes, forex trading carries risks just like every other you could 
                do to improve your finances. However, with proper education and risk management strategies, 
                you can minimize these risks and achieve success.This, is what we offer you`
            },
            {
                id: faker.string.uuid(),
                question: `How do I contact your support team if I have questions?`,
                explanation: `You can reach our support team through a phone call <a href="tel:08100905654">08100905654</a>, or chat via whatsApp; <a href="https://wa.link/6qt9k3" target="_blank">https://wa.link/6qt9k3</a>.

                Alternatively: You can contact our support team via mail at <a href="mailto:trade.fxfactor@gmail.com" target="_blank">trade.fxfactor@gmail.com</a>`
            },
            {
                id: faker.string.uuid(),
                question: `What payment methods do you accept for course enrollment?`,
                explanation: `We accept payments through bank transfers and paystack. 
                You will find the payment option during the course enrollment process.`
            }
        ]
    };
};

export const renderDemoCourses = () => {

    return {
        data: [
            {
                id: '69f33854',
                courseDescription: 'Forex classes are scheduled to begin soon, visit the "courses" section for more details',
                courseTitle: 'Trading Classes',
                courseImage: 'https://res.cloudinary.com/maesan-product/image/upload/v1693229028/fx-factor/course-demo_m0dx55.jpg',
                icon: BiBookBookmark
            },
            {
                id: 'f897ed6e6539',
                courseDescription: `Don't miss out on upcoming webinars, workshops, and live trading sessions with like-minded traders. Exchange ideas, and learn from the pros.`,
                courseTitle: 'Community Events',
                courseImage: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV2ZW50fGVufDB8fDB8fHww',
                icon: MdOutlineEventRepeat
            },
            {
                id: '60ab-4e05-845f',
                courseDescription: `We're constantly introducing new tools and resources to make your trading experience even better. Keep yourself informed about updates.`,
                courseTitle: 'New Features and Tools',
                courseImage: 'https://res.cloudinary.com/maesan-product/image/upload/v1693229028/fx-factor/course-demo_m0dx55.jpg',
                icon: TbWaveSawTool
            }
        ]
    }

}
