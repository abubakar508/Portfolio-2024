import { sanityClient } from '@/lib/sanity'
import React from 'react'
import Card from './Card';

export const revalidate = 30;

const WebTwo = async ({ key} : any) => {
    async function getData() {
        const query = `
*[_type == 'web2'] {
    title,
      skillImage
  }
`

    const data = await sanityClient.fetch(query)

    return data;
    }

    const data = await getData()
  return (
    <div key={key} className=' grid grid-cols-3 gap-3'>
        {data.map((item: any, index:number) => (
            <Card item={item} index={index} />
        ))}
    </div>
  )
}

export default WebTwo;