import LightboxComponent from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function Lightbox({ photos, ...restProps }) {
    return <LightboxComponent slides={photos} {...restProps} />
}
