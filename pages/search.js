import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import moment from 'moment'

const Search = () => {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query

  const formattedStartDate = moment(startDate).format('MM/DD/YYYY')
  const formattedEndDate = moment(endDate).format('MM/DD/YYYY')
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays - {range} - for {noOfGuests} guests
          </p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibity</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More Filters</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search
