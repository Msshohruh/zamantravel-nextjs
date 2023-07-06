"use client";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "@/app/context/store";
import Header from "../Header";
import Footer from "../Footer";

async function fetchData() {
  const { getData }: any = useContext(LangContext);

  const [data, setData] = useState(false);
  useEffect(() => {
    async function get() {
      const req = await fetch("http://localhost:3000/api");
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      // Recommendation: handle errors
      if (!req.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }
      const res = await req.json();
      getData(res);
    }
    get();
  }, []);
  return true;
}

const Layout = ({ children }: any) => {
  const { state, changeLang }: any = useContext(LangContext);
  fetchData();
  console.log(state);

  if (state.content) {
    return (
      <html lang={state.lang} style={{ scrollBehavior: "smooth" }}>
        <body>
          <Header
            data={state.content.header}
            lang={state.lang}
            changeLang={changeLang}
          />
          {children}
          <Footer />
        </body>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <body>
          <div className="text-[#000] h-full w-full flex items-center justify-center">
            <div className="spinner" style={{ zoom: 1.7 }}></div>
          </div>
        </body>
      </html>
    );
  }
};
export default Layout;
