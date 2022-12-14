import React from 'react'
import Link from 'next/link'

interface FooterListProps {
    title: string;
    list: string[];
    link: string[];
}

export default function FooterList({ title, list, link }: FooterListProps) {
    return(
        <div className="flex-cols grid-cols-1 auto-rows-auto">
            <p className="text-pearl-white text-2xl font-semibold mb-2">{title}</p>
            <ul className="text-dull-gray text-xs">
                {list.map((item, index) => (
                    <li key={index} className="text-sm">
                        <Link href={link[index]}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}


// export default function FooterList({ title, list }: FooterListProps) {
//     return(
//         <div className="flex-cols grid-cols-1 auto-rows-auto">
//             <p className="text-pearl-white text-2xl font-semibold mb-2">{title}</p>
//             <ul className="text-dull-gray text-xs">
//                 {list.map((item, index) => (
//                     <li key={index} className="text-sm">
//                         {item}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }