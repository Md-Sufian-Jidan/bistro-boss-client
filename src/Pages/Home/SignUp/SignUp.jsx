import { useForm } from "react-hook-form"
// import toast from "react-hot-toast";
import UseAuth from "../../../Hooks/UseAuth";

const SignUp = () => {
    const { createUser } = UseAuth();

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <div className="hero min-h-screen bg-base-200">
            {/* md:flex-row-reverse */}
            <div className="hero-content flex-col">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-purple-300">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password"  {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && (
                                <p className="text-red-600">Password field is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password Must be 6 Characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-600">Password Must be less then 20 Characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">Password Must have one Uppercase, one lowercase, one number and one special character</p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-success" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;