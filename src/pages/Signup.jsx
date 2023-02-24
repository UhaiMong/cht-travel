import React, { useEffect, useState } from "react";
import loginImage from "../assets/signup.svg";
import { useForm, useWatch } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createUser, googleLogin } from "../features/auth/authSlice";
import { FcGoogle } from "react-icons/fc";
import { FiChevronLeft } from "react-icons/fi";
const chtTravelLogoTwo = "https://i.ibb.co/ypH6jJt/cht-travel-logo-two.png";
import Footer from "../layout/Footer";
import { useAddUserMutation, useUpdateUserMutation } from "../api/userSlice";

const Signup = () => {
  const { handleSubmit, register, reset, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  // for redirecting
  const location = useLocation();
  const from = location.state?.from || "/";

  const { displayName, email, isError, error } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [postUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  useEffect(() => {
    if (displayName && email) {
      updateUser({ email });
      navigate(from, { replace: true });
    }
  }, [email]);

  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

  const onSubmit = (data) => {
    dispatch(createUser({ email: data.email, password: data.password }));
    postUser(data);
    navigate(from, { replace: true });
  };

  return (
    <div>
      <div className="bg-[#EBF0F4] flex justify-center py-14">
        <div className="bg-white border-2 rounded-lg border-t-success shadow-lg p-8 mb-6 space-y-4">
          <div className="flex items-center gap-2">
            <span>
              <Link to="/login">
                <FiChevronLeft size={30} color={"#098e2b"} />
              </Link>
            </span>
            <div>
              <img className="w-20" src={chtTravelLogoTwo} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-black font-bold">Sign up</h2>
            <p className="text-sm">
              Create an account to easily use cht-travel.com services.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="md:w-96">
            <div className="space-y-3">
              <div>
                <label htmlFor="email" className="font-bold text-black text-sm">
                  Email Address
                </label>
                <input
                  className="input input-bordered bg-white w-full"
                  type="email"
                  name="email"
                  id="email"
                  {...register("email")}
                  placeholder="someone@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="font-bold text-black text-sm"
                >
                  Password
                </label>
                <input
                  className="input input-bordered w-full bg-white"
                  type="password"
                  name="password"
                  id="password"
                  {...register("password")}
                  placeholder="password"
                />
              </div>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="confirm-password"
                  className="text-black font-bold text-sm"
                >
                  Confirm Password
                </label>
                <input
                  className="input input-bordered w-full bg-white"
                  type="password"
                  id="confirm-password"
                  {...register("confirmPassword")}
                  placeholder="password"
                />
              </div>
              <div className="!mt-8 ">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary py-3 font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-300"
                  disabled={disabled}
                >
                  Sign up
                </button>
              </div>
              <div>
                <p className="text-center">
                  Already have an account?{" "}
                  <span
                    className="cursor-pointer text-primary underline hover:text-[#333333]"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </p>
              </div>

              <button
                type="button"
                className="w-full text-black rounded-lg border hover:shadow-md transition py-3 font-bold flex items-center justify-center gap-2"
                onClick={handleGoogleLogin}
              >
                <span>
                  <FcGoogle size={23} />
                </span>
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
