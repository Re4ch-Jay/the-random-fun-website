import './globals.css'
import React from 'react'


export const metadata  = {
  title: {
    default: "The Random Fun Website",
  },
  description: "Welcome to the Random Fun Website Generator! Experience a delightful journey through the realms of the internet with just a click of a button.",
  icons: {
    icon: '/logo.png'
  },
  type: "website",
  openGraph: {
    title: {
      default: "The Random Fun Website",
    },
    description: "Welcome to the Random Fun Website Generator! Experience a delightful journey through the realms of the internet with just a click of a button.",
    type: "website",
    images: [
      {
        url: '/banner.png',
        secureUrl: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Phat Panhareach',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@panhareach_phat',
    title: {
      default: "The Random Fun Website",
    },
    description: "Welcome to the Random Fun Website Generator! Experience a delightful journey through the realms of the internet with just a click of a button.",
    creator: '@panhareach_phat',
    images: {
      url: '/banner.png',
      alt: 'Phat Panhareach',
    }
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-300">{children}</body>
    </html>
  )
}
