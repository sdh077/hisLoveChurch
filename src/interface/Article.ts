import { type ImageProps } from 'next/image'

export default interface Article {
    date: string
    title: string
    description: string
    author: {
        name: string
        role: string
        image: ImagePropsWithOptionalAlt
    }
}
type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }
