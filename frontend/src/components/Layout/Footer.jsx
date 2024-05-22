import React, { useContext } from 'react'
import { Context } from '../../main'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  const { isAuthorized } = useContext(Context)
  return (
    <footer className={isAuthorized ? 'footerShow' : 'footerHide'}>
      <div>&copy; All Rights Reserved By Kritika Jain.</div>
      <div>
        <Link
          to={'https://www.linkedin.com/in/kritika-jain-62a34a301/'}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to={'kritikajain1503@gmail.com'} target="_blank">
          <FaEnvelope />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
