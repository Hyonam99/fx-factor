import { Box } from "@mui/material";
import React from "react";
import { CustomAccordion } from "components/components-exports";
import { renderDemoFaq } from "mocked-data/mocked-data";
import { type FAQType } from "types/types";

import "./faq.scss";

const FAQ = (): React.JSX.Element => {
    const sampleQuestions = renderDemoFaq();
    const splitHalves = sampleQuestions.data.length;
    const split = sampleQuestions.data.length / 2 + 1;
    return (
        <>
            <section className="faq-container">
                <article>
                    <h1>Faq</h1>
                </article>
                <Box className="faq-content">
                    <Box className="faq-content-left">
                        {sampleQuestions.data
                            .slice(0, split)
                            .map((question: FAQType, i: number) => (
                                <CustomAccordion
                                    key={question.id}
                                    title={question.question}
                                    mainContent={question.explanation}
                                    itemIndex={i}
                                    className="faq-accordion"
                                />
                            ))}
                    </Box>
                    <Box className="faq-content-right">
                        {sampleQuestions.data
                            .slice(split, splitHalves)
                            .map((question: FAQType, i: number) => (
                                <CustomAccordion
                                    key={question.id}
                                    title={question.question}
                                    mainContent={question.explanation}
                                    itemIndex={i}
                                    className="faq-accordion"
                                />
                            ))}
                    </Box>
                </Box>
            </section>
        </>
    );
};

export default FAQ;
