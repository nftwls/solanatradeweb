import React from 'react'
import { Container } from '@nextui-org/react'

const Navigation = () => {
    return(
        <Container>
            <div className="flex items-center justify-between text-white my-10">
                <div className="">
                    <img src="/full-logo.svg"/>
                </div>
                <div className="text-dull-gray text-sm font-semibold w-fit grid grid-cols-3 grid-rows-1 gap-4">
                    <a href="/" className="">Trade</a>
                    <a href="/" className="">Swap</a>
                    <a href="/" className="">Blog</a>
                </div>
            </div>
        </Container>
    )
}

export default Navigation