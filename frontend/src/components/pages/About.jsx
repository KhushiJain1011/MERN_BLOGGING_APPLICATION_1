import React, { useContext } from 'react'
import { Context } from '../../main'

const About = () => {
  const { mode } = useContext(Context);

  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Welcome to WanderWritings, your ultimate destination for exploring the world through words! We are a passionate community of travel enthusiasts, food lovers, tech aficionados, and lifestyle seekers dedicated to sharing our adventures and insights.
        </p>
        <p>
          At WanderWritings, we believe that every journey tells a story. Our mission is to inspire you to explore new horizons, whether it’s through travel tips, culinary delights, or the latest in technology and lifestyle trends. Our diverse team of writers brings a wealth of experience and unique perspectives, ensuring that there’s something for everyone.
        </p>
        <h3>What you will find here: </h3>
        <ul>
          <p><b>Travel Adventures:</b> From hidden gems in bustling cities to serene escapes in nature, our travel blogs offer firsthand accounts, guides, and itineraries to help you make the most of your journeys.</p>
          <p><b>Culinary Journeys:</b> Explore the world through food! Discover recipes, restaurant reviews, and street food experiences that highlight the rich tapestry of global cuisines.</p>
          <p><b>Tech Insights:</b> Stay ahead of the curve with our coverage on the latest technology trends, gadgets, and innovations that shape our lives.</p>
          <p><b>Lifestyle Inspiration:</b> Embrace a fulfilling life with articles on wellness, minimalism, and personal development, curated to help you find balance and joy in everyday living.</p>
        </ul>
        <h3>Join Us</h3>
        <p>
          WanderWritings is more than just a blog; it's a community of explorers and storytellers. We invite you to share your thoughts, experiences, and travel tales with us. Connect with fellow wanderers through comments and social media, and let’s inspire each other to embark on new adventures!

          Thank you for joining us on this journey. We can’t wait to explore the world with you, one story at a time!
        </p>
        <br />
        <p>
          Happy Wandering!
        </p>
      </div>
    </article>
  )
}

export default About