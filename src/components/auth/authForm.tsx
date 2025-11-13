import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { Spinner } from "../ui/spinner";
import type { AuthFormInputs, AuthFormProps } from "../../types/auth";

export default function AuthForm({ tab }: AuthFormProps) {
  const { login, register: registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormInputs>();

  const onSubmit: SubmitHandler<AuthFormInputs> = async (data) => {
    if (tab === "login") {
      login(data);
    } else {
      registerUser(data);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <label
            className="flex items-center gap-2 text-sm font-medium  text-gray-700 select-none"
            htmlFor="login-email"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email обязателен" })}
            className="w-full px-3 py-2 border-2 border-sky-200 placeholder-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            className="flex items-center  gap-2 text-sm font-medium text-gray-700 select-none"
            htmlFor="login-password"
          >
            Пароль
          </label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Пароль обязателен",
              minLength: { value: 6, message: "Минимум 6 символов" },
            })}
            className="w-full px-3 py-2 border-2 border-sky-200 placeholder-gray-400 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 py-2.5 rounded-lg text-white font-semibold"
        >
          {isSubmitting ? (
            <Spinner />
          ) : tab === "login" ? (
            "Войти"
          ) : (
            "Создать аккаунт"
          )}
        </button>
      </form>
    </div>
  );
}
