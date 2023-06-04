import {Link, useLocation, useNavigate} from "react-router-dom";
import {updateProfile} from "@firebase/auth";
import {auth} from "../../config/firebase";
import {uesAuthContext} from "../../context/AuthContext";
import {useForm} from "react-hook-form";

const Register = () => {
  const {createUser, logInUserWithGoogle} = uesAuthContext();
  const {register, handleSubmit, errors, setError, reset} = useForm();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const {name, email, password, photo_url} = data;

    createUser(email, password)
      .then(() => {
        // update user name and photoURL
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo_url,
        })
          .then(() => {
            // Profile updated!
            // ...
            navigate(from, {replace: true});
            reset();
          })
          .catch((error) => {
            setError(error.message);
            console.log(errors);
          });
      })
      .catch((error) => {
        setError(error.message);
        console.log(errors);
      });
  };

  //  google authentication handle
  const handleLoginWithGoogle = () => {
    logInUserWithGoogle()
      .then(() => {
        setError("");
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="shadow border p-8 rounded-lg md:w-[450px] relative">
        <h2 className="font-bold text-2xl">Register Your Account</h2>
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={handleLoginWithGoogle}
            type="button"
            className="py-1 ps-2 pe-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="google"
              className="w-8 h-8 inline-block"
            />
            Sign up with Google
          </button>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your name
            </label>
            <input
              type="text"
              {...register("name")}
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              {...register("email")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              {...register("password")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
              placeholder="********"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="photo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your photo URL
            </label>
            <input
              type="text"
              {...register("photo_url")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
              placeholder="Enter your photo URL"
            />
          </div>
          {errors && <p className="mb-4 text-red-600">{errors}</p>}
          <button type="submit" className="btn btn-blue-600 w-full mb-4">
            Create an account
          </button>
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-bold hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
