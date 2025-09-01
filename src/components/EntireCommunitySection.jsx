import Members from "../../public/client svgs/Members";

const EntireCommunitySection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-18 gap-4">
        <span className="text-4xl font-bold text-gray-600">
          Manage Your entire community
        </span>
        <span className="text-4xl font-bold text-gray-600">
          in a single system
        </span>
        <span className="text-gray-500">Who is nextcent suitable for?</span>
      </div>
      <div className="mt-5 lg:flex lg:gap-10 items-center justify-center">
        <div className="flex flex-col items-center justify-center rounded-2xl shadow-xl w-1/5 py-8 gap-1">
          <div>
            <Members />
          </div>
          <span className="text-2xl font-bold text-gray-600">Membership</span>
          <span className="text-2xl font-bold text-gray-600">
            Organizations
          </span>
          <span className="w-60 flex items-center justify-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </span>
        </div>
      </div>
    </>
  );
};

export default EntireCommunitySection;
