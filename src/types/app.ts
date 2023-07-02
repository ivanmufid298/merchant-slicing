import { MessageFormatElement } from 'react-intl';

export interface LanguageProps {
  id:
    | Record<string, string>
    | Record<string, MessageFormatElement[]>
    | undefined;
  en:
    | Record<string, string>
    | Record<string, MessageFormatElement[]>
    | undefined;
}

export interface PopupDialogProps {
  isOpen: boolean;
  title: string | null;
  message: string | null;
  actions?: PopupAction[];
  onClose?: () => void;
}

export interface PopupAction {
  label: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
  variant:
    | 'solid'
    | 'light'
    | 'outline'
    | 'error'
    | 'disabled'
    | 'unstyled'
    | 'small';
  className?: string;
}

export interface AlertProps {
  isOpen: boolean;
  message: string | null;
  autoClose?: number;
}
