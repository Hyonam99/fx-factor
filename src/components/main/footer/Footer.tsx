import React from "react";
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { FaTwitter, FaTelegram } from 'react-icons/fa';
import { Box } from "@mui/material";
import { CustomButton, InputField } from "components/components-exports";
import LogoShort from "assets/images/logo-short-clipped.png"
import './footer.scss';

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
                    <h1>Stay tuned!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo,
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus
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
                            error={formik.errors.email !== undefined}
                            helperText={formik.errors.email}
                            className="subscribe-input"
                        />
                        <CustomButton title="Subscribe" type='submit' color="primary" size="large"/>
                    </Box>
                </form>
            </section>
            <section className="footer_signature">
                <Box>
                    <img src={LogoShort} alt='fx-factor-logo' className='footer_logo-short'/>
                </Box>
                <p>copy right 2023 fx factor</p>
                <div className="footer_media">
                    <span className="footer_social-media_icons"><FaTwitter /></span>
                    <span className="footer_social-media_icons"><FaTelegram /></span>
                </div>
            </section>
        </section>
    )
};

export default Footer;
