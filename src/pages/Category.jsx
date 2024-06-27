import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  Breadcrumbs,
  BreadcrumbItem,
  Checkbox,
} from "@nextui-org/react";
import SkeletonLoader from "../components/skeleton/Skeleton";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../context/Firebase";
import { Link } from "react-router-dom";
function Category () {
  const [blogsData, setBlogsData] = useState([]);
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setSkeletonLoading(true);
      try {
        const blogContent = await getDocs(collection(db, "blogs"));
        const blogsList = blogContent.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogsData(blogsList);
        console.log(blogsList, "ajoidjasodijiodjio");
      } catch (error) {
        toast.error(error.message);
      } finally {
        setSkeletonLoading(false);
      }
    };

    fetchBlogs();
  }, []);
    return (
      <>
        <div className="h-dvh overflow-y-auto">
          <div className="max-w-7xl px-6 lg:px-8 z-10 mx-auto w-full  py-1 bg-white  fixed top-0">
            <div className="mt-16  md:ps-8">
              <Breadcrumbs>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem className="font-semibold text-base">
                  Fashion
                </BreadcrumbItem>
              </Breadcrumbs>
            </div>
          </div>
          <div>
            <div className="grid mt-20 md:ps-8  grid-cols-12 gap-4 w-full mx-auto h-[calc(100vh-100px)] overflow-hidden">
              <div className="md:col-span-3 md:ps-6 mb-4 h-[calc(100vh-100px)] overflow-y-auto md:static md:translate-x-0 absolute bg-white -translate-x-[400px]">
                <div className="">
                  <Accordion selectionMode="multiple">
                    <AccordionItem
                      key="1"
                      aria-label="Accordion 1"
                      title="Category"
                      className="font-semibold"
                    >
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Art & Culture</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Science</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Bikes</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Default</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Sports</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Cricket</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Trave</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Food</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Dance</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Automobile</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Hollywood</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Bollywood</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Realastate</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Politics</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Accordion 2"
                      title="Auther"
                      className="font-semibold"
                    >
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Jhon Smith</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          02
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">David Luthar</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          29
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Smriti Irani</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          56
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Ratan Tata</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          57
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Times Of india</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          67
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Akshay Kumar</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          98
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Ria Bhardwaj</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          8
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Sashi Tharur</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          12
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Salesh Lodha</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          11
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Arina Jonson</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          45
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Manish Malhotra</Checkbox>

                        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                          09
                        </span>
                      </a>
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Accordion 3"
                      title="Short by"
                      className="font-semibold"
                    >
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Date</Checkbox>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">New to Old</Checkbox>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Old to New</Checkbox>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center justify-between gap-2 my-2"
                      >
                        <Checkbox color="default">Popular</Checkbox>
                      </a>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="md:col-span-9 col-span-12 h-[calc(100vh-100px)] px-6 overflow-y-auto">
                <div className="mx-auto max-w-7xl md:px-16 gap-4 mb-4 grid sm:grid-cols-2 grid-cols-1  w-full mt-3">
                {skeletonLoading ? (
                <>
              <SkeletonLoader/>
              <SkeletonLoader/>
              <SkeletonLoader/>
              <SkeletonLoader/>
              <SkeletonLoader/> 
              </>
            ) : (
              blogsData.map((blog) => (
                <div key={blog.id} className="rounded-2xl group/blog relative">
                  <Link to={`/blog/${blog?.slug}`}>
                    <div className="flex flex-col items-start justify-between w-full bg-white rounded-2xl rounded-br-none shadow-xl shadow-gray-300">
                      <img
                        className="w-full aspect-[385/221] object-cover rounded-2xl rounded-br-none"
                        width="385"
                        height="217"
                        src={blog.bannerImgUrl}
                        alt={blog.title}
                      />
                      <div className="w-full p-6">
                        <div className="flex items-center gap-x-4 text-xs">
                          <time className="text-gray-500">
                            {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
                          </time>
                          <a
                            href="#"
                            className="relative z-20 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                          >
                            {blog.Select_category}
                          </a>
                        </div>
                        <div className="group">
                          <a
                            href="#"
                            className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2 before:absolute before:inset-0 before:z-10"
                          >
                            {blog.title}
                          </a>
                          <p className="mt-5 line-clamp-1 text-sm leading-6 text-gray-600">
                            {blog.shortDescription}
                          </p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                          <img
                            src={blog.authorImgUrl}
                            className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                            alt={blog.Select_Author}
                          />
                          <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">Written by</p>
                            <p className="text-gray-600">{blog.Select_Author}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                  ))
                )}
                  {/* <div className="group shadow-xl p-3">
                    <div className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px] *:*:transition-all *:*:group-hover:scale-105">
                      <a href="blog-single.html">
                        <img
                          src="https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="image"
                          className="size-full object-cover "
                        />
                      </a>
                    </div>
                    <h4>
                      <a
                        href="blog-single.html"
                        className="block text-dark font-bold text-xl mb-3.5"
                      >
                        <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>
                    <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover *:size-full">
                            <img
                              src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="user"
                            />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>
                        <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="category.html"
                        className="inline-flex text-green-700 bg-green-100 font-medium text-sm py-1 px-3 rounded-full"
                      >
                        Travel
                      </a>
                    </div>
                  </div>
                  <div className="group shadow-xl p-3">
                    <div className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px] *:*:transition-all *:*:group-hover:scale-105">
                      <a href="blog-single.html">
                        <img
                          src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvbGl0aWNzfGVufDB8fDB8fHww"
                          alt="image"
                          className="size-full object-cover "
                        />
                      </a>
                    </div>
                    <h4>
                      <a
                        href="blog-single.html"
                        className="block text-dark font-bold text-xl mb-3.5"
                      >
                        <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>
                    <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover *:size-full">
                            <img
                              src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="user"
                            />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>
                        <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="category.html"
                        className="inline-flex text-green-700 bg-green-100 font-medium text-sm py-1 px-3 rounded-full"
                      >
                        Travel
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  
}

export default Category;
