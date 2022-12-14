import BN from "bn.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import moment from 'moment'

// function that takes an ISO 8601 date and returns time ago in words
export function timeAgo(date: string) {
  return moment(date).fromNow();
}

export function formatUSD(number:number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function formatAbbreviationNumber(num:number) {
  if (num >= 1000000000) {
      return `${formatDollar(num/1000000000)}B`
  } else if (num >= 1000000) {
      return `${formatDollar(num/1000000)}M`
  } else {
      return `${formatDollar(num)}`
  }
}

export function formatDollar(num:number) {
    var p = num.toFixed(2).split(".");
    return ["$", p[0].split("").reverse().reduce(function(acc:any, num:any, i:any) {
        return num + (i && !(i % 3) ? "," : "") + acc;
    }, "."), p[1]].join("");
}

export function formatPrettyNumber(num:number) {
  var p = num.toFixed(2).split(".");
  return [p[0].split("").reverse().reduce(function(acc:any, num:any, i:any) {
      return num + (i && !(i % 3) ? "," : "") + acc;
  }, "."), p[1]].join("");
}

export function formatNumber(num:number) {
  var p = num.toFixed(2).split(".");
  return [p[0].split("").reverse().reduce(function(acc:any, num:any, i:any) {
      return num + (i && !(i % 3) ? "," : "") + acc;
  }, "."), p[1]].join("");
}

export function formatNumberFourDigits(num:number) {
  var p = num.toFixed(4).split(".");
  return [p[0].split("").reverse().reduce(function(acc:any, num:any, i:any) {
      return num + (i && !(i % 3) ? "," : "") + acc;
  }, "."), p[1]].join("");
}

export function lamportsToSol(lamports: number | BN): number {
  if (typeof lamports === "number") {
    return Math.abs(lamports) / LAMPORTS_PER_SOL;
  }

  let signMultiplier = 1;
  if (lamports.isNeg()) {
    signMultiplier = -1;
  }

  const absLamports = lamports.abs();
  const lamportsString = absLamports.toString(10).padStart(10, "0");
  const splitIndex = lamportsString.length - 9;
  const solString =
    lamportsString.slice(0, splitIndex) +
    "." +
    lamportsString.slice(splitIndex);
  return signMultiplier * parseFloat(solString);
}


//function that takes lamports as any and returns the number divided by LAMPORTS_PER_SOL
export function lamportsToSolString(lamports: any): string {
    return lamportsToSol(lamports).toString();
}

// function that takes in a wallet address as a string and returns the first 4 and last 4 characters of the address 
export function formatWalletAddress(address: any): any {
    return address.slice(0, 4) + "..." + address.slice(-4);
}

export const formatTimeAgo = (tickFormat: any) => {
  return moment.unix(tickFormat).fromNow();
};

export const formatTimeAgoISO = (tickFormat: any) => {
  return moment.unix(tickFormat).fromNow();
};

export function truncateString(str:any, num:number) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}