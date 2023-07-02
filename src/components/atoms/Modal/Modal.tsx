'use-client';
import { RiCloseLine } from 'react-icons/ri';
import styles from './Modal.module.scss';

export interface ModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  withCloseButton?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  withCloseButton,
  children,
  isOpen,
  className,
}) => {
  return (
    <div>
      {isOpen && (
        <>
          <div className={styles.Modal_darkBackground} />
          <div
            className={`${styles.Modal} ${className ? ` ${className}` : ''}`}
          >
            {withCloseButton && (
              <button
                className={styles.Modal_closeButton}
                onClick={() => onClose(!isOpen)}
              >
                <RiCloseLine height={16} width={16} />
              </button>
            )}
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
