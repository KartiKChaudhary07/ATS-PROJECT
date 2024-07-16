import React, { useState } from "react";
import Layout from "./Layout";
import Window from "../components/Window";
import { useContext } from "react";
import { ResponseContext } from "./context/ResponseContext.jsx";
import { Link } from "react-router-dom";

export default function Response() {
  const { responseData } = useContext(ResponseContext);
  return (
    <div className="w-full h-full">
      <Layout />
      <div className="flex text-3xl md:text-5xl w-full items-center justify-center">
        <h2>Your Resume Scored : {responseData.score}%</h2>
      </div>
      <div className="px-1 py-4 md:flex  md:flex-row  gap-x-10 justify-center flex-col w-full ">
        <div className="w-full pt-3">
          <Window title="Positives" response={responseData.positives} />
        </div>
        <div className="  pt-3 w-full">
          <Window title="Negatives" response={responseData.negatives} />
        </div>
      </div>
      <div className="flex justify-center">
        <Link to={"/"}>
          <button className="bg-purple-700 px-6 py-2 rounded-lg">
            Try another response
          </button>
        </Link>
      </div>
    </div>
  );
}