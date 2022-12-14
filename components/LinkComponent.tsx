import React from 'react'
import Link from 'next/link'

export const LinkComponent = (props: { href: any, className: any, children: any }) => {
    return(
        <Link className={props.className} href={props.href}>
            {props.children}
        </Link>
    )
}