import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import "./MainLayout.sass"

const MainLayout: React.FC = ({children}) =>
      <>
        <Header/>
        <main>
          <div className="page-container">
              {children!}
          </div>
        </main>
        <Footer/>
      </>
 
export default MainLayout;