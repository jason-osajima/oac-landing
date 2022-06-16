import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
        <div>
          <div className="grid pt-20 place-items-center ">
            <img
              className="w-64"
              src="/img/OAC_Logo-01.png"
              alt="Logo"
            />
            <p className="h-20 pt-12 text-2xl px-2 font-mono text-heavy-metal text-center">
              New frontiers. Together. Trailhead opens soon.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8 mt-4 md:mt-0">
              <a href="https://twitter.com/oacdao">
                <svg
                  className="w-12 h-12 text-red-damask hover:text-light-red-damask fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>
              <a href="https://medium.com/@outdooradventureclub">
                <svg className="w-12 h-12 text-red-damask hover:text-light-red-damask fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2.426 14.741h-3.574v-.202l1.261-1.529c.134-.139.195-.335.162-.526v-5.304c.015-.147-.041-.293-.151-.392l-1.121-1.35v-.201h3.479l2.689 5.897 2.364-5.897h3.317v.201l-.958.919c-.083.063-.124.166-.106.269v6.748c-.018.103.023.206.106.269l.936.919v.201h-4.706v-.201l.969-.941c.095-.095.095-.123.095-.269v-5.455l-2.695 6.844h-.364l-3.137-6.844v4.587c-.026.193.038.387.174.526l1.26 1.529v.202z"/></svg>
              </a>
            </div>
          </div>
        </div>
  )
}
