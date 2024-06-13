import React, { useEffect, useState } from "react";
import ExpertiseCard from "./studentHome/ExpertiseCard";
import axios from "axios";
import ExpertCard from "./studentHome/ExpertCard";

const StudentHome = () => {
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [experts, setExperts] = useState();

  const handleClick = async (value) => {
    setSelectedExpertise(value);
    await getExperts(value);
    console.log(value);
  };

  const getExperts = async (value) => {
    if (!value) {
      return;
    }

    const response = await axios.get("http://localhost:5000/api/v1/expert/");
    const { data } = response;
    const experts = data.user.filter((expert) => expert.expertise === value);
    console.log(experts);
    setExperts(experts);
  };
  useEffect(() => {
    if (!selectedExpertise) {
      return;
    }
  }, [selectedExpertise]);
  return (
    <>
      {!experts ? (
        <div className=" bg-white w-screen min-h-screen flex flex-col justify-center items-center ">
          <div className="mb-10">
            <p className=" text-4xl">
              {" "}
              Welcome, Choose an expertise to get help
            </p>
          </div>
          <div className="flex gap-8">
            <ExpertiseCard value="Bug solving" handleClick={handleClick} />
            <ExpertiseCard
              value="Tech career assistance"
              handleClick={handleClick}
            />
            <ExpertiseCard value="Academic support" handleClick={handleClick} />
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen p-10 flex gap-8 flex-wrap">
          {experts?.map((expert) => (
            <ExpertCard expert={expert} key={expert._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default StudentHome;
