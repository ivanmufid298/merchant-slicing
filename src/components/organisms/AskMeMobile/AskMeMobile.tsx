'use client';
import { Button, Text } from '@/components/atoms';
import { fetchAskMeDtaState } from '@/redux-toolkit/app/askme/askme.slice';
import { useAppSelector } from '@/redux-toolkit/hooks';
import Image from 'next/image';
import { BsWhatsapp } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import logo from './../../../../public/good-doctor-logo.png';
import styles from './AskMeMobile.module.scss';

export interface AskMeMobileProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}
const AskMeMobile: React.FC<AskMeMobileProps> = ({ onClose }) => {
  const askMeData = useAppSelector(fetchAskMeDtaState);

  const waHandler = () => {
    const link = 'https://wa.me/' + askMeData?.actionType[0].to;
    window.open(link, '_blank', 'noreferrer');
  };

  const emailHandler = () => {
    const link =
      'mailto:' +
      askMeData?.actionType[1].to +
      '?subject=' +
      askMeData?.actionType[1].subject;
    window.open(link, '_blank', 'noreferrer');
  };

  return (
    <div className={styles.AskMeMobile}>
      <Button variant="unstyled" className="ml-3">
        <Image
          alt="Icon"
          height={22}
          width={22}
          src="/asset/icons/arrow-back.svg"
          onClick={() => onClose(false)}
        />
      </Button>
      <div className={styles.AskMeMobile_wrapper}>
        <div className={styles.AskMeMobile_logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={styles.AskMeMobile_content}>
          <Text className={styles.AskMeMobile_title} type="p">
            {askMeData?.title}
          </Text>
          <Text className={styles.AskMeMobile_label} type="p">
            {askMeData?.subTitle}
          </Text>
        </div>
        <div className={styles.AskMeMobile_form}>
          <Button
            variant="outline"
            className="hover:bg-primary-light gap-2"
            onClick={waHandler}
          >
            <BsWhatsapp height={20} width={20} />
            <Text type="label" className="hover:cursor-pointer">
              {askMeData?.actionType &&
                askMeData.actionType[0].type === 'whatsapp' &&
                'Via Whatsapp'}
            </Text>
          </Button>
          <Button
            variant="outline"
            className="hover:bg-primary-light gap-2"
            onClick={emailHandler}
          >
            <CiMail height={16.5} width={19.5} strokeWidth={1} />
            <Text type="label" className="hover:cursor-pointer">
              {askMeData?.actionType.length === 2 &&
                askMeData.actionType[1].type === 'email' &&
                'Via Email'}
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AskMeMobile;
