import Image from 'next/image';
import React from 'react'

const MyComponent = (props : any) => {
    const { category, description, id, image, price, rating, title } = props;
    const { rate, count } = rating || {};
    return (
        <div>
            <div>{category}</div>
            <h4>{description}</h4>
            <h4>{id}</h4>
            <Image src={image} alt="test" width={50} height={50}/>
            <h4>{price}</h4>
            <h4>Rating: {rate} ({count} votes)</h4>
            <h4>{title}</h4>
        </div>
    )
}

export default MyComponent