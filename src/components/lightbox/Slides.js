import { IMAGES_RATIO, IMAGE_BREAKPOINT } from '@/constants/gallery.constant'

export const getImagesProperties = (images) => {
    return images.map((photo) => {
        const width = IMAGE_BREAKPOINT[0]
        const height = (IMAGES_RATIO.height / IMAGES_RATIO.width) * width

        return {
            src: photo,
            width,
            height,
            images: IMAGE_BREAKPOINT.map((breakpoint) => {
                const height = Math.round(
                    (IMAGES_RATIO.height / IMAGES_RATIO.width) * breakpoint
                )
                return {
                    src: photo,
                    width: breakpoint,
                    height,
                }
            }),
        }
    })
}
