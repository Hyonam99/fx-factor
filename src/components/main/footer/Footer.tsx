import React from "react";
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import './footer.scss';
import { Box } from "@mui/material";
import { CustomButton, InputField } from "components/components-exports";

const Footer = () => {

    const newsLetterSchema = Yup.object().shape({
        email: Yup.string().required('Subject name is required')
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
                            // error={true}
                            helperText="Incorrect email."
                            className="subscribe-input"
                        />
                        <CustomButton title="Subscribe" type='submit' color="primary" size="large"/>
                    </Box>
                </form>
            </section>
            <section className="footer_signature">
                <h2>FX</h2>
                <p>copy right 2023 fx factor</p>
                <div className="footer_media">
                    <span className="footer_social-media_icons"><FaFacebook /></span>
                    <span className="footer_social-media_icons"><FaTwitter /></span>
                    <span className="footer_social-media_icons"><RiWhatsappFill /></span>
                </div>
            </section>
        </section>
    )
};

export default Footer;
