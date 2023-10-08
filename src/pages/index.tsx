import Head from "next/head";

import Folder from "./[...Folder]";

export default function Home() {
  return (
    <>
      <Head>
        <title>Google Drive Clone</title>
        <meta name="description" content="Google Drive Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Folder />
        </div>
      </main>
    </>
  );
}
