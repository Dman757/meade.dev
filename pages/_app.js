// import App from 'next/app'
// import '../index.css';
import useHasMounted from 'components/utils/useHasMounted';
import { toggleTheme } from 'components/ThemeContext';

function App({ Component, pageProps }) {
  const hasMounted = useHasMounted();
  if (hasMounted) {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme) {
      toggleTheme(localStorageTheme);
    }
  }

  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
