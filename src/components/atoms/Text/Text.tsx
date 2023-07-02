'use client';

import { TextDiv } from './TextDiv';
import { TextLabel } from './TextLabel';
import { TextParagraph } from './TextParagraph';
import { TextSpan } from './TextSpan';

export interface TextProps {
  label?: string;
  children?: React.ReactNode;
  type?: 'span' | 'label' | 'p';
  variant?:
    | 'regular12'
    | 'regular14'
    | 'regular16'
    | 'semiBold10'
    | 'semiBold12'
    | 'semiBold14'
    | 'semiBold16'
    | 'semiBold20'
    | 'semiBold24'
    | 'bold12'
    | 'bold14'
    | 'bold16';
  className?: string;
  formatted?: boolean;
}

const Text: React.FC<TextProps> = ({
  label,
  children,
  type = 'div',
  variant,
  className,
  formatted,
}) => {
  switch (type) {
    case 'span':
      return (
        <TextSpan
          label={label}
          variant={variant}
          className={className}
          formatted={formatted}
        >
          {children}
        </TextSpan>
      );
    case 'label':
      return (
        <TextLabel
          label={label}
          variant={variant}
          className={className}
          formatted={formatted}
        >
          {children}
        </TextLabel>
      );
    case 'p':
      return (
        <TextParagraph
          label={label}
          variant={variant}
          className={className}
          formatted={formatted}
        >
          {children}
        </TextParagraph>
      );
    default:
      return (
        <TextDiv
          label={label}
          variant={variant}
          className={className}
          formatted={formatted}
        >
          {children}
        </TextDiv>
      );
  }
};

export default Text;
