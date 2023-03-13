import React from 'react'
import { Image } from 'react-bootstrap'
import './nav.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Nav() {
  return (
    <div className='nav_bar NAvBAr'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Image className='w-100 logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Series</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">NewPopular</a>
              </li>
              <div className=' seccond_potion'>
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  <SearchIcon />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Kid
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <NotificationsIcon />
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle avatar" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <Image className='w-100' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>

                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              </div>
             

            </ul>

          </div>
        </div>
      </nav>
    </div>

  )
}

export default Nav