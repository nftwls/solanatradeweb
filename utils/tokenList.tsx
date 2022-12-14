import React, { useEffect, useState } from 'react';
import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';
import { Loading } from "@nextui-org/react"
import useSWR from "swr";
import { formatAbbreviationNumber, formatDollar } from 'utils/formatters';

export const TokenIcon = (props: { mint: any }) => {
  const [tokenMap, setTokenMap] = useState<Map<string, TokenInfo>>(new Map());

  useEffect(() => {
    new TokenListProvider().resolve().then(tokens => {
      const tokenList = tokens.filterByChainId(101).getList();

      setTokenMap(tokenList.reduce((map, item) => {
        map.set(item.address, item);
        return map;
      },new Map()));
    });
  }, [setTokenMap]);

  const token = tokenMap.get(props.mint);
  if (!token || !token.logoURI) return null;

  return (
      <img
        className="rounded-full w-full h-full"
        src={token.logoURI} 
      />
  );
}

export const TokenName = (props: { mint: any }) => {
  const [tokenMap, setTokenMap] = useState<Map<string, TokenInfo>>(new Map());

  useEffect(() => {
    new TokenListProvider().resolve().then(tokens => {
      const tokenList = tokens.filterByChainId(101).getList();

      setTokenMap(tokenList.reduce((map, item) => {
        map.set(item.address, item);
        return map;
      },new Map()));
    });
  }, [setTokenMap]);

  const token = tokenMap.get(props.mint);
  if (!token || !token.name) return null;

  return(
    <>
      {token.name}
    </>
  )
}

export const TokenSymbol = (props: { mint: any }) => {
  const [tokenMap, setTokenMap] = useState<Map<string, TokenInfo>>(new Map());

  useEffect(() => {
    new TokenListProvider().resolve().then(tokens => {
      const tokenList = tokens.filterByChainId(101).getList();

      setTokenMap(tokenList.reduce((map, item) => {
        map.set(item.address, item);
        return map;
      },new Map()));
    });
  }, [setTokenMap]);

  const token = tokenMap.get(props.mint);
  if (!token || !token.symbol) return null;

  return(
    <>
      {token.symbol}
    </>
  )
}

export const TokenTotalPrice = (props: { tokenAddress: any, sumAmount: number }) => {
  // Set up SWR fetcher
  const fetcher = (url:any) => fetch(url).then((res) => res.json());
  const API_TO_JSON = `https://public-api.solscan.io/market/token/${props.tokenAddress}`;

  const { data, error } = useSWR(
    API_TO_JSON,
    fetcher
  );

  if (error) return <p>An error has occurred.</p>;
  if (!data) return <Loading type="points" />;
  
  return(
    <>
      {((data.priceUsdt) * props.sumAmount).toFixed(4)}
    </>
  )
}

export const SOLTotalPrice = (props: { solAmount: number }) => {
  // Set up SWR fetcher
  const fetcher = (url:any) => fetch(url).then((res) => res.json());
  const API_TO_JSON = `https://price.jup.ag/v1/price?id=SOL`;

  const { data, error } = useSWR(
    API_TO_JSON,
    fetcher,
    { refreshInterval: 1000000 }
  );

  if (error) return <p>An error has occurred.</p>;
  if (!data) return <Loading type="points" />;
  
  return (
    <>
      {formatDollar((data.data.price) * props.solAmount)}
    </>
  )
}

export const TokenPrice = (props: { mint: any }) => {
  // Set up SWR fetcher
  const fetcher = (url:any) => fetch(url).then((res) => res.json());
  const API_TO_JSON = `https://api.coingecko.com/api/v3/coins/solana/contract/${props.mint}`;

  const { data, error } = useSWR(
    API_TO_JSON,
    fetcher
  );

  if (error) return <p>An error has occurred.</p>;
  if (!data) return <Loading type="points" />;
  
  return data.market_data.current_price.usd;
}

export const JupiterTokenPrice = (props: { mint: any }) => {
  // Set up SWR fetcher
  const fetcher = (url:any) => fetch(url).then((res) => res.json());
  const API_TO_JSON = `https://price.jup.ag/v1/price?id=${props.mint}`;

  const { data, error } = useSWR(
    API_TO_JSON,
    fetcher
  );

  if (error) return <p>An error has occurred.</p>;
  if (!data) return <Loading type="points" />;
  
  return data.data.price;
}


export const TokenChange = (props: { tokenAddress: any }) => {
  // Set up SWR fetcher
  const fetcher = (url:any) => fetch(url).then((res) => res.json());
  const API_TO_JSON = `https://public-api.solscan.io/market/token/${props.tokenAddress}`;

  const { data, error } = useSWR(
    API_TO_JSON,
    fetcher
  );

  if (error) return <p>An error has occurred.</p>;
  if (!data) return <Loading type="points" />;
  
  return(
    <>
      <span className={`${data.priceChange24h < 0 ? "text-rose-400" : "text-emerald-400"}`}>
        {(data.priceChange24h).toFixed(2)}%
      </span>
    </>
  )
}








 