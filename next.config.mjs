import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: false,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
}

export default withNextra(nextConfig)
