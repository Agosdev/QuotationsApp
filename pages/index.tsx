import Head from 'next/head'
import { BackgroundCon } from '@/components/molecules/QuoteGenerator/QuoteGeneratorElements'
import dynamic from 'next/dynamic'
const Background3D = dynamic(() => import('../components/organisms/Background3D/background3D'))

export default function Home() {

  return (
    <>
      <Head>
        <title>Quotations</title>
        <meta name="description" content="A project with Next js, typescript and AWS amplify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundCon>
        <Background3D />
      </BackgroundCon>
  
    </>
  )
}
