import React, { useContext, useState } from "react";

import LobbyScreen from "../Components/VideoCall/Lobby";
import MentorDetail from "../Components/Mentors/MentorDetail";
import MentorCard from "../Components/Mentors/MentorCard";
import Articles from "../Components/Articles/Articles";
import { useNavigate } from "react-router-dom";
import ArticleDetail from "../Components/Articles/ArticleDetail";
import UserProfile from "../Components/UserProfile/UserProfile";
import { Logout } from "../Components/AuthContext/AuthActions";
import { AuthContext } from "../Components/AuthContext/AuthContext";
import Chats from "../Components/Chats/Chats";

const mentor = [
  {
    name: "Dr. John Doe",
    price: "$100",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero ut mi pretium volutpat. Ut ut rhoncus lorem. Cras et enim ac eros laoreet sagittis.",
    imageUrl:
      "https://thumbs.dreamstime.com/b/smiling-indian-man-looking-camera-mature-wearing-spectacles-portrait-middle-eastern-confident-businessman-office-195195079.jpg",
  },
  {
    name: "Dr. Jane Smith",
    price: "$120",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero ut mi pretium volutpat. Ut ut rhoncus lorem. Cras et enim ac eros laoreet sagittis.",
    imageUrl:
      "https://media.istockphoto.com/id/1319763830/photo/portrait-of-smiling-mixed-race-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=L0d04sc89UuLW0G80UCu4egl0tQwyl8PLKsIZotbP_U=",
  },
  {
    name: "Dr. Mark Johnson",
    price: "$90",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero ut mi pretium volutpat. Ut ut rhoncus lorem. Cras et enim ac eros laoreet sagittis.",
    imageUrl:
      "https://thumbs.dreamstime.com/b/smiling-years-old-middle-aged-business-man-standing-office-portrait-confident-older-bank-manager-investor-mid-adult-290494487.jpg",
  },
  {
    name: "Dr. Sarah Brown",
    price: "$110",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero ut mi pretium volutpat. Ut ut rhoncus lorem. Cras et enim ac eros laoreet sagittis.",
    imageUrl:
      "https://dq1eylutsoz4u.cloudfront.net/2017/01/30135945/women-in-their-40s1.jpg",
  },
  {
    name: "Dr. Michael Wilson",
    price: "$95",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero ut mi pretium volutpat. Ut ut rhoncus lorem. Cras et enim ac eros laoreet sagittis.",
    imageUrl:
      "https://t3.ftcdn.net/jpg/03/96/78/06/360_F_396780640_mO95sH5ITG2sD3RdOd7fh3olapEkupXW.jpg",
  },
];


const article = [
  {
      name: "Meera Iyer",
      title: "Embracing Vulnerability: The Path to Healing and Connection",
      details: "Discover the transformative power of vulnerability in fostering deep connections and resilience. Join us as we celebrate the courage it takes to share our truths and create a safe space where every voice is valued." ,
      imageUrl:"https://images.pexels.com/photos/6134922/pexels-photo-6134922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
      name: "Jane Smith",
      title: "Self-Care Sanctuary: Nurturing Your Mind, Body, and Soul",
      details: "Step into our sanctuary for self-care and embark on a journey to nurture your well-being. From mindfulness techniques to nourishing your body and fostering meaningful connections, prioritize yourself as you walk the path towards healing and wholeness. Your journey to self-care starts here.",
      imageUrl: "https://images.pexels.com/photos/8692129/pexels-photo-8692129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
      name: "Aarav Sharma",
      title: "Healing Through Creativity: Expressive Arts as a Path to Wholeness",
      details: "Unleash the transformative power of creativity in your healing journey. Dive into expressive arts, whether painting, music, or writing, to illuminate your inner world and foster emotional resilience. Join us in discovering the therapeutic potential of creativity as a tool for self-expression and growth.",
      imageUrl: "https://images.pexels.com/photos/3771079/pexels-photo-3771079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
      name: "Sarah Brown",
      title: "Cultivating Compassion: The Heart of Our Community",
      details: "Compassion is the heartbeat of our community, fostering connection and understanding. Embrace self-compassion, practice empathy in communication, and spread acts of kindness to create a supportive environment for all. Together, let's cultivate a culture of compassion and belonging.",
      imageUrl: "https://images.pexels.com/photos/7176302/pexels-photo-7176302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
      name: "Michael Wilson",
      title: "Weathering Life's Storms: Building Resilience in Times of Adversity",
      details: "Discover the art of resilience and find strength in life's challenges. Embrace change, cultivate optimism, and foster community connections to navigate storms with courage and grace. Join us in empowering yourself to rise above adversity and emerge stronger than ever before.",
      imageUrl: "https://media.licdn.com/dms/image/D4E12AQGcyRWSicgz1Q/article-cover_image-shrink_720_1280/0/1672716076034?e=2147483647&v=beta&t=hN7RWYXTfZCBoqYeRqsEP8Slt4UjbkWrYG17XkOKyX0",
    },
];

