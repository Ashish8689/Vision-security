import LightboxComponent from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function Lightbox({ index, images, ...restProps }) {
    return <LightboxComponent index={index} slides={images} {...restProps} />
}
