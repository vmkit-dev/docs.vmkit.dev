import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: false,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
}

export default withNextra(nextConfig)
