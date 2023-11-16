import { FieldErrors, useForm } from "react-hook-form";

interface IForm {
  username: string;
  password: string;
  email: string;
}
//! mode -> 유저가 입력하는 중에 validation 검사  default: onSubmit

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onBlur",
  });

  const onValid = (data: IForm) => {
    console.log("good");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  console.log(errors);

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
        className={Boolean(errors.username) ? "border-red-500" : ""}
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            // false 면 validate에 걸림, true면 넘어감
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      {errors.password?.message}

      <input type="submit" value="Create Account" />
    </form>
  );
}
