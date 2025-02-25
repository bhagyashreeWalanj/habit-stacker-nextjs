import React from "react";
import { useUser, UserButton } from "@clerk/clerk-react";

const UserProfile = () => {
  const { user } = useUser();
  if (!user) return null;

  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-10 h-10",
      userButtonPopoverActionButton: "text-red-600",
    },
  };
  return (
    <div className="flex flex-col gap-3 items-center justify-center max-lg:hidden">
      <UserButton appearance={userButtonAppearance} />
      {/* <div>
        <span>{user?.fullName}</span>
      </div> */}
    </div>
  );
};

export default UserProfile;
