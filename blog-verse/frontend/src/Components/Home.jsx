import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faPencil } from "@fortawesome/free-solid-svg-icons";
function Home() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React and Tailwind CSS",
      author: "P Karthikeya",
      timeRead: " 5 min read",
      postedOn: "Jan 10, 2024",
      tag: "Mountains",
      content:
        "React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
      Image:
        "https://images.unsplash.com/photo-1758179156914-bcc9a0d2a4b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
      profilePic:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures",
      author: "Ch V V Lakshman",
      timeRead: " 7 min read",
      postedOn: "Dec 05, 2023",
      tag: "Space",
      content:
        "JavaScript closures are a fundamental concept that every developer should understand. In this article, we'll dive deep into closures, how they work, and practical examples of their usage.",
      Image:
        "https://images.unsplash.com/photo-1758220824544-08877c5a774b?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profilePic:
        "https://plus.unsplash.com/premium_photo-1757322537445-892532434841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "A Guide to Responsive Web Design",
      author: "R Durga Prasad",
      timeRead: " 6 min read",
      postedOn: "Nov 20, 2023",
      tag: "Oceans",
      content:
        "Responsive web design is essential in today's mobile-first world. This guide will walk you through the principles of responsive design and how to implement them using CSS and modern frameworks.",
      Image:
        "https://images.unsplash.com/photo-1757902663593-2b04b9ea5574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
      profilePic:
        "https://images.unsplash.com/photo-1757664171309-f5c082f8d64c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Exploring the New Features of ES2021",
      author: "Ch Chandu",
      timeRead: " 8 min read",
      postedOn: "Oct 01, 2023",
      tag: "Animal LifeStyle",
      content:
        "ES2021 introduces several new features that enhance the JavaScript language. In this article, we'll explore these features and how they can improve your code.",
      Image:
        "https://images.unsplash.com/photo-1757778281745-85a04487b859?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profilePic:
        "https://images.unsplash.com/photo-1757918637010-214f0a48ee2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Nnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Mastering Flexbox for Layout Design",
      author: "B Kalyan",
      timeRead: " 10 min read",
      postedOn: "Sep 15, 2023",
      tag: "Rivers",
      content:
        "Flexbox is a powerful layout module in CSS that allows for flexible and responsive design. This article will guide you through the basics of Flexbox and how to use it effectively in your projects.",
      Image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      profilePic:
        "https://images.unsplash.com/photo-1757997900698-946eaaa84e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Introduction to TypeScript for JavaScript Developers",
      author: "Shankar",
      tag: "Food",
      timeRead: " 9 min read",
      postedOn: "Aug 10, 2023",
      content:
        "TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity. This introduction will cover the basics of TypeScript and how to get started.",
      Image:
        "https://plus.unsplash.com/premium_photo-1693879091596-3258f8c1810c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profilePic:
        "https://images.unsplash.com/photo-1758046610761-666031ffa9b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "A Guide to Responsive Web Design",
      author: "R Durga Prasad",
      timeRead: " 6 min read",
      postedOn: "Nov 20, 2023",
      tag: "Trees",
      content:
        "Responsive web design is essential in today's mobile-first world. This guide will walk you through the principles of responsive design and how to implement them using CSS and modern frameworks.",
      Image:
        "https://images.unsplash.com/photo-1758220829551-6d02d06798c7?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profilePic:
        "https://images.unsplash.com/photo-1757664171309-f5c082f8d64c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "A Guide to Responsive Web Design",
      author: "R Durga Prasad",
      timeRead: " 6 min read",
      postedOn: "Nov 20, 2023",
      tag: "Forest",
      content:
        "Responsive web design is essential in today's mobile-first world. This guide will walk you through the principles of responsive design and how to implement them using CSS and modern frameworks.",
      Image:
        "https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profilePic:
        "https://images.unsplash.com/photo-1757664171309-f5c082f8d64c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center pt-5 bg-gray-50">
      <p className="text-4xl font-bold pt-20">Welcome back, Dev Astra</p>
      <p className="text-lg text-gray-500 mt-4">
        {" "}
        Discover amazing stories, insights, and ideas from our community of
        writers.
      </p>
      <div className=" flex gap-10 justify-around mt-5 ">
        <button className="px-10 py-4 flex border-2 border-blue-200 items-center gap-2 shadow-blue-100 cursor-pointer bg-blue-700 hover:bg-blue-800 shadow-md text-white rounded-xl">
          <FontAwesomeIcon icon={faPencil} /> Write a New Post
        </button>
        <button className="px-10 border-2 border-gray-300 shadow-md bg-white py-4 gap-2 flex items-center cursor-pointer  hover:bg-gray-300 text-gray-800 rounded-md">
          <FontAwesomeIcon icon={faBookmark} />
          View My Posts
        </button>
      </div>
      <div className="mt-5 flex gap-10 flex-wrap justify-center w-full rounded-lg shadow-lg pb-5">
        {posts.map((post) => (
          <div className="cursor-pointer w-96 bg-white shadow-lg rounded-lg" key={post.id}>
            <div className="overflow-hidden relative">
                <div className="z-10 absolute left-4 top-3 font-semibold text-white text-[12px] px-4 bg-blue-600 rounded-4xl py-2">
                    {post.tag}
                </div>
              <img
                className="object-cover rounded-t-lg transform transition-transform duration-500 hover:scale-125 ease-in-out shadow-lg h-52 w-96"
                src={post.Image}
                alt="Writing"
              />
              <button className="p-3 text-sm bg-white rounded-full absolute cursor-pointer right-4 top-3">
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
            <div className="flex gap-5 mt-3 px-2">
              <img
                className="rounded-full shadow-xl h-12 w-12 "
                src={post.profilePic}
                alt="Writing"
              />
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-gray-500">
                  {post.postedOn} - {post.timeRead}
                </p>
              </div>
            </div>
            <div className="mt-3 px-3 flex flex-col gap-3">
              <p className="text-2xl font-bold ">{post.title}</p>
              <p className="text-gray-600 line-clamp-3">{post.content}</p>
            </div>
            <div className="mt-3 mb-3  px-3 flex justify-end">
              <button className="text-blue-500 hover:underline cursor-pointer">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
