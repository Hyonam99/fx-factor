/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { MdLocationPin, MdOutlineMarkEmailRead } from "react-icons/md";
import { Box, Dialog } from "@mui/material";
import {
	CustomButton,
	InputField,
	QuickAction,
} from "components/components-exports";
import { Link } from "react-router-dom";
import MailchimpSubscribe, {
	type EmailFormFields,
} from "react-mailchimp-subscribe";
import "./footer.scss";
import { API_KEY, API_KEY_U, API_KEY_D } from "api";

const SubscribeForm = ({
	status,
	message,
	subscribe,
}: {
	status: string;
	message: string;
	subscribe: (data: EmailFormFields) => void;
}) => {
	const isLoading = status === "sending";
	const isSuccess = status === "success";
	const isError = status === "error";

	const [userAlert, setUserAlert] = useState({ shown: false, message: "" });
	const [showError, setShowError] = useState(false);

	const newsLetterSchema = Yup.object().shape({
		email: Yup.string()
			.required("email address is required")
			.email("invalid email format"),
	});

	const formik = useFormik({
		initialValues: { email: "" },
		validateOnBlur: true,
		validationSchema: newsLetterSchema,
		onSubmit: (values) => {
			subscribe({ EMAIL: values.email });
		},
	});

	useEffect(() => {
		if (isSuccess) {
			setUserAlert({
				shown: true,
				message,
			});
		}

		setTimeout(() => {
			setUserAlert({ shown: false, message: "" });
		}, 4000);
	}, [isSuccess]);

	useEffect(() => {
		if (isError) {
			setShowError(true);
		}

		setTimeout(() => {
			setShowError(false);
		}, 5000);
	}, [isError]);

	return (
		<form onSubmit={formik.handleSubmit} role="form">
			{showError && (
				<span className={`subscription-message`}>
					unable to subscribe at the moment, please try in few minutes
				</span>
			)}
			<Box className="subscribe_form-wrapper">
				<InputField
					id="email"
					label="Email Address"
					type="email"
					variant="filled"
					size="small"
					margin="none"
					onChange={formik.handleChange}
					error={
						formik.errors.email !== undefined && formik.touched.email === true
					}
					helperText={
						formik.errors.email !== undefined && formik.touched.email === true
							? formik.errors.email
							: ""
					}
					className="subscribe-input"
					data-testid="subscribe-input"
				/>
				<CustomButton
					title={isLoading ? "loading..." : "Subscribe"}
					type="submit"
					color="primary"
					size="large"
					disabled={isLoading && !isSuccess}
				/>
			</Box>

			<Dialog
				onClose={() => {
					setUserAlert({ shown: false, message: "" });
				}}
				open={userAlert.shown}
			>
				<Box className="subscription-alert">
					<Box>
						<MdOutlineMarkEmailRead size={48} />
					</Box>
					<p>{userAlert.message}</p>
				</Box>
			</Dialog>
		</form>
	);
};

const Footer = ({ isAds }: { isAds?: boolean }) => {
	const postUrl = `${API_KEY}?u=${API_KEY_U}&id=${API_KEY_D}`;

	return (
		<section className="footer-container" data-testid="footer-container">
			{!isAds && (
				<section className="footer_text-content">
					<article>
						<h1>Stay Informed !</h1>
						<p data-testid="footer-subscription-paragraph">
							Subscribe to our newsletter for the latest forex insights, market
							updates, and exclusive offers. Join our community of traders and
							enhance your forex journey.
						</p>
					</article>
				</section>
			)}

            {!isAds &&
                <section className="footer_form" data-testid="footer-form">
                    <MailchimpSubscribe
                        url={postUrl}
                        render={({ status, message, subscribe }: any) => (
                            <SubscribeForm
                                status={status}
                                message={message}
                                subscribe={subscribe}
                            />
                        )}
                    />
                </section>
            }
			<section className="footer_signature" data-testid="footer-signature">
				<Box>
					<img
						src={
							"https://res.cloudinary.com/maesan-product/image/upload/v1698565851/fx-factor/logo-short-clipped_bmuu6l.png"
						}
						alt="fx-factor-logo"
						className="footer_logo-short"
					/>
				</Box>
				<p>
					{" "}
					<MdLocationPin size={20} title="location-icon" /> 78, Egbe Road,
					Iyana-Ejigbo, Lagos
				</p>
				<div className="footer_media">
					<span className="footer_social-media_icons">
						<Link
							to="https://x.com/Fx_Factor?t=U_piOfAxgEJOgLUHjUwTig&s=09"
							target="_blank"
						>
							<RiTwitterXFill title="twitter-icon" />
						</Link>
					</span>
					<span className="footer_social-media_icons">
						<Link
							to="https://instagram.com/trade.fxfactor?igshid=YTQwZjQ0NmI0OA=="
							target="_blank"
						>
							<FaInstagram title="instagram-icon" />
						</Link>
					</span>
					<span className="footer_social-media_icons">
						<Link to="https://t.me/+oq9BDZt0rk4zMDJk" target="_blank">
							<LiaTelegram title="telegram-icon" />
						</Link>
					</span>
					<span className="footer_social-media_icons">
						<Link
							to="https://www.facebook.com/profile.php?id=61552635560767&mibextid=JRoKGi"
							target="_blank"
						>
							<SlSocialFacebook title="facebook-icon" />
						</Link>
					</span>
				</div>
			</section>
			<div className="footer-copyright">
				<p>copy right {new Date().getFullYear()} fx factor</p>
			</div>
			<div className="quick-action-container" data-testid="footer-quick-action">
				<QuickAction />
			</div>
		</section>
	);
};

export default Footer;
