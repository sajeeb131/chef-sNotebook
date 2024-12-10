"use client"

import Link from "next/link";
import Image from 'next/image'
import profileImage from '@/public/assets/profile.jpg'
import Navbar from "../components/Navbar";
import { useState } from "react";

import './page.css'

import image1 from "@/public/assets/item1.jpg"
import image2 from "@/public/assets/item2.jpg"
import image3 from "@/public/assets/item3.jpg"
import ShowItem from "../components/Item";
import Footer from "../components/Footer";


const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Jacob",
    image: profileImage,
    review: 4,
    tag: "cook",
    bio: "Hi! i’m Jacob, a food blogger extraordinaire, captures the essence of global flavors through tantalizing visuals and vivid storytelling. From city markets to hidden gems, Alex's blog is a culinary adventure that invites readers to indulge in the art of gastronomy. Savor the world one delicious post at a time!",
    likes: "268",
    follower: "120",
    review: "28"
  });
  const [recipe, setRecipe] = useState([
    {no:1, name: "Egg Sandwich", image: image1},
    {no:2 , name: "Watermalon motijo", image: image2},
    {no:3, name: "Pasta", image: image3}
  ])
 

  return (
    <div>
      <Navbar/>
      <div className="profile-container">

      <header className="profile-header">
        <div className="flex flex-row items-center justify-between p-header-top">
        <div className="flex flex-row items-center gap-24 ph-top-left">
            <Image className="p-image" src={userData.image} alt="profile-image"/>
            <div className="p-info">
              <h1 className="heading-2">{userData.name}</h1>
              <h3 className="body-small">{userData.tag}</h3>
            </div>
          </div>
          <div className="ph-top-right">
            <Link href="#" className="text-3xl font-medium edit-button" >Edit Profile</Link>
          </div>
        </div>
        <div className="p-header-bottom">
          <p className="body-para">
            {userData.bio}
          </p>
        </div>
          
      </header>
      <section className="flex flex-row items-center gap-10 mt-20 profile-mid">
        <div className="flex flex-col items-center text-center gap-4 p-box">
          <h1>{userData.likes}</h1>
          <h3>LIKES</h3>
        </div>
        <div className=" flex flex-col items-center text-center gap-4 text-center p-box">
          <h1>{userData.follower}</h1>
          <h3>FOLLOWERS</h3>
        </div>
        <div className="flex flex-col items-center text-center gap-4  text-center p-box">
          <h1>{userData.review}</h1>
          <h3>REVIEWS</h3>
        </div>
      </section>
      <section className="p-recipe-posted">
        <ShowItem items={recipe} heading="Recipe Posted" />
      </section>
    </div>
    <Footer />
    </div>
    
  );
}

export default Profile;
  
  
