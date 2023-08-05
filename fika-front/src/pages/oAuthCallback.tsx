import { useRouter } from "next/router";
import { useUserInfo } from "src/hooks/queries";

const OAuthCallback = () => {
  const { query } = useRouter();

  useUserInfo(query.code as string);

  return (
    <div>
      <div className="text-white">로그인중...</div>
    </div>
  );
};

export default OAuthCallback;
