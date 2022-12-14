import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@nextui-org/react'
import ProductList from 'components/Products'
import Navigation from 'components/Navigation'
import { HiArrowNarrowRight } from "react-icons/hi";
import FAQ from 'components/FAQ'
import Footer from 'components/Footer'
import {Token} from 'components/Token'
import { LinkComponent } from 'components/LinkComponent'
import { Disclosure } from '@headlessui/react'
import { FiChevronDown } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Head>
        <title>SolanaTrade - Trade Any and Every Token Directly on the Solana Blockchain </title>
        <meta name="description" content="Trade Any and Every Token Directly on the Solana Blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
      <Container lg>
          <Navigation/>
          <Container md>
            <div className="my-20 text-center md:text-left grid auto-cols-auto md:grid-cols-2 auto-rows-auto md:grid-rows-1 items-center">
              <div className="grid grid-cols-1 auto-rows-auto gap-4">
                <span className="uppercase text-xs md:text-sm font-semibold text-sea-green">Trade on SolanaTrade</span>
                <h1 style={{ lineHeight: 1.2 }}className="text-pearl-white font-semibold text-4xl md:text-6xl">Trade Any and Every Token Directly on the Solana Blockchain</h1>
                <p className="text-dull-gray text-base md:text-lg">SolanaTrade is a decentralized exchange that allows you to maintain custody of your funds while you trade.</p>
                <div className="flex justify-center md:justify-start">
                  <Link className="gradient_bg text-pearl-white font-semibold flex items-center w-fit px-4 py-2 rounded-md" href="/">
                      Coming soon
                    <HiArrowNarrowRight className="ml-2"/>
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <img className="hidden md:block md:w-80" src="/rainbow-loop.png"/>
                </div>
              </div>
            </div>
          </Container>
      </Container>
      </div>

      <div className="relative w-full overflow-hidden flex items-center h-56">

        {/* PURPLE BANNER */}
        <div style={{ 
            transform: 'rotate(4deg)',
          }} 
          className="absolute w-full h-12 md:h-20 bg-st-purple flex justify-center">
          <div className="grid grid-rows-1 grid-cols-6 w-screen gap-4">
            <Token color="#FAFAFF" mint="DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ"/>
            <Token color="#FAFAFF" mint="USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"/>
            <Token color="#FAFAFF" mint="SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp"/>
            <Token color="#FAFAFF" mint="EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"/>
            <Token color="#FAFAFF" mint="Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"/>
            <Token color="#FAFAFF" mint="7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"/>
          </div>
        </div>

        {/* SEA GREEN BANNER */}
        <div
          style={{
            transform: 'rotate(-4deg)',
          }} 
          className="absolute w-full h-12 md:h-20 bg-sea-green flex justify-center -rotate-12">
          <div className="grid grid-rows-1 grid-cols-6 w-screen gap-4">
            <Token color="#444444" mint="So11111111111111111111111111111111111111112"/>
            <Token color="#444444" mint="mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"/>
            <Token color="#444444" mint="SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp"/>
            <Token color="#444444" mint="EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"/>
            <Token color="#444444" mint="Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"/>
            <Token color="#444444" mint="orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE"/>
          </div>
        </div>

      </div>

      <Container md>
        <div className="flex justify-center my-20">
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
              <HiArrowNarrowRight/>
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
              question="What is a Decentralized Exchange?" 
              answer={`A decentralized exchange is a peer-to-peer exchange that allows users to maintain custody of their own funds and trades are settled directly on the blockchain. 
              Solana.Trade is built on top of the Solana blockchain and trades are settled on the Solana blockchain.`}
              open={false}/>
              <FAQ 
              question="Is Solana.Trade affiliated with Solana Foundation or Solana Labs?" 
              answer={`Solana.Trade is built on the Solana blockchain. 
              Solana.Trade is not affiliated with Solana Foundation or Solana Labs.`}
              open={false}/>

              <div className="secondary_container rounded-lg p-3">
                <Disclosure>
                    <div>
                        <Disclosure.Button className="w-full">
                        {({ open }) => (
                            <div className="flex items-center justify-between text-left">
                                <span className="text-pearl-white text-sm md:text-lg font-medium">Who can I contact for help?</span>
                                <FiChevronDown
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-pearl-white border rounded-full`}
                                />
                            </div>
                        )}
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 text-base pt-5">
                            <span>Join the Solana.Trade Discord here: <a target="blank_" className="text-pearl-white font-medium" href="https://discord.gg/yCGAh6pRPq">https://discord.gg/yCGAh6pRPq</a></span>
                        </Disclosure.Panel>
                    </div>
                </Disclosure>
              </div>
          </div>
        </div>
      </Container>

      <Footer/>
    </>
  )
}
