import { Button, Modal, Text } from '@/components/atoms';
import { fetchAskMeDtaState } from '@/redux-toolkit/app/askme/askme.slice';
import { useAppSelector } from '@/redux-toolkit/hooks';
import Image from 'next/image';
import { BsWhatsapp } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import logo from './../../../../public/good-doctor-logo.png';
import styles from './AskMeDesktop.module.scss';

export interface AskMeDesktopProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const AskMeDesktop: React.FC<AskMeDesktopProps> = ({ onClose }) => {
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
    <Modal onClose={onClose} withCloseButton isOpen className="h-52">
      <div className={styles.AskMeDesktop}>
        <div className={styles.AskMeDesktop_logo}>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <div className={styles.AskMeDesktop_wrapper}>
          <Text className={styles.AskMeDesktop_title} type="p">
            {askMeData?.title}
          </Text>
          <Text className={styles.AskMeDesktop_label} type="p">
            {askMeData?.subTitle}
          </Text>
        </div>
        <div className={styles.AskMeDesktop_form}>
          <Button
            variant="outline"
            className="hover:bg-primary-light gap-2 w-[180px]"
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
            className="hover:bg-primary-light gap-2 w-[180px]"
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
    </Modal>
  );
};

export default AskMeDesktop;
