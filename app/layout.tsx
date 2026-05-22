import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    template: '%s – VMKit Docs',
    default: 'VMKit Docs',
  },
  description: 'Deploy containers to your VMs. GitHub push, zero config.',
  metadataBase: new URL('https://docs.vmkit.dev'),
  openGraph: {
    images: [{ url: '/og.png' }],
  },
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                  VMKit
                </span>
              }
              projectLink="https://github.com/vmkit-dev"
            />
          }
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/vmkit-dev/docs.vmkit.dev/blob/main"
          footer={
            <Footer>
              <span>© {new Date().getFullYear()} VMKit. Built for developers who ship.</span>
            </Footer>
          }
          editLink="Edit this page on GitHub"
          feedback={{ content: 'Question? Give us feedback', labels: 'feedback' }}
          toc={{ float: true, title: 'On this page' }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
