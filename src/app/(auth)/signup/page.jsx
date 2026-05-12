import { SignUpForm } from "@/components/client-components/SignUpForm";

const SignupPage = () => {
  return (
    <seciton>

<div className="text-center space-y-5 mx-auto">
<h2 className="text-4xl">Create Account</h2>
<p className="text-(--primaryText) text-xl">Start your adventure with Wanderlust</p>

</div>





<SignUpForm/>




    </seciton>
  );
};

export default SignupPage;