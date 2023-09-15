import { type FAQType } from "types/types";
import { faker } from '@faker-js/faker';

export const Links = [
    { linkName: 'Home', linkUrl: '/' },
    { linkName: 'Courses', linkUrl: '/courses' },
    { linkName: 'About', linkUrl: '/about' },
    { linkName: 'FAQ', linkUrl: '/faq' }
];

const demoFaq = (): FAQType => {
    return {
        id: faker.string.uuid(),
        question: faker.word.words(4),
        explanation: faker.finance.transactionDescription()
    }
}

export const renderDemoFaq = () => {

    return {
        data: Array.from({ length: 9 }, demoFaq)
    }

}

export const renderDemoCourses = () => {

    return {
        data: [
            {
                id: '69f33854',
                courseDescription: 'Forex trade are a widespread group of squamate income resource, with over 6,000 traders, ranging across all continents except Antarctica',
                courseTitle: 'Bot trade',
                courseImage: 'https://res.cloudinary.com/maesan-product/image/upload/v1693229028/fx-factor/course-demo_m0dx55.jpg'
            },
            {
                id: 'f897ed6e6539',
                courseDescription: 'Forex trade are a widespread group of squamate income resource, with over 6,000 traders, ranging across all continents except Antarctica',
                courseTitle: 'Manual trade',
                courseImage: 'https://res.cloudinary.com/maesan-product/image/upload/v1693229028/fx-factor/course-demo_m0dx55.jpg'
            },
            {
                id: '60ab-4e05-845f',
                courseDescription: 'Forex trade are a widespread group of squamate income resource, with over 6,000 traders, ranging across all continents except Antarctica',
                courseTitle: 'Risk Analysis',
                courseImage: 'https://res.cloudinary.com/maesan-product/image/upload/v1693229028/fx-factor/course-demo_m0dx55.jpg'
            }
        ]
    }

}
