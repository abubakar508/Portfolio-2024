import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import React from 'react'

const Card = ({ item, index}: any) => {
  return (
    <div key={index} className=' border-2 rounded-md p-2 flex flex-col items-center dark:bg-accent shadow-md'>
        <h1 className=' font-medium'>{item.title}</h1>
        <div>
            <Image
            src={urlFor(item.skillImage).url()}
            width={50}
            height={50}
            alt={item.title}
            priority
            quality={100}
            draggable={false}
            />
        </div>
    </div>
  )
}

export default Card