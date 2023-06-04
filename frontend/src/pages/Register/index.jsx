import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 my-24 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
        <div>
          <img
            src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
            alt="Register and join with our kids toys"
          />
        </div>

        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
