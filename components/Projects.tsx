import { sanityClient } from '@/lib/sanity'
import React from 'react'
import Card from './Card';
import ProjectCard from './ProjectCard';

export const revalidate = 30;

const Projects = async () => {
    async function getData() {
        const query = `
        *[_type == 'projects'] {
            title,
              projectImage
          }
          `

          const data =  await sanityClient.fetch(query);

          return data;

          
    }
    const data = await getData()
    console.log(data)
  return (
    <div className=' flex flex-col itemsc justify-center lg:px-24 text-center pt-24'>
        <div>
            <span className=' font-bold text-2xl'>
                Existing Projects
            </span>
        </div>
        <div>
            {data.map((item: any, index: number) => {
                <ProjectCard item={item} index={index} />
            })}
        </div>
    </div>
  )
}

export default Projects