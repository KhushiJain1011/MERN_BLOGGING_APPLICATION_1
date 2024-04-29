import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
)

const Chart = () => {
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/blog/myblogs",
        { withCredentials: true }
      );
      setMyBlogs(data.blogs);
    };
    fetchMyBlogs();
  });

  const publishBlogs = myBlogs && myBlogs.filter(blog => blog.published === true);
  const notPublishBlogs = myBlogs && myBlogs.filter(blog => blog.published === false);

  const data = {
    labels: ["Published", "Not Published"],
    datasets: [
      {
        label: "Blogs",
        data: [publishBlogs.length > 0 ? publishBlogs.length : 0,
        notPublishBlogs.length > 0 ? notPublishBlogs.length : 0],
        borderColor: ["#0e7490", "#facc15"],
        backgroundColor: ["#0e7490", "#facc15"],
        borderWidth: 1,
      }
    ]
  }

  return (
    <section
      className='chart-container'
      style={{ height: "90vh" }}
    >
      <h3>BLOG ANALYTICS</h3>
      <Doughnut data={data} style={{ height: "550px" }} />
    </section>
  )
}

export default Chart