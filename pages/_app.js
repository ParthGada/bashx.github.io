/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return (

    
    <div>
      <nav className=" p-6 bg-gray-900">
        
        <div className="flex space-x-4 ">
        <p className="text-4xl text-gray-100 px-3">bashible</p>
          <Link href="/">
            <a className="bg-gray-700 text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="bg-gray-700 text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="bg-gray-700 text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="bg-gray-700 text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp