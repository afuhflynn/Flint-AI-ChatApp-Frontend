import React from "react";

const SideBar: React.FC = () => {
  return (
    <section className="h-full md:w-[18rem] md:min-w-[18rem] hidden md:flex">
      <nav>Nav</nav>
      <div>Side bar</div>
    </section>
  );
};

export default SideBar;
