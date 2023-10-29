import React from "react";
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { FaTelegram, FaFacebook } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import { Box } from "@mui/material";
import { CustomButton, InputField } from "components/components-exports";
import './footer.scss';
import { Link } from "react-router-dom";

const Footer = () => {

    const newsLetterSchema = Yup.object().shape({
        email: Yup.string().required('email address is required').email('invalid email format')
    })

    const formik = useFormik({
        initialValues: { email: '' },
        validateOnBlur: true,
        validationSchema: newsLetterSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <section className="footer-container">
            <section className="footer_text-content">
                <article>
                    <h1>Stay Informed !</h1>
                    <p>Subscribe to our newsletter for the latest forex insights,
                         market updates, and exclusive offers. Join our community of traders
                         and enhance your forex journey.
                    </p>
                </article>
            </section>
            <section className="footer_form">
                <form onSubmit={formik.handleSubmit}>
                    <Box className="subscribe_form-wrapper">
                        <InputField
                            id="email"
                            label="Email Address"
                            type='email'
                            variant="filled"
                            size='small'
                            margin='none'
                            onChange={formik.handleChange}
                            error={formik.errors.email !== undefined && (formik.touched.email === true)}
                            helperText={(formik.errors.email !== undefined && (formik.touched.email === true)) ? formik.errors.email : ""}
                            className="subscribe-input"
                        />
                        <CustomButton title="Subscribe" type='submit' color="primary" size="large"/>
                    </Box>
                </form>
            </section>
            <section className="footer_signature">
                <Box>
                    <img src={'https://res.cloudinary.com/maesan-product/image/upload/v1698565851/fx-factor/logo-short-clipped_bmuu6l.png'} alt='fx-factor-logo' className='footer_logo-short'/>
                </Box>
                <p> <MdLocationPin size={20}/> 78, Egbe Road, Iyana-Ejigbo</p>
                <div className="footer_media">
                    <span className="footer_social-media_icons">
                        <Link to="https://twitter.com/Fx_Factor?t=nFu0rZmr2YhaQVRTT5tz8Q&s=09" target="_blank">
                            <RiTwitterXFill />
                        </Link>
                    </span>
                    <span className="footer_social-media_icons">
                        <Link to="https://t.me/+oq9BDZt0rk4zMDJk" target="_blank">
                            <FaTelegram />
                        </Link>
                    </span>
                    <span className="footer_social-media_icons">
                        <Link to="https://www.facebook.com/profile.php?id=61552635560767&mibextid=ZbWKwL" target="_blank">
                            <FaFacebook />
                        </Link>
                    </span>
                </div>
            </section>
            <div className="footer-copyright"><p>copy right 2023 fx factor</p></div>
        </section>
    )
};

export default Footer;
