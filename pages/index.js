import Head from "next/head";
import Calls from "../components/Calls";
import ConnectWallet from "../components/ConnectWallet";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Making API Calls</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
        <nav className="px-2 py-2">
          <ConnectWallet />
        </nav>
        <h1 className="text-center mt-10 mb-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900">API Call Samples</h1>
        <div className="flex flex-col items-center justify-center">
          <Calls />
        </div>
      </main>
    </div>
  );
}
