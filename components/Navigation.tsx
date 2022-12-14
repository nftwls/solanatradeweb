import React from 'react'
import { Container } from '@nextui-org/react'
import Link from 'next/link'

const Navigation = () => {
    return(
        <Container>
            <div className="flex items-center justify-between text-white my-10">
                <div className="">
                    <img src="/full-logo.svg"/>
                </div>
                <div className="text-dull-gray text-sm font-semibold w-fit grid grid-cols-3 grid-rows-1 gap-4">
                    <Link href="/" className="">Trade</Link>
                    <Link href="/" className="">Swap</Link>
                    <Link href="/" className="">Blog</Link>
                </div>
            </div>
        </Container>
    )
}

export default Navigation