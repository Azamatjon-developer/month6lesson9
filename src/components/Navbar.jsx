import React from 'react'
import { Link } from 'react-router-dom'
import Button from "../components/Button"
import Avatar from "../assets/images/BobirAVa.svg"
import {
  HomeIcon,
  ExploreIcon,
  NatificationIcon,
  TwitterLogo,
  BookmarksIcon,
  ListIcon,
  MessegesIcon,
  MoreIcon,
  ProfileIcon,
  DotsIcon,
  
} from '../assets/images/icons'

import NavbarItem from './NavbarItem'

function Navbar() {
    const userData = JSON.parse(window.localStorage.getItem("token"))
  const NavbarList = [
    {
      id: 1,
      title: 'Home',
      path: '/',
      icon: <HomeIcon />,
    },
    {
      id: 2,
      title: 'Explore',
      path: '/explore',
      icon: <ExploreIcon />,
    },
    {
      id: 3,
      title: 'Notifications',
      path: '/notifications',
      icon: <NatificationIcon />,
    },
    {
      id: 4,
      title: 'Messages',
      path: '/messages',
      icon: <MessegesIcon />,
    },
    {
      id: 5,
      title: 'Bookmarks',
      path: '/bookmarks',
      icon: <BookmarksIcon />,
    },
    {
      id: 6,
      title: 'Lists',
      path: '/lists',
      icon: <ListIcon />,
    },
    {
      id: 7,
      title: 'Profile',
      path: '/profile',
      icon: <ProfileIcon />,
    },
    {
      id: 8,
      title: 'More',
      path: '/more',
      icon: <MoreIcon/>,
    },
  ]

  return (
    <div className="w-[20%] pt-[31px] pr-[53px] border-slate-500 border-r-[1px] h-[100vh] overflow-y-auto">
      <Link to={'/'}>
        <TwitterLogo />
      </Link>
      <ul className="mt-[49px] space-y-[30px] mb-[30px]">
        {NavbarList.map((item) => (
          <NavbarItem key={item.id} item={item} />
        ))}
      </ul>
      <Button title = {"Tweet"} type={"button"} />
      <div className='flex justify-between mt-[260px]'>
        <div className='flex space-x-2'>
        <img src= {Avatar} alt="AvatarIcon" width={50} height={50} />
        <div className='flex flex-col'>
            <strong className='copitalize'> {userData.login} </strong>
            <a href="mailto:bobur_mavlonov">@{userData.login}</a>
        </div>
        </div>
        <button>
            <DotsIcon/>

        </button>
      </div>
    </div>
  )
}

export default Navbar
