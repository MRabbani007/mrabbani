import React from "react";

const ExperienceItem = ({ item }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
      <div>
        <div className="flex justify-center items-center py-2">
          <img
            src={item.companyLogo}
            alt="Company Logo"
            className="inline w-12 mx-2"
          />
          <p className="text-xl">{item.company}</p>
        </div>
        <div>
          <img src={item.image} alt="" />
          <p className="text-center text-xl bg-[#192f50] p-2">{item.project}</p>
        </div>
      </div>
      <div>
        <p className="text-center text-3xl">{item.position}</p>
        <p className="text-center text-2xl">{item.period}</p>
        {item.responsibilities.map((resp) => (
          <p className="border-[1px] p-2 my-2 mx-4 border-gray-100">{resp}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
