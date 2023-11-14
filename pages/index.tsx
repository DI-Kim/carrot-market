import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 p-5">
      <input type="text" required placeholder="Username" className="border p-1 border-gray-400 rounded peer" />
      <span className="hidden peer-invalid:text-red-500 peer-invalid:block">This input is invalid</span>
      <span className="hidden peer-valid:text-teal-500 peer-valid:block">This input is valid</span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  );
};

export default Home;
