import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Intro from '../comps/Intro'
import Marquee from '../comps/Marquee'
import Header from '../comps/Header'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Megan Syukur</title>
        <meta name="description" content="Megan Syukur's Landing Page" />
        <link rel="icon" href="/logo.png" />
      </Head>

    <main className={styles.main}>
      <Header/>

        <div style={{display:'flex', flexDirection:'row', marginTop:''}}>
        <Intro/>
        <Marquee/>
        </div>

        
    </main>

    </div>
  )
}
