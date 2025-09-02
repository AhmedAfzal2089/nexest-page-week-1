import image from "../pngs/sitefooter/image.png";

const SiteFooterSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around mt-20 p-10 gap-5">
      <div>
        <img src={image} alt="image" />
      </div>
      <div className="flex flex-col gap-4 lg:w-150">
        <span className="text-4xl font-bold text-gray-600">
          How to design your site footer like
        </span>
        <span className="text-4xl font-bold text-gray-600">
         we did
        </span>
        <span className="text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam
          ab deleniti accusantium excepturi, suscipit consectetur saepe fugiat
          dignissimos aut minima ex voluptatem obcaecati, natus debitis
          voluptatibus dolorem provident explicabo?
        </span>
        <button className="bg-green-600 text-white py-4 px-4 rounded-lg w-40">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SiteFooterSection;
