import React, { useState } from "react";
import { Button, Input, ScrollShadow } from "@nextui-org/react";

import { Eyeopen, Eyeclose, Google } from "../../component/Icons";

import { db } from "../../context/Firebase";
import Loading from "../Loading";
import { useAuthentication } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { toast } from "sonner";

function Signup() {
  const allAuth = useAuthentication();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const HandleSignUpUserWithEmailAndPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (password === confirmPassword) {
        await allAuth.signUpUserWithEmailAndPassword(
          email,
          password,
          displayName
        );
      } else {
        setPassword("");
        setConfirmPassword("");
        toast.error("Password and confirm password do not match");
      }

      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const HandleSignUpWithGoogle = async () => {
    setLoading(true);
    try {
      await allAuth.signInWithGoogle("signUp");
    } catch (error) {
      // Handle errors
    } finally {
      setLoading(false);
    }
  };

  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisible2, setIsVisible2] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);

  return (
    <div className="bg-default-50">
      {/* {loading && <Loading />} */}
      <ScrollShadow className="h-dvh flex flex-col overflow-auto">
        <div className="grow py-5"></div>
        <div className="max-w-[400px] h-max rounded-xl flex flex-col justify-center items-center w-full mx-auto px-4 sm:px-8 xl:px-0 shadow-2xl">
          <div className=" overflow-hidden rounded-xl bg-white w-full mx-auto flex flex-col shadow-box p-4 sm:p-7.5 xl:p-12.5">
            <div className="text-center mb-3">
              <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-black mb-2">
                Sign up
              </h1>
              <p className="text-body">Create your account</p>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                onClick={HandleSignUpWithGoogle}
                className="w-full !border-black hover:!bg-black/10 text-sm font-semibold"
                variant="bordered"
                startContent={<Google />}
              >
                Login With Google
              </Button>
            </div>

            <span className="relative block text-custom-sm text-center mt-4 mb-2">
              <span className="block absolute left-0 top-1/2 h-px max-w-30 w-full bg-gray-300"></span>
              <span className="block absolute right-0 top-1/2 h-px max-w-30 w-full bg-gray-300"></span>
              <div className="bg-white w-max mx-auto font-semibold text-sm px-4 relative z-30">
                {" "}
                Or sign up with email
              </div>
            </span>
            <div className="mt-3">
              <form onSubmit={HandleSignUpUserWithEmailAndPassword}>
                <div className="mb-4">
                  <Input
                    onValueChange={setDisplayName}
                    value={displayName}
                    isClearable
                    isRequired
                    type="text"
                    label="Name"
                    variant="bordered"
                    placeholder=""
                    validationBehavior="native"
                    onClear={() => console.log("input cleared")}
                    className="w-full"
                  />
                </div>
                <div className="mb-4 w-full">
                  <Input
                    onValueChange={setEmail}
                    value={email}
                    isClearable
                    isRequired
                    type="email"
                    label="Email"
                    variant="bordered"
                    placeholder=""
                    validationBehavior="native"
                    onClear={() => console.log("input cleared")}
                    className="w-full"
                  />
                </div>

                <div className="w-full mb-4 ">
                  <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                      onValueChange={setPassword}
                      value={password}
                      isRequired
                      label="Password"
                      variant="bordered"
                      placeholder=""
                      validationBehavior="native"
                      endContent={
                        password && (
                          <button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                          >
                            {isVisible ? (
                              <Eyeopen className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                              <Eyeclose className="text-2xl text-default-400 pointer-events-none" />
                            )}
                          </button>
                        )
                      }
                      type={isVisible ? "text" : "password"}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="w-full f">
                  <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                      onValueChange={setConfirmPassword}
                      value={confirmPassword}
                      label="Confirm Password"
                      isRequired
                      variant="bordered"
                      placeholder=""
                      validationBehavior="native"
                      endContent={
                        confirmPassword && (
                          <button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility2}
                          >
                            {isVisible2 ? (
                              <Eyeopen className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                              <Eyeclose className="text-2xl text-default-400 pointer-events-none" />
                            )}
                          </button>
                        )
                      }
                      type={isVisible2 ? "text" : "password"}
                      className="w-full"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="hover:!bg-black mt-5 w-full  hover:!text-white border-black font-semibold"
                  variant="ghost"
                >
                  {loading ? (
                    <Loading
                      color="secondary"
                      size="sm"
                      area-label="Loading..."
                    />
                  ) : (
                    "Sign up"
                  )}
                </Button>
                <p className="text-center mt-5">
                  Already a member?
                  <Link to="/login" className="text-dark font-semibold ms-2">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="grow py-5"></div>
      </ScrollShadow>
    </div>
  );
}

export default Signup;