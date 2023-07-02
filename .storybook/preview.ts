import type { Preview } from '@storybook/react';
import '../src/styles/core.scss';
import { reactIntl } from './reactIntl';

const preview: Preview = {
  globals: {
    locale: reactIntl.defaultLocale,
    locales: {
      id: 'Indonesia',
      en: 'English',
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    reactIntl,
  },
};

export default preview;
