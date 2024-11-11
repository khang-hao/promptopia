// import React from 'react'
import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { Suspense } from 'react'

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <Suspense>
    <html lang="en">
      <Provider>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
    </Suspense>
  );
}

export default RootLayout