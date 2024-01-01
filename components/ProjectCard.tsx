import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import React from 'react'

const ProjectCard = ({ item, index} : any) => {
  return (
    <div key={index}>
        <div>
            <span>
                {item.title}
            </span>
            <span>
                {item.desc}
            </span>
        </div>
        <div>
            <Image
            src={urlFor(item.projectImage).url()}
            width={400}
            height={400}
            alt={item.title}
            priority
            quality={100}
            />
        </div>
    </div>
  )
}

export default ProjectCard