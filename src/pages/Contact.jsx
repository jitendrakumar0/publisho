import React from "react";

export default function Contact() {
  return (
    <>
      <section className="pt-34 lg:pt-39 pb-15 lg:pb-20 bg-gray my-5">
        <div className="max-w-[520px] mx-auto px-4 sm:px-8 xl:px-0 shadow-2xl">
          <div className="rounded-xl bg-white shadow-box p-4 sm:p-7.5 xl:p-12.5">
            <div className="text-center mb-9">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-black mb-3">
                Sign up
              </h1> 
              <p className="text-body">Create your account</p>
            </div>
            <button className="w-full flex items-center justify-center gap-2.5 text-dark p-3.5 rounded-lg border border-gray-4 ease-in duration-200 hover:border-gray-5 hover:bg-gray">
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_709_8846)">
                  <path
                    d="M22.5001 11.2438C22.5134 10.4876 22.4338 9.73256 22.2629 8.995H11.7246V13.0771H17.9105C17.7933 13.7929 17.5296 14.478 17.1352 15.0914C16.7409 15.7047 16.224 16.2335 15.6158 16.646L15.5942 16.7827L18.9264 19.3124L19.1571 19.335C21.2772 17.4161 22.4997 14.5926 22.4997 11.2438"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M11.7245 22C14.755 22 17.2992 21.0221 19.1577 19.3355L15.6156 16.6464C14.6679 17.2944 13.3958 17.7467 11.7245 17.7467C10.3051 17.7385 8.92433 17.2926 7.77814 16.472C6.63195 15.6515 5.77851 14.4981 5.33892 13.1755L5.20737 13.1865L1.74255 15.8142L1.69727 15.9376C2.63043 17.7602 4.06252 19.2925 5.83341 20.3631C7.60429 21.4337 9.64416 22.0005 11.7249 22"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.33889 13.1755C5.09338 12.4753 4.96669 11.7404 4.96388 11C4.9684 10.2608 5.09041 9.52685 5.32552 8.8245L5.31927 8.67868L1.81196 6.00867L1.69724 6.06214C0.910039 7.5938 0.5 9.28491 0.5 10.9999C0.5 12.7148 0.910039 14.406 1.69724 15.9376L5.33889 13.1755Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M11.7249 4.25337C13.3333 4.22889 14.8888 4.8159 16.065 5.89121L19.2329 2.86003C17.2011 0.992106 14.5106 -0.0328008 11.7249 3.27798e-05C9.64418 -0.000452376 7.60433 0.566279 5.83345 1.63686C4.06256 2.70743 2.63046 4.23965 1.69727 6.06218L5.32684 8.82455C5.77077 7.50213 6.62703 6.34962 7.77491 5.5295C8.9228 4.70938 10.3044 4.26302 11.7249 4.25337Z"
                    fill="#EB4335"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_709_8846">
                    <rect
                      width="22"
                      height="22"
                      fill="white"
                      transform="translate(0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              Sign up with Google
            </button>
            <button className="mt-4 w-full flex items-center justify-center gap-2.5 text-dark p-3.5 rounded-lg border border-gray-4 ease-in duration-200 hover:border-gray-5 hover:bg-gray">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9997 1.83331C5.93773 1.83331 1.83301 6.04119 1.83301 11.232C1.83301 15.3847 4.45954 18.9077 8.10178 20.1505C8.55988 20.2375 8.72811 19.9466 8.72811 19.6983C8.72811 19.4743 8.71956 18.7338 8.71567 17.9485C6.16541 18.517 5.6273 16.8395 5.6273 16.8395C5.21032 15.7532 4.60951 15.4644 4.60951 15.4644C3.77785 14.8811 4.6722 14.893 4.6722 14.893C5.59272 14.9593 6.07742 15.8615 6.07742 15.8615C6.89499 17.2984 8.22184 16.883 8.74493 16.6429C8.82718 16.0353 9.06478 15.6208 9.32694 15.3861C7.2909 15.1484 5.15051 14.3425 5.15051 10.7412C5.15051 9.71509 5.5086 8.87661 6.09503 8.21844C5.99984 7.98167 5.68611 7.02577 6.18382 5.73115C6.18382 5.73115 6.95358 5.47855 8.70532 6.69458C9.43648 6.48627 10.2207 6.3819 10.9997 6.37836C11.7787 6.3819 12.5635 6.48627 13.2961 6.69458C15.0457 5.47855 15.8145 5.73115 15.8145 5.73115C16.3134 7.02577 15.9995 7.98167 15.9043 8.21844C16.4921 8.87661 16.8477 9.715 16.8477 10.7412C16.8477 14.351 14.7033 15.146 12.662 15.3786C12.9909 15.6702 13.2838 16.2423 13.2838 17.1191C13.2838 18.3766 13.2732 19.3888 13.2732 19.6983C13.2732 19.9485 13.4382 20.2415 13.9028 20.1492C17.5431 18.905 20.1663 15.3833 20.1663 11.232C20.1663 6.04119 16.0621 1.83331 10.9997 1.83331Z"
                  fill="#15171A"
                ></path>
              </svg>
              Sign up with Github
            </button>
            <span className="relative block text-custom-sm text-center mt-9">
              <span className="block absolute left-0 top-1/2 h-px max-w-30 w-full bg-gray-3"></span>
              <span className="block absolute right-0 top-1/2 h-px max-w-30 w-full bg-gray-3"></span>
              Or sign up with email
            </span>
            <div className="mt-6">
              <form>
                <div className="mb-4">
                  <label
                    for="name"
                    className="block font-medium text-dark text-custom-sm mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    placeholder="Enter your name"
                    className="rounded-md border border-gray-4 bg-white placeholder:text-dark-2 w-full py-3.5 px-6 outline-none duration-200 focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="email"
                    className="block font-medium text-dark text-custom-sm mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-md border border-gray-4 bg-white placeholder:text-dark-2 w-full py-3.5 px-6 outline-none duration-200 focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="password"
                    className="block font-medium text-dark text-custom-sm mb-3"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="rounded-md border border-gray-4 bg-white placeholder:text-dark-2 w-full py-3.5 px-6 outline-none duration-200 focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md text-white font-medium flex justify-center py-3.5 px-5 bg-black hover:opacity-90 transition-all duration-200"
                >
                  Sign up
                </button>
                <p className="text-center mt-5">
                  Already a member?
                  <a href="signin.html" className="text-dark">
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
