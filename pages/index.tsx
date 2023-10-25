import Head from 'next/head'
import Scene3D from '@/components/molecules/Scene3D/Scene3D'
import Layout3D from '@/components/molecules/Layout3D/Layout3D'
import GenerateQuotes from '@/components/organisms/GenerateQuotes/GenerateQuotes'

export default function Home() {

  return (
    <>
      <Head>
        <title>Quotations</title>
        <meta name="description" content="A project with Next js, typescript and AWS amplify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <Layout3D loading>
                <Scene3D HTMLContent={<GenerateQuotes />}/>
          </Layout3D>
     </>
  )
}
