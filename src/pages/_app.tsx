import LanguageProvider from '@/providers/LanguageProvider';
import { store } from '@/redux-toolkit/store';
import '@/styles/core.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <div className="h-screen">
          <Component {...pageProps} />
        </div>
      </LanguageProvider>
    </Provider>
  );
}
