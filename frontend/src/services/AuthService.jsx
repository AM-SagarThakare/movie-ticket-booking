import service from "../middlewares/interceptor";

const registerUser = async (payload) => {
  return await service.post("/auth/register?captcha=false ", payload);
};
const loginUser = (payload) => {
  console.log(payload);
};

export { registerUser, loginUser };
