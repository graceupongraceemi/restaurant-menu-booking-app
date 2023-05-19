import { type AppType } from 'next/app';

import { trpc } from 'src/utils/trpc';

import '../styles/globals.css';
import '../styles/Calendar.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
