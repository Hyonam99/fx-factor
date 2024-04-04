import * as Yup from "yup";
import { Box, Heading, Text, Card, CardHeader } from "@chakra-ui/react";
import "../promotion.scss";
import { Link } from "react-router-dom";
import {
	CustomButton,
	InputField,
} from "components/components-exports";
import { adsContentBottom, adsContentFifth, adsContentFourth, adsContentSecond, adsContentThird, adsContentTop } from "mocked-data/mocked-data";
import parse from "html-react-parser";
import { useFormik } from "formik";
import Tweet1 from "assets/tweet-1.png"
import Tweet2 from "assets/tweet-2.png"
import Tweet3 from "assets/tweet-3.png"
import Tweet4 from "assets/tweet-4.png"
import Tweet5 from "assets/tweet-5.png"

const Sales = () => {
	const newsLetterSchema = Yup.object().shape({
		fullName: Yup.string().required("your full name is required"),
		email: Yup.string()
			.required("email address is required")
			.email("invalid email format"),
	});
	const formik = useFormik({
		initialValues: { fullName: "", email: "" },
		validateOnBlur: true,
		validationSchema: newsLetterSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<Box paddingBottom={8}>
			<Box className="promotion-header">
				<Box
					padding={24}
					position={"relative"}
					zIndex={50}
					display={"flex"}
					flexDirection={"column"}
					gap={".6rem"}
				>
					<Heading as={"h1"}>
						Trade with <br />
						thefxfactor
					</Heading>
					<Text as={"p"}>Get access to a free 7days email course</Text>
					<Link to={"#get-course"} className="link-btn">
						Get a free course
					</Link>
				</Box>
			</Box>
			<Box className="course-second-content">{parse(adsContentTop)}</Box>
			<img src={Tweet1} alt="tweet-1" />
			<Box className="course-second-content">{parse(adsContentSecond)}</Box>
			<img src={Tweet2} alt="tweet-2" />
			<Box className="course-second-content">{parse(adsContentThird)}</Box>
			<img src={Tweet3} alt="tweet-3" />
			<Box className="course-second-content">{parse(adsContentFourth)}</Box>
			<img src={Tweet4} alt="tweet-4" />
			<Box className="course-second-content">{parse(adsContentFifth)}</Box>
			<img src={Tweet5} alt="tweet-5" />
			<Box className="course-second-content">{parse(adsContentBottom)}</Box>
			<Box paddingX={".8rem"}>
				<Card className="email-course-card">
					<CardHeader paddingBottom={8}>
						Sign up for a free email course
					</CardHeader>
					<form
						onSubmit={formik.handleSubmit}
						role="form"
						className="email-course-form"
					>
						<InputField
							id="fullName"
							label="Full Name"
							type="text"
							variant="filled"
							size="small"
							margin="none"
							onChange={formik.handleChange}
							error={
								formik.errors.fullName !== undefined &&
								formik.touched.fullName === true
							}
							helperText={
								formik.errors.fullName !== undefined &&
								formik.touched.fullName === true
									? formik.errors.fullName
									: ""
							}
							className="subscribe-input"
							data-testid="subscribe-input"
						/>
						<InputField
							id="email"
							label="Email Address"
							type="email"
							variant="filled"
							size="small"
							margin="none"
							onChange={formik.handleChange}
							error={
								formik.errors.email !== undefined &&
								formik.touched.email === true
							}
							helperText={
								formik.errors.email !== undefined &&
								formik.touched.email === true
									? formik.errors.email
									: ""
							}
							className="subscribe-input"
							data-testid="subscribe-input"
						/>
						<CustomButton
							title={"Subscribe"}
							type="submit"
							color="primary"
							size="large"
							disabled={false}
						/>
					</form>
				</Card>
			</Box>
		</Box>
	);
};

export default Sales;
