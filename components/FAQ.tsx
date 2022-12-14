import React, { FC } from 'react'
import { Disclosure } from '@headlessui/react'
import { FiChevronDown } from "react-icons/fi";

interface FAQProps {
    question: string;
    answer: string;
    open: boolean;
}

const FAQ: FC<FAQProps> = ({ question, answer, open }) => {
    return(
      <div className="secondary_container rounded-lg p-3">
        <Disclosure defaultOpen={open}>
            <div>
                <Disclosure.Button className="w-full">
                {({ open }) => (
                    <div className="flex items-center justify-between text-left">
                        <span className="text-pearl-white text-sm md:text-lg font-medium w-3/4 md:w-full">{question}</span>
                        <FiChevronDown
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-pearl-white border rounded-full`}
                        />
                    </div>
                )}
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 text-xs md:text-sm pt-2.5">
                    {answer}
                </Disclosure.Panel>
            </div>
        </Disclosure>
      </div>
    )
}

export default FAQ
