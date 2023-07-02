'use client';
import { useState } from 'react';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './Accordions.module.scss';

export interface AccordionsProps {
  title?: string;
  body?: string;
  isMObile?: boolean;
}

const Accordions: React.FC<AccordionsProps> = ({ title, body, isMObile }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const chevronOpen = open ? styles[`Accordions___open`] : '';
  const styleTitle = isMObile ? styles[`Accordions___titleMobile`] : '';

  return (
    <>
      <Accordion className={styles.Accordions} open={open}>
        <AccordionHeader className={styles.Accordions_wrapper}>
          <span className={`${styles.Accordions___title} ${styleTitle}`}>
            {title}
          </span>
          <FaChevronDown
            className={`${styles.Accordions_icon} ${chevronOpen}`}
            onClick={() => handleOpen()}
          />
        </AccordionHeader>
        {open && <AccordionBody>{body}</AccordionBody>}
      </Accordion>
    </>
  );
};

export default Accordions;
