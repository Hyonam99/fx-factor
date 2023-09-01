import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CustomAccordionProps {
    title: string
    miniDetails?: string
    mainContent?: any
    itemIndex: number
    className?: string
    caStyle?: string
}
const CustomAccordion = (props: CustomAccordionProps) => {
    const { title, miniDetails, mainContent, itemIndex, className, caStyle } = props
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange
    = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{ marginBottom: '8px' }} className={caStyle}>
            <Accordion expanded={expanded === `panel${itemIndex}`} onChange={handleChange(`panel${itemIndex}`)} className={className}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: `${miniDetails !== undefined ? '53%' : '100%'}`, flexShrink: 0 }}>
                        {title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        {expanded === false && miniDetails}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {mainContent}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default CustomAccordion
