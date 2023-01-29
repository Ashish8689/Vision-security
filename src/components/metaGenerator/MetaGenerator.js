import React from 'react'
import { NextSeo } from 'next-seo'

const companyName = 'Deuex Solutions Pvt. Ltd.'
const hostName = process.env.HOST_NAME

const MetaGenerator = ({ metaData, link }) => {
    const { title, ogimage, description } = metaData || {}

    const url = `${hostName}${link}`

    return (
        <>
            <NextSeo
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: `${hostName}/favicon.ico`,
                    },
                ]}
                canonical={url}
                description={description}
                openGraph={{
                    url: url,
                    title,
                    description,
                    images: [
                        {
                            url: `${hostName}${ogimage}`,
                            width: 1200,
                            height: 628,
                        },
                    ],
                    site_name: companyName,
                }}
                title={title}
                twitter={{
                    site: '@deuexsolutions',
                    cardType: 'summary_large_image',
                }}
            />
        </>
    )
}

export default MetaGenerator
