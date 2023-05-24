import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name='keywords' content='ninjas'/>
    </Head>
    <div> 
    
    <h1 className={styles.title}>Homepage</h1>

    <p className={styles.text}>The sections and pages of the docs are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your Next.js application. However, you can read them in any order or skip to the pages that apply to your use case.

At the top of the sidebar, you'll notice a dropdown menu that allows you to switch between the App Router the Pages Router features. Since there are features that are unique to each directory, it's important to keep track of which tab is selected.

On the right side of the page, you'll see a table of contents that makes it easier to navigate between sections of a page. The breadcrumbs at the top of the page will also indicate whether you're viewing App Router docs or Pages Router docs.
</p>
<Link href='/ninjas'>
  <div className={styles.btn} >See Ninja Listing</div>
</Link>

    </div>
    </>
    
  )
}
