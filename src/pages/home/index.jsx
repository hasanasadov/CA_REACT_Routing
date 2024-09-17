import React, { Fragment } from "react";
import Header from "../../comps/header";
import Table from "../../comps/table";

const HomePage = () => {
  return (
    <Fragment>
      <div className="font-sans text-center bg-gray-100 p-8 flex flex-col justify-center ">
        <h1 className="text-4xl font-bold">Home Page</h1>
        <p className="text-lg">Hasanali Asadov</p>
        <Table className="flex " />
      </div>
    </Fragment>
  );
};

export default HomePage;
