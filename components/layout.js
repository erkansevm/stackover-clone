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
      <nav
        style={{
          width: '100%',
          backgroundColor: 'white',
          position: 'fixed',
          zIndex: '2',
          height: '50px',
        }}
      ></nav>

      <main>{children}</main>
    </div>
  );
}
