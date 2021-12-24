import './TopBar.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurButton from './OurButton';

export default function TopBar() {
    return(
        <header>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
          <nav className="navbar navbar-expand-lg dark-theme py-3">
            <OurButton type='button'>Attempt 1</OurButton>
          </nav>
        </header>
      );
}