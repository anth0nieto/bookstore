import { FetchOptions, executeFetch } from "./utils";

const baseUrl = process.env.REACT_APP_BASE_URL;

const customFetch = async <T>(options: FetchOptions): Promise<T> => {
  const { httpOptions, url } = options;
  const targetUrl = new URL(`${url}`, baseUrl);
  const result = await executeFetch(targetUrl, httpOptions);
  return result;
};

export default customFetch;
