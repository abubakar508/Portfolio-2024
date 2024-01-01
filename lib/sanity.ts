import  ImageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";

export const sanityClient = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'bmrqw8yd'
})

const builder = ImageUrlBuilder(sanityClient)

export function urlFor(source: any) {
   return builder.image(source)
}