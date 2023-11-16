import { FieldErrors, useForm } from "react-hook-form";

interface IForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<IForm>();

  const onValid = (data: IForm) => {
    console.log("good");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="flex flex-col space-y-10"
    >
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "username should be longer than 5 chars",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: "Email is required" })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />

      <input type="submit" value="Create Account" />
    </form>
  );
}
