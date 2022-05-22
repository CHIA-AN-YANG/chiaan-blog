import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>

      <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" // load after the page content has been loaded
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1 className="title">Question: how request is processed?</h1>
      <p className="description">
        Go {" "}
      <Link href="/">
          <a>home</a>
        </Link>
        </p>
      <Image
        src="/images/send-requst-process.png" // Route of the image file
        height={380}
        width={750}
        alt="request cycle"
      />
      </Layout>

    </>
  );
}
