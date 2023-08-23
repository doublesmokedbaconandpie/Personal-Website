import Image from 'next/image';
import Link from 'next/link';

import './globals.css'
import './local.css'
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
        <nav id='navBar'>
          <ul id='mainMenu' className='flex justify-center text-center'>
            <li><a href='/'>Home</a></li>
            <li><a href='/education'>Education</a></li>
            <li><a href='/experience'>Experience</a></li>
            <li><a href='/projects'>Projects</a></li>
            <li><a href='/hobbies'>Hobbies</a></li>
          </ul>
        </nav>
        {children}
        <div id='platformNotice'>
          Check me out on other platforms:
        </div>
        <div id='redirects' className='flex items-center justify-center'>
          {imageIcon('LinkedIn', '/linkedin.png', 'https://www.linkedin.com/in/kevin-nguyen-89326a242/')}
          {imageIcon('Github', '/github-mark.png', 'https://github.com/knguy22')}
        </div>
      </body>
    </html>
  )
}


function imageIcon(profileName, imageUrl, hrefUrl) {
  return (
    <Link href={hrefUrl} className='imageIconLink'>
      <Image
        src={imageUrl}
        width={150}
        height={150}
        alt={`${profileName} Profile Redirect`}
        className='imageIcon' />
    </Link>
  )
}