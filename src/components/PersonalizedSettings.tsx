import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { flintaiLogo } from "../assets/images";
import { Camera } from "lucide-react";
import Button from "./Button";

const DeleteAccount = () => {
  return (
    <>
      <span>Delete account</span>{" "}
      <button className="cta-btn !text-sm md:!text-md !px-3 !shadow-none !rounded-[40px] !flex !flex-row !items-center !justify-center !font-normal !w-[6.2rem] !h-[2.6rem] !gap-1 !border-red-700 !text-red-500 !bg-transparent hover:!bg-red-600 hover:!text-white !bg-opacity-20">
        Delete
      </button>
    </>
  );
};

const UpdateAccountDetails = () => {
  return (
    <form className="flex flex-row items-end justify-between w-full h-auto">
      {/* Inputs section */}
      <div className="grid grid-cols-1 grid-rows-3 w-[70%] h-auto">
        <div className="input-row">
          <Input
            type="text"
            placeholder="Update Firstname"
            value={""}
            name="firstname"
            onChange={(name, value) => console.log(name, value)}
          />
        </div>
        <div className="input-row">
          <Input
            type="text"
            placeholder="Update Lastname"
            value={""}
            name="lastname"
            onChange={(name, value) => console.log(name, value)}
          />
        </div>
        <div className="input-row">
          <Input
            type="text"
            placeholder="Update Username"
            value={""}
            name="username"
            onChange={(name, value) => console.log(name, value)}
          />
        </div>
      </div>
      {/* Button */}
      <Button
        text="Update"
        onClick={() => {}}
        type="submit"
        className="w-auto px-4 mb-4"
      />
    </form>
  );
};

const UserAvatar: React.FC = () => {
  return (
    <>
      <img
        src={flintaiLogo}
        alt={`avatar`}
        className="sm:w-[5rem] sm:h-[5rem] w-[4rem] h-[4rem] object-cover"
      />
    </>
  );
};

// TODO: To be used later
// const UserAvatar: React.FC = () => {
//   const { user } = globalUserStore();

//   return (
//     <>
//       {user && user.preferences && (
//         <img
//           src={user.preferences.avatarUrl}
//           alt={`${user.username}'s avatar`}
//           className="sm:w-[5rem] sm:h-[5rem] w-[4rem] h-[4rem]object-cover"
//         />
//       )}
//     </>
//   );
// };

const PersonalizedSettings: React.FC = () => {
  const show = true;
  const navigate = useNavigate();
  const handleRouting = (route: string) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col justify-start w-full h-full item-center">
      <section className="custom-input !flex !flex-col !items-start !w-full !h-auto !justify-between  !border-x-0 !border-t-0 !p-0 !my-0 !rounded-[0px] !border-opacity-10">
        <div className="custom-input !flex !flex-row !items-center gap-2 !w-full !h-auto !border-[1px] !border-x-0 !border-t-0 !px-1 !py-3 !m-0 !rounded-[0px] !border-opacity-1">
          <button className="relative flex flex-row items-center justify-center md:h-[5.6rem] h-[4.6rem] w-[4.6rem] md:w-[5.6rem] border-[1px] border-gray-500 p-2 rounded-md hover:bg-black hover:bg-opacity-20">
            <span>
              <UserAvatar />
            </span>
            <div className="absolute bottom-0 flex flex-col items-center justify-center w-full bg-black bg-opacity-20 h-[60%] gap-1">
              <Camera />
              <span className="hidden text-xs leading-2 sm:block">
                Change avatar
              </span>
            </div>
          </button>
          <span>Update Avatar</span>
        </div>
        <div className="custom-input !flex !flex-col !items-start !w-full !h-auto !justify-between !border-[1px] !border-x-0 !border-t-0 !px-1 !py-3 !m-0 !rounded-[0px] !border-opacity-10">
          {/* <button
            type="button"
            onClick={() => {}}
            className={
              "cta-btn !w-[80%] md:!w-[60%] !h-[2.6rem] !shadow-none !rounded-3xl"
            }
          >
            Update Account Details
          </button> */}
          {show && <UpdateAccountDetails />}

          <button
            type="button"
            onClick={() => handleRouting("/auth/forgot-password")}
            className={
              "cta-btn !w-[100%] md:!w-[70%] !h-[2.6rem] !shadow-none !rounded-3xl !text-sm"
            }
          >
            Forgot your password?
          </button>
        </div>
      </section>
      <div className="custom-input !flex !flex-row !items-center !w-full !h-auto !justify-between !border-0 !px-1 !py-3 !m-0 !rounded-[0px] !border-t-0">
        <DeleteAccount />
      </div>
    </div>
  );
};

export default PersonalizedSettings;
