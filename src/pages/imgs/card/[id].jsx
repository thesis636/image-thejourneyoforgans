// import { Html, Head, NextScript } from "next/document";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Card() {
  const router = useRouter();
  const query = router.query;

  const [pathUrl, setPathUrl] = React.useState("");

  React.useEffect(() => {
    if (query.id) {
      console.log(query.id);
      setPathUrl(`/img/${query.id}.PNG`);
    }
  }, [query.id]);

  return (
    <>
      <Head>
        <meta property="og:image" content={pathUrl} />
      </Head>
      {query.id && (
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={pathUrl}
          alt="Logo"
          width={1620}
          height={2880}
          priority
        />
      )}
    </>
  );
}
