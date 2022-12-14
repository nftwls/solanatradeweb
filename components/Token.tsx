import React from 'react'
import useSWR from 'swr'
import { TokenIcon, TokenSymbol, TokenName, TokenPrice } from 'utils/tokenList'

export const Token = (props: { mint: any, color:any }) => {
    return(
        <div className="flex justify-center">
            <div style={{ 
                    color: props.color,
                }}  
                className="flex items-center">
                <div className="hidden md:block md:w-7 md:h-7 mr-2">
                    <TokenIcon mint={props.mint} />
                </div>
                <div className="grid grid-cols-1 grid-rows-2">
                    <span className="text-xs font-extrabold">
                        <TokenSymbol mint={props.mint} />
                    </span>
                    <span className="text-xs">
                        $<TokenPrice mint={props.mint} />
                    </span>
                </div>
            </div>
        </div>
    )
    
}