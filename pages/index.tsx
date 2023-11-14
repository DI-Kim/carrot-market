import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:text-white open:bg-indigo-400">
        <summary className="cursor-pointer">What is my fav. food.</summary>
        <span className="">kimchi</span>
      </details>

      <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>

      <input
        type="file"
        className="file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400 file:transition-colors file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white"
      />

      <p className="first-letter:text-7xl first-letter:hover:text-purple-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi, veritatis incidunt dolor quod voluptatum, nam
        delectus officia deleniti debitis porro cum eligendi impedit suscipit obcaecati minima error ullam id.
      </p>
    </div>
  );
};

export default Home;
