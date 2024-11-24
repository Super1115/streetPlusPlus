import UserInfo from "@/components/UserInfo";
import ReturnButton from "@/components/ReturnButton"
import LogoutButton from "@/components/LogoutButton";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { NextPage } from "next";

import { getUserProfileData } from "@/services/profile.service";



  const Profile: NextPage = withPageAuthRequired(
    async () => {
      const user = await getUserProfileData();
  
      return (
        <div className="absolute top-0 left-0 p-4">
            <LogoutButton/>
            <UserInfo 
              username={user.name ?? "ERROR"} 
              level={"17"} 
            />
          <ReturnButton redirectUrl="/"/>
          </div>
      );
    },
    { returnTo: "/api/auth/login" },
  );
  
  export default Profile;

