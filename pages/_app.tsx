import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <button
        onClick={() => {
          const component = document.getElementById("mode");
          if (component?.classList.contains("dark")) component?.classList.remove("dark");
          else component?.classList.add("dark");
        }}
      >
        dark | light
      </button>
      <div className="" id="mode">
        <Component {...pageProps} />
      </div>
    </>
  );
}
