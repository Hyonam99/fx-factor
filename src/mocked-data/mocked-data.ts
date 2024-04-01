import { faker } from "@faker-js/faker";
import { MdOutlineEventRepeat } from "react-icons/md";
import { TbWaveSawTool } from "react-icons/tb";
import { BiBookBookmark } from "react-icons/bi";
import { type CourseItemType } from "types/types";
import { type MiniCardProps } from "types/interface";

export const Links = [
	{ linkName: "Home", linkUrl: "/" },
	{ linkName: "Courses", linkUrl: "/courses" },
	{ linkName: "About", linkUrl: "/about" },
	{ linkName: "Faq", linkUrl: "/faq" },
];

export const renderDemoFaq = () => {
	return {
		data: [
			{
				id: faker.string.uuid(),
				question: "What is Forex trading?",
				explanation: `Forex trading, or foreign exchange trading, 
                involves buying and selling currencies in the global marketplace. 
                It's a way to profit from changes in exchange rates.`,
			},
			{
				id: faker.string.uuid(),
				question: `What is your community like, and how can I join?`,
				explanation: `Our forex community is a supportive network of traders. 
                To join, simply click on the "Join us" button in the community section on the home page, and you'll gain access to the community forum.`,
			},
			{
				id: faker.string.uuid(),
				question: `Are your courses suitable for beginners?`,
				explanation: `Yes, we offer courses for traders of all levels. 
                Our beginner course is designed to provide a strong 
                foundation for those new to forex.`,
			},
			{
				id: faker.string.uuid(),
				question: `Is forex trading risky?`,
				explanation: `Yes, forex trading carries risks just like every other you could 
                do to improve your finances. However, with proper education and risk management strategies, 
                you can minimize these risks and achieve success.This, is what we offer you`,
			},
			{
				id: faker.string.uuid(),
				question: `How do I contact your support team if I have questions?`,
				explanation: `You can reach our support team through a phone call <a href="tel:08100905654">08100905654</a>, or chat via whatsApp; <a href="https://wa.link/6qt9k3" target="_blank">https://wa.link/6qt9k3</a>.

                Alternatively: You can contact our support team via mail at <a href="mailto:trade.fxfactor@gmail.com" target="_blank">trade.fxfactor@gmail.com</a>`,
			},
			{
				id: faker.string.uuid(),
				question: `What payment methods do you accept for course enrollment?`,
				explanation: `We accept payments through bank transfers and paystack. 
                You will find the payment option during the course enrollment process.`,
			},
		],
	};
};

export const renderFeatures = () => {
	return {
		data: [
			{
				id: "69f33854",
				description:
					'Forex classes are scheduled to begin soon, visit the "courses" section for more details',
				title: "Trading Classes",
				image:
					"https://res.cloudinary.com/maesan-product/image/upload/v1693229028/fx-factor/course-demo_m0dx55.jpg",
				icon: BiBookBookmark,
			},
			{
				id: "f897ed6e6539",
				description: `Don't miss out on upcoming webinars, workshops, and live trading sessions with like-minded traders. Exchange ideas, and learn from the pros.`,
				title: "Community Events",
				image:
					"https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV2ZW50fGVufDB8fDB8fHww",
				icon: MdOutlineEventRepeat,
			},
			{
				id: "60ab-4e05-845f",
				description: `We're constantly introducing new tools and resources to make your trading experience even better. Keep yourself informed about updates.`,
				title: "New Features and Tools",
				image:
					"https://res.cloudinary.com/maesan-product/image/upload/v1693229028/fx-factor/course-demo_m0dx55.jpg",
				icon: TbWaveSawTool,
			},
		],
	};
};

