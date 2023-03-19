import Layout from '@/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/banner.css'
import '@/styles/quick-service.css'
import '@/styles/navbar.css'
import '@/styles/footer.css'
import '@/styles/achievements.css'
import '@/styles/securitySolution.css'
import '@/styles/urgent.css'
import '@/styles/service.css'
import '@/styles/testimonial.css'
import '@/styles/gallery.css'
import '@/styles/purpose.css'
import '@/styles/benefits.css'
import '@/styles/pageBanner.css'
import '@/styles/map.css'
import '@/styles/contact.css'
import '@/styles/system.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/bundle'

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
