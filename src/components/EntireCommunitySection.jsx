import ClubsGroups from "../assets/ClubsGroups";
import NationalAss from "../assets/NationalAss";
import Members from "../client svgs/Members";

const EntireCommunitySection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-18 gap-4 px-4">
        <span className="text-4xl font-bold text-gray-600 flex items-center justify-center">
          Manage Your entire community
        </span>
        <span className="text-4xl font-bold text-gray-600">
          in a single system
        </span>
        <span className="text-gray-500">Who is nextcent suitable for?</span>
      </div>
      <div className="mt-5 flex flex-col lg:flex-row lg:gap-10 items-center justify-around">
        <div className="flex flex-col items-center justify-center rounded-2xl shadow-xl w-3/4 lg:w-1/5 py-8 gap-1">
          <div>
            <Members />
          </div>
          <span className="text-2xl font-bold text-gray-600">Membership</span>
          <span className="text-2xl font-bold text-gray-600">
            Organizations
          </span>
          <span className="w-60 flex items-center justify-center  text-gray-500">
            Our membership management software provides full automation of
            membership renewals and payments
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl shadow-xl w-3/4 lg:w-1/5 py-8 gap-1">
          <div>
            <NationalAss />
          </div>
          <span className="text-2xl font-bold text-gray-600">National</span>
          <span className="text-2xl font-bold text-gray-600">Association</span>
          <span className="w-60 flex items-center justify-center text-gray-500">
            Our membership management software provides full automation of
            membership renewals and payments
          </span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl shadow-xl w-3/4 lg:w-1/5 py-8 gap-1">
          <div>
            <ClubsGroups />
          </div>
          <span className="text-2xl font-bold text-gray-600">Clubs And</span>
          <span className="text-2xl font-bold text-gray-600">Groups</span>
          <span className="w-60 flex items-center justify-center text-gray-500">
            Our membership management software provides full automation of
            membership renewals and payments
          </span>
        </div>
      </div>
    </>
  );
};

export default EntireCommunitySection;
