import { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="space-y-4 px-4 py-10">
      <div className="flex items-center space-x-3">
        <div className="h-14 w-14 rounded-full bg-slate-500" />
        <label
          htmlFor="picture"
          className="cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:ring-2 hover:ring-orange-500"
        >
          Change
          <input type="file" className="hidden" id="picture" accept="image/*" />
        </label>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700" htmlFor="phone">
          Email Address
        </label>
        <div className="flex rounded-md shadow-sm">
          <span className="flex select-none items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            +82
          </span>
          <input
            id="phone"
            className="w-full appearance-none rounded-r-md border border-l-0 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            type="number"
            required
          />
        </div>
      </div>

      <button className="focus:ring-offset-5 mt-6 w-full rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
        Update Profile
      </button>
    </div>
  );
};

export default EditProfile;
