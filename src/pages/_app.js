import Layout from '@/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/footer.css'
import '@/styles/achievements.css'
import '@/styles/SecuritySolution.css'
import '@/styles/urgent.css'
import '@/styles/service.css'

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
