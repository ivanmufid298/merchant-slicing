'use client';
import { Button, Text } from '@/components/atoms';
import { AskMe } from '../AskMe';
import styles from './DashboardFooter.module.scss';

interface DashboardFooterProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
  isDesktop: boolean;
}

const DashboardFooter: React.FC<DashboardFooterProps> = ({
  onClick,
  isDesktop,
  onClose,
  isOpen,
}) => {
  return (
    <div className={styles.DashboardFooter}>
      <Text
        type="span"
        label="Something you want to ask?"
        className={styles.DashboardFooter_text}
      />
      <Button
        label="Ask Me"
        variant="outline"
        className={styles.DashboardFooter_btn}
        onClick={onClick}
      />
      {isOpen && <AskMe isDesktop={isDesktop} onClose={onClose} />}
    </div>
  );
};

export default DashboardFooter;
