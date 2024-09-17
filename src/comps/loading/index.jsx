import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loading = () => {
  return (
    <SkeletonTheme className="block w-max" highlightColor="#444">
      <Skeleton className="block h-4 w-max" count={10} />
    </SkeletonTheme>
  );
};

export default Loading;
