import service from "../middlewares/interceptor";

const registerUser = async (payload) => {
  return await service.post("/auth/register?captcha=false", payload);
};
const loginUser = (payload) => {
  return  service.post('/auth/login?captcha=false',payload)
};

export { registerUser, loginUser };
