import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './MainLayout.sass'

const MainLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>
      <div className="page-container">{children!}</div>
    </main>
    <Footer />
  </>
)

export default MainLayout
