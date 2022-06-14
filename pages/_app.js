import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-quill-gray min-h-screen w-full">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
