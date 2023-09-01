import { type FAQType, type CourseItem, type MiniCardType } from "types/types";
import { faker } from '@faker-js/faker';

export const demoCourse: CourseItem[] = [
    {
        id: '5546-uyr6',
        courseDescription: 'Forex trade are a widespread group of squamate income resource, with over 6,000 traders, ranging across all continents except Antarctica',
        courseTitle: 'Manual trade',
        courseImage: 'https://res.cloudinary.com/maesan-product/image/upload/v1693229028/fx-factor/course-demo_m0dx55.jpg'
    },
    {
        id: '5546-uyr6',
        courseDescription: 'Forex trade are a widespread group of squamate income resource, with over 6,000 traders, ranging across all continents except Antarctica',
        courseTitle: 'Bot Trade',
        courseImage: 'https://res.cloudinary.com/maesan-product/image/upload/v1693229034/fx-factor/analyst-single_zduhnj.jpg'
    },
    {
        id: '5546-uyr6',
        courseDescription: 'Forex trade are a widespread group of squamate income resource, with over 6,000 traders, ranging across all continents except Antarctica',
        courseTitle: 'Signals',
        courseImage: 'https://res.cloudinary.com/maesan-product/image/upload/v1693229034/fx-factor/hero-bg-laptop_khpekl.jpg'
    }

]

export const Links = [
    { linkName: 'Home', linkUrl: '/' },
    { linkName: 'Courses', linkUrl: '/courses' },
    { linkName: 'About', linkUrl: '/about' },
    { linkName: 'FAQ', linkUrl: '/faq' },
    { linkName: 'Account', linkUrl: '/account' }
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
const demoCoreValues = (): MiniCardType => {
    return {
        cardDetails: faker.word.words(25)
    }
}

export const renderDemoCoreValues = () => {

    return {
        data: Array.from({ length: 3 }, demoCoreValues)
    }

}
