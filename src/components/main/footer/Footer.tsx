import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { Box, DialogTitle, Dialog } from "@mui/material";
import {
    CustomButton,
    InputField,
    QuickAction
} from "components/components-exports";
import "./footer.scss";
import { Link } from "react-router-dom";
import MailchimpSubscribe, { type EmailFormFields } from "react-mailchimp-subscribe";

const SubscribeForm = ({ status, message, subscribe }: { status: string, message: string, subscribe: (data: EmailFormFields) => void }) => {

    const isLoading = status === "sending";
    const isSuccess = status === "success";
    const isError = status === "error";

    const [userAlert, setUserAlert] = useState({ shown: false, message: "" })
    const [showError, setShowError] = useState(false)

    const newsLetterSchema = Yup.object().shape({
        email: Yup.string()
            .required("email address is required")
            .email("invalid email format")
    });

    const formik = useFormik({
        initialValues: { email: "" },
        validateOnBlur: true,
        validationSchema: newsLetterSchema,
        onSubmit: (values) => {
            subscribe({ EMAIL: values.email });
        }
    });

    useEffect(() => {
        if (isSuccess) {
            setUserAlert({
                shown: true,
                message
            })
        }

        setTimeout(() => {
            setUserAlert({ shown: false, message: "" })
        }, 3000)

    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            setShowError(true)
        }

        setTimeout(() => {
            setShowError(false)
        }, 5000)

    }, [isError])
    return (
        <form onSubmit={formik.handleSubmit}>
            {showError && <span
                className={`subscription-message`}
            >
                {message}
            </span>}
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
                        formik.errors.email !== undefined
                        && formik.touched.email === true
                    }
                    helperText={
                        formik.errors.email !== undefined
                        && formik.touched.email === true
                            ? formik.errors.email
                            : ""
                    }
                    className="subscribe-input"
                />
                <CustomButton
                    title={isLoading ? "loading..." : "Subscribe"}
                    type="submit"
                    color="primary"
                    size="large"
                    disabled={isLoading && !isSuccess}
                />
            </Box>

            <Dialog onClose={() => { setUserAlert({ shown: false, message: "" }) } } open={userAlert.shown}>
                <DialogTitle>Subscription successful</DialogTitle>
                <Box>You have successfully subscribed to our profitable newsletter</Box>
            </Dialog>
        </form>
    );
}

const Footer = () => {
    const postUrl = `https://thefxfactor.us21.list-manage.com/subscribe/post?u=ba538f5c3f8ec09f6e2826d51&id=164f38dd0e`;

    return (
        <section className="footer-container">
            <section className="footer_text-content">
                <article>
                    <h1>Stay Informed !</h1>
                    <p>
                        Subscribe to our newsletter for the latest forex insights, market
                        updates, and exclusive offers. Join our community of traders and
                        enhance your forex journey.
                    </p>
                </article>
            </section>
            <section className="footer_form">
                <MailchimpSubscribe
                    url={postUrl}
                    render={({ status, message, subscribe }: any) => (
                        <SubscribeForm status={ status } message={ message } subscribe={ subscribe }/>
                    )}
                />
            </section>
            <section className="footer_signature">
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
                    <MdLocationPin size={20} /> 78, Egbe Road, Iyana-Ejigbo, Lagos
                </p>
                <div className="footer_media">
                    <span className="footer_social-media_icons">
                        <Link
                            to="https://x.com/Fx_Factor?t=U_piOfAxgEJOgLUHjUwTig&s=09"
                            target="_blank"
                        >
                            <RiTwitterXFill />
                        </Link>
                    </span>
                    <span className="footer_social-media_icons">
                        <Link
                            to="https://instagram.com/trade.fxfactor?igshid=YTQwZjQ0NmI0OA=="
                            target="_blank"
                        >
                            <FaInstagram />
                        </Link>
                    </span>
                    <span className="footer_social-media_icons">
                        <Link to="https://t.me/+oq9BDZt0rk4zMDJk" target="_blank">
                            <LiaTelegram />
                        </Link>
                    </span>
                    <span className="footer_social-media_icons">
                        <Link
                            to="https://www.facebook.com/profile.php?id=61552635560767&mibextid=JRoKGi"
                            target="_blank"
                        >
                            <SlSocialFacebook />
                        </Link>
                    </span>
                </div>
            </section>
            <div className="footer-copyright">
                <p>copy right 2023 fx factor</p>
            </div>
            <div className="quick-action-container">
                <QuickAction />
            </div>
        </section>
    );
};

export default Footer;
