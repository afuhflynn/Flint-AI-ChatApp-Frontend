const ShareChatHistory = () => {
  return (
    <>
      <span>Share your chat history with us</span>{" "}
      <button className="cta-btn !text-sm md:!text-md !px-3 !shadow-none !rounded-[40px] !flex !flex-row !items-center !justify-center !font-normal !w-[6.2rem] !h-[2.6rem] !gap-1 !border-red-700 !text-red-500 !bg-transparent hover:!bg-red-600 hover:!text-white !bg-opacity-20">
        Logout
      </button>
    </>
  );
};
const ShareUsername = () => {
  return (
    <>
      <span>Share your username with us</span>{" "}
      <button className="cta-btn !text-sm md:!text-md !px-3 !shadow-none !rounded-[40px] !flex !flex-row !items-center !justify-center !font-normal !w-[6.2rem] !h-[2.6rem] !gap-1 !border-red-700 !text-red-500 !bg-transparent hover:!bg-red-600 hover:!text-white !bg-opacity-20">
        Logout
      </button>
    </>
  );
};

const SecuritySettings: React.FC = () => {
  const LIST = [ShareUsername, ShareChatHistory];

  return (
    <div className="flex flex-col justify-start w-full h-full item-center">
      {LIST.map((Item, index) => (
        <div
          key={`item-${index}-${Item.name}`}
          className="custom-input !flex !flex-row !items-center !w-full !h-auto !justify-between !border-[1px] !border-x-0 first:!border-t-0 !border-b-0 !px-1 !py-3 !m-0 !rounded-[0px] !border-opacity-10"
        >
          {<Item />}
        </div>
      ))}
    </div>
  );
};

export default SecuritySettings;
