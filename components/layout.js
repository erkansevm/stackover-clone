import BaseButton from './BaseButton';
import ButtonNoFill from './ButtonNoFill';
import Head from 'next/head';
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Stackover</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
      </Head>
      <nav>
        <ButtonNoFill>Giris Yap</ButtonNoFill>
        <BaseButton>KayıtOl</BaseButton>
      </nav>
      <br />
      <br />
      <main>{children}</main>
      <br />
      <br />
      <footer>Design by Ef Soft</footer>
    </div>
  );
}
