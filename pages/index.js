import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, anywhereData }) {

  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />


      {/* Main */}

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className="pt-6">
          <h2 className='font-semibold text-4xl pb-4'>Explore Nearby</h2>
          {/* Call Api And getting data from server  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(value => <SmallCard className="" key={value.img} {...value} />)}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="font-semibold py-8 text-4xl">Live Anywhere</h2>
          <div className="flex space-x-4 scrollbar-hide overflow-scroll -ml-3 p-3">
            {anywhereData?.map(value => <MediumCard key={value.img} {...value} />)}
          </div>
        </section>


        <LargeCard img="https://links.papareact.com/4cj"
          title={'The Greates Outdoors'}
          desc="Wishlists curated by Airbnb"
          buttonText="Get Inspaired" />
      </main>

      <Footer />
    </div>
  )
}


export async function getStaticProps(context) {
  const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json())
  const anywhereData = await fetch("https://links.papareact.com/zp1").then((res) => res.json())

  return {
    props: {
      exploreData,
      anywhereData
    }
  }
}
