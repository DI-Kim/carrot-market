import { FieldErrors, useForm } from "react-hook-form";

interface IForm {
  username: string;
  password: string;
  email: string;
  formError?: string;
}
//! mode -> 유저가 입력하는 중에 validation 검사  default: onSubmit

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError: 특정 input이 아닌 form에 대한 에러 처리, ex) 백엔드, 디비 에러 등
    setError,
    reset,
    resetField,
  } = useForm<IForm>({
    mode: "onBlur",
  });

  const onValid = (data: IForm) => {
    console.log("good");
    setError("formError", { message: "backend is offline, sorry guys" });
    resetField("password"); // 선택한 필드만 초기화
    reset(); // 모든 필드 초기화
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
      {errors.formError?.message}
    </form>
  );
}
