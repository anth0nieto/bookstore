import { RootState } from "common/store";
import { useSelector } from "react-redux";

const useGetToken = () => {
  const token = useSelector(
    (root: RootState) => root.login.user.userInfo?.sessionTokenBck
  );
  return token;
};

export default useGetToken;
