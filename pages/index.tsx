import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Hero from '../components/hero'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import About from '../components/about'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const title = `Next.js Blog Example with ${CMS_NAME}`

  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <Hero />
          <About />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
