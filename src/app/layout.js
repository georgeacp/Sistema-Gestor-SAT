import Navbar from '@/components/Navbar'
import './globals.css'
import Asidebar from '@/components/Asidebar'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'SAT App',
  description: 'Gestor de multas e infracciones',
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></script>
        <link href="/assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="/assets/css/nucleo-svg.css" rel="stylesheet" />
        <script src="https://unpkg.com/@popperjs/core@2"></script>
        <link href="/assets/css/argon-dashboard-tailwind.css?v=1.0.1" rel="stylesheet" />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </head>
      <body className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
        <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
        <Navbar />
        <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
          <Asidebar />
          <div className='w-full px-6 mx-auto'>
            {children}
          </div>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </main>
      </body>
    </html>
  )
}
