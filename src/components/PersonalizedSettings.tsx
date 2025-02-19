import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { flintaiLogo } from "../assets/images";

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
    <form>
      <div className="input-row">
        <label htmlFor="firstname" className="modal-text">
          Update Firstname
        </label>
        <div>
          <Input
            type="text"
            placeholder="e.g John"
            value={""}
            name="firstname"
            onChange={(name, value) => console.log(name, value)}
          />
        </div>
      </div>
      <div className="input-row">
        <label htmlFor="lastname" className="modal-text">
          Update Lastname
        </label>
        <div>
          <Input
            type="text"
            placeholder="e.g Flynn"
            value={""}
            name="lastname"
            onChange={(name, value) => console.log(name, value)}
          />
        </div>
      </div>
      <div className="input-row">
        <label htmlFor="username" className="modal-text">
          Update Username
        </label>
        <div>
          <Input
            type="text"
            placeholder="e.g JohnDoe"
            value={""}
            name="username"
            onChange={(name, value) => console.log(name, value)}
          />
        </div>
      </div>
    </form>
  );
};

const UserAvatar: React.FC = () => {
  return (
    <>
      <img
        src={flintaiLogo}
        alt={`avatar`}
        className="w-[5rem] h-[5rem] object-cover rounded-full"
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
//           className="w-[2.4rem] h-[2.4rem] object-cover rounded-full"
//         />
//       )}
//     </>
//   );
// };

const PersonalizedSettings: React.FC = () => {
  const show = false;
  const navigate = useNavigate();
  const handleRouting = (route: string) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col justify-start w-full h-full item-center">
      <section className="custom-input !flex !flex-col !items-start !w-full !h-auto !justify-between  !border-x-0 !border-t-0 !p-0 !my-0 !rounded-[0px] !border-opacity-10">
        <div className="custom-input !flex !flex-col !items-start !w-full !h-auto !justify-between !border-[1px] !border-x-0 !border-t-0 !px-1 !py-3 !m-0 !rounded-[0px] !border-opacity-10">
          <span className="mb-2 font-semibold text-md">
            Forgot your password?
          </span>
          <button
            type="button"
            onClick={() => handleRouting("/auth/forgot-password")}
            className={"cta-btn !w-[80%] md:!w-[60%] !h-[2.6rem] !shadow-none"}
          >
            Update Password
          </button>
        </div>
        <div className="custom-input !flex !flex-col !items-start !w-full !h-auto !justify-between !border-[1px] !border-x-0 !border-t-0 !px-1 !py-3 !m-0 !rounded-[0px] !border-opacity-10">
          <span className="mb-2 font-semibold text-md">Profile Settings</span>
          <div className="flex flex-col items-start justify-start w-full h-auto gap-2 py-2 md:py-3">
            <button>
              <UserAvatar />
            </button>
            <span>Update Profile Photo</span>
          </div>
          <button
            type="button"
            onClick={() => {}}
            className={"cta-btn !w-[80%] md:!w-[60%] !h-[2.6rem] !shadow-none"}
          >
            Update Account Details
          </button>
          {show && <UpdateAccountDetails />}
        </div>
      </section>
      <div className="custom-input !flex !flex-row !items-center !w-full !h-auto !justify-between !border-0 !px-1 !py-3 !m-0 !rounded-[0px] !border-t-0">
        <DeleteAccount />
      </div>
    </div>
  );
};

export default PersonalizedSettings;
