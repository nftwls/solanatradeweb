import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@nextui-org/react'
import ProductList from 'components/Products'
import Navigation from 'components/Navigation'
import { FiArrowRight } from "react-icons/fi";
import FAQ from 'components/FAQ'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>SolanaTrade - Trade Any and Every Token Directly on the Solana Blockchain </title>
        <meta name="description" content="Trade Any and Every Token Directly on the Solana Blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container lg>
        <div className="h-full md:h-screen">
          <Navigation/>
          <Container md>
            <div className="grid auto-cols-auto md:grid-cols-2 auto-rows-auto md:grid-rows-1 items-center">
              <div className="grid grid-cols-1 auto-rows-auto gap-8">
                <span className="uppercase text-xs md:text-sm font-semibold text-sea-green">Trade on SolanaTrade</span>
                <h1 style={{ lineHeight: 1.2 }}className="text-pearl-white font-semibold text-4xl md:text-6xl">Trade Any and Every Token Directly on the Solana Blockchain</h1>
                <p className="text-dull-gray text-base md:text-lg">SolanaTrade is a decentralized exchange that allows you to maintain custody of your funds while you trade.</p>
                <a className="gradient_bg text-pearl-white flex items-center justify-between w-fit px-2 py-1 rounded-md" href="">
                  <p className="font-semibold">
                    Coming Soon
                  </p>
                  <FiArrowRight className="mx-2"/>
                </a>
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <img className="hidden md:block md:w-3/4" src="/rainbow-loop.png"/>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>

      <Container md>
        <div className="flex justify-center mb-20">
          <p className="mt-10 md:mt-0 leading-loose w-full md:w-1/2 text-center font-semibold text-2xl md:text-4xl text-pearl-white">
            Maintain custody of your crypto while you trade the <span className="text-sea-green">future of finance.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 auto-cols-auto md:grid-rows-2 gap-8">
          <ProductList 
            productIcon={<Image src="/trade-icon.svg" alt="SolanaTrade - Trade" width={84} height={84} />} 
            productName="Trade" 
            productDescription={`
            Trade on our non-custodial decentralized exchange powered by OpenBook with low-fees 
            and settlement powered by Solana.`}
            learnMore="https://solana.com" 
          />
          <ProductList 
            productIcon={<Image src="/swap-icon.svg" alt="SolanaTrade - Swap" width={84} height={84} />} 
            productName="Swap" 
            productDescription={`
            Swap between different SPL and wrapped tokens with the best rates on the market.`}
            learnMore="https://solana.com" 
          />
          <ProductList 
            productIcon={<Image src="/wallet-icon.svg" alt="Solana Logo" width={84} height={84} />} 
            productName="Wallet" 
            productDescription={`
            View your wallet balances in real-time. Send, receive tokens and buy Solana with your credit/debit card.
            `}
            learnMore="https://solana.com" 
          />
          <ProductList 
            productIcon={<Image src="/exchange-icon.svg" alt="Solana Logo" width={84} height={84} />} 
            productName="Blog" 
            productDescription={`
            Read the latest news from the Solana.Trade blog`}
            learnMore="https://solana.com" 
          />
        </div>
      </Container>

      <Container lg>
        <div className="grid grid-cols-1 auto-rows-auto md:grid-cols-2 md:grid-rows-1 gap-8 items-center my-20">
          <div>
            <div className="flex items-center justify-center">
              <img className="w-full" src="/trade-modal.svg"/>
          </div>
          </div>
          <div className="grid grid-cols-1 auto-rows-auto gap-8">
            <span className="uppercase text-sm font-semibold text-sea-green">Buy Crypto</span>
            <h1 style={{ lineHeight: 1.2 }}className="text-pearl-white font-semibold text-4xl md:text-6xl">Buy and sell crypto directly in your wallet</h1>
            <p className="text-dull-gray text-base md:text-lg">
              SolanaTrade offers lightning fast transactions and the best user experience. 
              Trade however you want, whenever you want. 
              <span className="text-sea-green"> Your keys, your coins.</span>
            </p>
            <a className="hidden gradient_bg text-pearl-white flex items-center justify-between w-48 px-6 py-3 rounded-md">
              <img src="/dollar-trade-now.svg"/>
              <p className="font-semibold">
                Trade Now
              </p>
              <FiArrowRight/>
            </a>
          </div>
        </div>
      </Container>

      <Container sm>
        <div className="grid grid-cols-1 auto-rows-auto gap-2 my-20">
          <div className="grid grid-cols-1 auto-rows-auto gap-2 text-center">
            <span className="text-sea-green font-medium">FAQ</span>
            <h2 className="text-4xl font-semibold text-pearl-white">Frequently Asked Questions</h2>
          </div>
          <div className="my-5 grid grid-cols-1 auto-rows-auto gap-6">
              <FAQ 
              question="What is SolanaTrade?" 
              answer="Solana.Trade is a decentralized exchange built on Openbook, a community-led fork of the Serum V3 program."
              open={true}/>
              <FAQ 
              question="What is a Decentrtaized Exchange?" 
              answer={`A decentralized exchange is a peer-to-peer exchange that allows users to maintain custody of their own funds and trades are settled directly on the blockchain. 
              Solana.Trade is built on top of the Solana blockchain and trades are settled on the Solana blockchain.`}
              open={false}/>
              <FAQ 
              question="Is Solana.Trade affiliated with Solana Foundation or Solana Labs?" 
              answer={`Solana.Trade is built on the Solana blockchain. 
              Solana.Trade is not affiliated with Solana Foundation or Solana Labs.`}
              open={false}/>
              <FAQ 
              question="Who can I contact for help?" 
              answer={`Join the Solana.Trade Discord here: `}
              open={false}/>
          </div>
        </div>
      </Container>

      <Footer/>
    </>
  )
}
