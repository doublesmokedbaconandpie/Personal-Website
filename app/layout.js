import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kevin Nguyen\'s Personal Accomplishments',
  description: 'Details the resume of Kevin Nguyen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul id='mainMenu'>
            <li><a href='/'>Home</a></li>
            <li><a href='/education'>Education</a></li>
            <li><a href='/projects'>Projects</a></li>
            <li><a href='/hobbies'>Hobbies</a></li>
          </ul>
        </nav>
        <br></br>
        <br></br>
        {children}
      </body>
    </html>
  )
}