const DashBoard = () => {
  const [chatView, SetChatView] = useState(true);
  const [callView, SetCallView] = useState(false);
  const [MentorView, SetMentorView] = useState(false);
  const [MentorDetailView, SetMentorDetailView] = useState(false);
  const [ArticleView, SetArticleView] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [ArticleDetailView, SetArticleDetailView] = useState(false);
  const [userProfileView, SetuserProfileView] = useState(false);

  const navigate=useNavigate();

  const { dispatch } = useContext(AuthContext);

const storedUser = JSON.parse(localStorage.getItem("user"));

  const handleLogOutClick=async()=>{
    localStorage.removeItem("user");
    dispatch(Logout());
    navigate("/")
  }

  const handleMeetingClick = () => {
    SetCallView(true);
    SetChatView(false);
    SetMentorView(false);
    SetMentorDetailView(false);
    SetArticleView(false);
    SetArticleDetailView(false);
    SetuserProfileView(false);
  };

  const handleChatClick = () => {
    SetChatView(true);
    SetCallView(false);
    SetMentorView(false);
    SetMentorDetailView(false);
    SetArticleView(false);
    SetArticleDetailView(false);
    SetuserProfileView(false);
  };

  const handleMentorClick = () => {
    SetChatView(false);
    SetCallView(false);
    SetMentorView(true);
    SetMentorDetailView(false);
    SetArticleView(false);
    SetArticleDetailView(false);
    SetuserProfileView(false);
  };

  const handleCardClick = (mentor) => {
    setSelectedMentor(mentor);
    SetMentorDetailView(true);
    SetArticleView(false);
    SetChatView(false);
    SetCallView(false);
    SetMentorView(false);
    SetArticleDetailView(false);
    SetuserProfileView(false);
  };

  const handleArticleClick = () => {
    SetMentorDetailView(false);
    SetArticleView(true);
    SetChatView(false);
    SetCallView(false);
    SetMentorView(false);
    SetArticleDetailView(false);
    SetuserProfileView(false);
  };

  const handleArticleCardClick = (article) => {
    setSelectedArticle(article);
    SetMentorDetailView(false);
    SetArticleView(false);
    SetChatView(false);
    SetCallView(false);
    SetMentorView(false);
    SetArticleDetailView(true);
    SetuserProfileView(false);
  };

  const handleProfileClick = () => {
    setSelectedArticle(article);
    SetMentorDetailView(false);
    SetArticleView(false);
    SetChatView(false);
    SetCallView(false);
    SetMentorView(false);
    SetArticleDetailView(false);
    SetuserProfileView(false);
    SetuserProfileView(true);
  };

  

  




  return (
    <div>
      <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" class="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  WeTogether
                </span>
              </a>
            </div>
            <div class="flex items-center">
              <div class="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                    onClick={handleProfileClick}
                      class="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div class="px-4 py-3" role="none">
                    <p
                      class="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul class="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Chats
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
          

            <li>
              <a
                onClick={handleChatClick}
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Chats</span>
                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                onClick={handleMentorClick}
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Mentors</span>
              </a>
            </li>
            <li>
              <a
                onClick={handleMeetingClick}
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Meetings</span>
              </a>
            </li>

            <li>
              <a
              onClick={handleArticleClick}
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Articles</span>
              </a>
            </li>


            <li>
              <a
              onClick={handleProfileClick}
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </a>
            </li>

            <li>
              <a
              onClick={handleLogOutClick}
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Log Out</span>
              </a>
            </li>
           
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {chatView && storedUser&&(
           <Chats/>
          )}

          {callView  && (
            <div class="grid grid-cols-1 gap-4 mb-4">
              <div className="">
                <LobbyScreen />
              </div>
            </div>
          )}

          {ArticleView && (
            <div class="grid grid-cols-1 gap-4 mb-4">
              <div className="">
               {article.map((article,index)=>(<div key={index} onClick={() => handleArticleCardClick(article)}>
                  <Articles item={article} />
                </div>))}
              </div>
            </div>
          )}


{ArticleDetailView && (
            <div class="grid grid-cols-1 gap-4 mb-4">
              <div className="">
                <ArticleDetail article={selectedArticle} />
              </div>
            </div>
          )}


{userProfileView && (
            <div class="grid grid-cols-1 gap-4 mb-4 flex items-center">
              <div className="">
                <UserProfile />
              </div>
            </div>
          )}

          {MentorView && (
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
              {mentor.map((mentor, index) => (
                <div key={index} onClick={() => handleCardClick(mentor)}>
                  <MentorCard item={mentor} />
                </div>
              ))}
            </div>
          )}

          {MentorDetailView && (
            <div class="grid grid-cols-1 gap-4 mb-4">
              <div className="">
                <MentorDetail mentor={selectedMentor} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
