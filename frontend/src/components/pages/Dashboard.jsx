import React, { useContext, useState } from 'react'
import { Context } from '../../main'
import { Navigate } from 'react-router-dom';
import SideBar from "../layout/SideBar";
import MyProfile from "../miniComponents/MyProfile";
import CreateBlog from "../miniComponents/CreateBlog";
import Chart from "../miniComponents/Chart";
import MyBlogs from "../miniComponents/MyBlogs";


const Dashboard = () => {
  const [component, setComponent] = useState("MyBlogs");
  const { mode, isAuthenticated, user } = useContext(Context);
  if (!isAuthenticated || user.role === "Reader") {
    return <Navigate to={'/'} />
  }
  return (
    <section className={mode === "dark" ? "dark-bg dashboard" : "light-bg dashboard"}>
      <SideBar component={component} setComponent={setComponent} />
      {
        component === "My Profile" ? (
          <MyProfile />
        ) : component === "Create Blog" ? (
          <CreateBlog />
        ) : component === "Chart" ? (
          <Chart />
        ) : (
          <MyBlogs />
        )
      }
    </section>
  )
}

export default Dashboard