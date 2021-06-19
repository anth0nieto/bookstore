import { HTTP_PUT_METHOD } from "common/constants";
import customFetch from "common/rest/custom-fetch";
import { User } from "login/model";

export const loginUser = async (email: string, password: string) => {
  const httpOptions = {
    method: HTTP_PUT_METHOD,
    headers: {
      password: password,
    },
  };

  try {
    const data = await customFetch<User>({
      url: `user/${email}`,
      httpOptions,
    });

    return data;
  } catch (error) {
    throw error;
  }
};