export const adsContentTop = `
<p>“The economy is hard,” yet some people are living their best life.
							Here's something they know that you don't: No, it's neither
							positive affirmation nor delusion. Read to find out.</p>
<p></p>
<p>If your
							income in Naira has remained the same over the past one year.. You
							are now 40% poorer. Whereas.. Someone earning the same amount in
							dollars since last year has lost less than 10% of his purchasing
							power. No thanks to inflation.. Your once comfortable 150,000
							naira salary now feels like 50,000 naira. Since the start of the
							year.. The Nigerian Naira has been on a free fall against the US
							Dollar. Even though the price gained against the dollar recently..
							It is more likely to drop than keep gaining. And prices of
							commodities are more to keep going up.</p>
<p> This is not meant to scare
							you.. But to let you know that, in Nigeria, no matter how bad it
							gets, it can get worse. If your earnings are still in Naira.. It
							is crucial to protect yourself and your finances from the constant
							inflation caused by devaluation of Naira. You need an extra,
							supplementary income. There are two ways you can do this; the
							difficult and long term approach and an easier and shorter term
							approach. The long term approach is to increase your earnings,
							either by securing a raise from your boss or juggling multiple
							side jobs. Let's face it.. With the economy affecting businesses
							too, including your employer's, getting a raise is unlikely. On
							the other hand.. Taking up side jobs could either lead to burn out
							or interfere with your productivity at your main job.</p>
<p>Alternatively.. There's a smarter, easier way.. One that won't
							leave you exhausted or at odds with your boss. It is a way for you
							to make more than you currently do without permission from anyone.
							It is a way for you to earn in dollars. No.. This is not another
							pitch selling you a dream just to extort money from you. What
							you're about to get is a proven method to start earning in
							dollars.. Even if you have never earned in dollars before. You can
							earn in dollars through many ways.. But one tried and tested way
							to do that without exposing yourself to rejections and an
							unhealthy amount of risk is to learn how to trade FOREX.</p>
<p>Banks
							trade FOREX. The money generating arm of the government trades
							FOREX. The top performers trade FOREX. Why not you? Forex trading
							has a rich history dating back to the 19th century. It has evolved
							significantly since then. Today, thanks to advancements in
							technology, Forex trading is available to everyone. With a
							smartphone (or laptop) and internet connection.. You can tap into
							the largest financial market with a daily trading volume exceeding
							6 trillion dollars. This is an opportunity for you, a Nigerian
							earning in Naira, to have a side income that doesn't affect your
							primary source of income. </p>
<p>The best time to have started trading
							FOREX was a year ago. The second best time is right now.. with FX
							Factor.</p>     
							 
`;

export const adsContentBottom = `
<p>At FX Factor, we have designed for you a comprehensive training program
				on how to start earning in dollars with FOREX trading.</p>
<p>You might have
				paid for a FOREX class before and ended up disappointed.. Concluding
				that forex trading is a scam.. Or that forex traders make money from
				teaching forex rather than trading forex.. But this is different. In
				this training.. You will have the best of the best forex traders with a
				combined profitable trading experience of over 10 years, come together
				to teach you practical ways on how you can be profitable with FOREX
				trading.. live. </p>
<p> the entire training costs N30,000, but we
				believe so strongly in our training to change your financial life when
				you experience it — which you definitely need to. For that, we're
				offering you a free trial.. </p>
<p>A 7-day short email course to give you a
				glimpse of what's in store for you when you sign up for the training, 
                without any upfront payment. This short course will contain:</p>
  
                <ul>
                <li>✅ Why should you trade forex?</li>
                <li>✅ How to take your share from the forex market.</li>
                <li>✅ How to trade economic news.</li>
                <li>✅ How to trade based on available historical data.</li>
                <li>✅ Which should you trade: economic news or historical data.</li>
                <li>✅ Why people lose their money to forex </li>
                <li>✅ How to not lose your money to forex. </li>
                </ul>
                 
                <p>All for FREE. Then you pay N30,000 to access the full
				training. Do you want to stop surviving and start thriving regardless of
				the state of the economy? </p>
                <p>Do you desire freedom to enjoy the things you
				want in life without needing to think too much about the cost? That’s
				the freedom trading FOREX and earning in dollars gives you. That’s the
				freedom learning FOREX with FX Factor will you. You don't have to cut
				down your expenses to contain inflation. </p>
                <p>You can live your best life
				regardless of inflation. This is a one of a kind opportunity for you to
				do so. Fill the form below to sign up for the free email course and get
				an email from us everyday for the next 7 days in your inbox.</p>
                
`;

export const mockedCourseItem: CourseItemType = {
	id: faker.string.uuid(),
	courseImage: faker.image.url(),
	courseIntro: faker.lorem.paragraph(1),
	courseTitle: faker.lorem.sentence(5),
	courseDescription: faker.lorem.paragraph(3),
	courseHighlights: [faker.lorem.sentence(8)],
	courseUsp: [faker.lorem.sentence(5)],
	courseOutro: faker.lorem.sentence(5),
	coursePrice: 30,
	duration: "1 month",
};

export const mockedCardProps: MiniCardProps = {
	cardTitle: faker.lorem.sentence(5),
	cardDetails: faker.lorem.paragraph(2),
	imageUrl: faker.image.url(),
	avatarAlt: faker.word.words(2),
	icon: faker.image.url(),
};
