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




// =========================
// import { useScroll } from 'framer-motion';
// import React, { useEffect, useState } from 'react'
// import MyComponent from './MyComponent';

// const mass = () => {
//   const [message, setMessage] = useState([]);

//   const fetchUrl = (url) => {
//     const api = url
//     fetch(api).then((res) => {
//       return res.json()
//     }).then((p) => {
//       console.log(p);
//       setMessage(p)
//     })
//   };

//   useEffect(() => {
//     fetchUrl("https://fakestoreapi.com/products")
//   }, []);

//   const divideElements = (array) => {
//     const groupedElements = [];
//     for (let i = 0; i < array.length; i += 6) {
//       groupedElements.push(array.slice(i, i + 6));
//     }
//     return groupedElements;
//   };

//   const renderData = () => {
//     const groupedMessages = divideElements(message);
    
//     return groupedMessages.map((group, groupIndex) => (
//     <>
//      <div key={groupIndex} className="group">
//         {group.map((item) => (
//           <MyComponent key={item.id} {...item} />
//         ))}
//       </div>
//     </>
//     ));
//   };

//   return (
//     <div>
//       {renderData()}
//     </div>
//   )
// }

// export default mass