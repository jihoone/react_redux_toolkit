import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { incrementAsync } from "./counterSlice";

const Test = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = dispatch(incrementAsync(10));

    return () => {
        promise.abort();
    };
  }, []);

  return <div>Test</div>;
};

export default Test;
