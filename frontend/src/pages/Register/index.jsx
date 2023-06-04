import {Link, useLocation, useNavigate} from "react-router-dom";
import {updateProfile} from "@firebase/auth";
import {auth} from "../../config/firebase";
import {useForm} from "react-hook-form";
import {uesAuthContext} from "../../context/AuthContext";

const Register = () => {
  const {createUser, logInUserWithGoogle} = uesAuthContext();
  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
    reset,
  } = useForm();
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
            navigate(from, {replace: true});
            reset();
          })
          .catch((error) => {
            return setError("firebase-profile", {
              type: "manual",
              message: error.message,
            });
          });
      })
      .catch((error) => {
        return setError("firebase-create-account", {
          type: "manual",
          message: error.message,
        });
      });
  };

  // google authentication handle
  const handleLoginWithGoogle = () => {
    logInUserWithGoogle()
      .then(() => {
        setError("");
        navigate("/");
      })
      .catch((error) => setError("logInUser", error.message));
  };

  // show error message component
  const ShowError = ({msg}) => (
    <>{errors && <p className="mb-4 text-red-600">{errors[msg]?.message}</p>}</>
  );

  const Input = ({label, id, type = "text", placeholder, regOptions = {}}) => {
    return (
      <div className="mb-6">
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <input
          type={type}
          {...register(id, regOptions)}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
          placeholder={placeholder}
        />
        <ShowError msg={id} />
      </div>
    );
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
          <Input
            label="Your Name"
            id="name"
            placeholder="Enter your name"
            regOptions={{required: "Name is required"}}
          />
          <Input
            label="Your email"
            type="email"
            id="email"
            placeholder="Enter your email"
            regOptions={{
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email address",
              },
            }}
          />
          <Input
            label="Your password"
            id="password"
            type="password"
            placeholder="Enter your password"
            regOptions={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                message:
                  "Password must contain at least one letter and one number",
              },
            }}
          />
          <Input
            label="Your photo URL"
            type="url"
            id="photo_url"
            placeholder="Enter your photo URL"
            regOptions={{
              required: "Photo URL is required",
              pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: "Invalid photo URL format",
              },
            }}
          />
          {/* Error message for firebase */}
          <ShowError msg="firebase-create-account" />
          <ShowError msg="firebase-profile" />

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
