import { appWithTranslation } from 'next-i18next';

import '../styles/_normalize.scss';
import '../styles/_mixin.scss';
import '../styles/_fonts.scss';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);