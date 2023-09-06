import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import Dashboard from '../components/Dashboard/Dashboard'
// import UserDashboard from '../components/Dashboard/UserDashboard'
import UserSideBar from '../components/Dashboard/UserSideBar'
// import Home from '../components/Dashboard/Home'
// import Markup from '../components/Dashboard'
// import SideBar from '../components/Dashboard/nav/SideBar'
// import {index} from '../components/Dashboard/index';
// import Nav from '../components/Dashboard/nav'

const Account = () => {
  return (
    <Div className=''>
      <UserSideBar/>
      {/* <Dashboard/> */}
      <Outlet/>
    </Div>
  )
}

export default Account

const Div = styled.div`
  position: relative;
`;