import React, { FC } from 'react'
import { FiArrowRight } from "react-icons/fi";

interface ProductListProps {
    productIcon: React.ReactNode;
    productName: string;
    productDescription: string;
    learnMore: string;
}

const ProductList: FC<ProductListProps> = ({ productIcon, productName, productDescription, learnMore  }) => {
    return(
        <div className="secondary_container rounded-xl p-6">
            <div className="-ml-2 mb-3">
                {productIcon}
            </div>
            <p className="text-white text-4xl font-medium mb-3">{productName}</p>
            <p className="text-dull-gray text-base mb-3">{productDescription}</p>
            <a 
                href={learnMore} 
                className="hidden mb-3 w-fit flex items-center justify-around gradient_product_bg text-base font-semibold text-pearl-white px-6 py-3 rounded-md">
                Learn More
                <FiArrowRight/>
            </a>
        </div>
    )
}

export default ProductList