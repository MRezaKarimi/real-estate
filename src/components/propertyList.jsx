import React, { useEffect, useState } from "react";
import PropertyItem from "./propertyItem";
import { useDispatch, useSelector } from "react-redux";
import { Ellipsis } from "react-awesome-spinners";
import { getProperties } from "../stores/propertySlice";
import { callApi } from "../actions/api";

const PropertyList = () => {
  const [page, setPage] = useState(0);
  const {
    list: propertyList,
    pagesCount,
    loading,
  } = useSelector((store) => store.property);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      callApi({
        url: "/buy",
        method: "GET",
        onSuccess: getProperties.type,
        params: { offset: page, limit: 10 },
      })
    );
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="basis-1/2">
      {loading ? (
        <div
          className="flex justify-center items-center"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <Ellipsis color="#0369a1" />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 px-4">
          {propertyList.map((property, i) => (
            <PropertyItem key={i} property={property} />
          ))}
        </div>
      )}

      <div className="flex flex-row justify-center py-8">
        {[...Array(pagesCount)].map((_, i) => {
          var style =
            page === i
              ? "bg-slate-700 text-white"
              : "text-slate-700 border-2 border-slate-700";
          return (
            <span
              key={i}
              className={`${style} text-lg text-center mx-1 rounded-lg cursor-pointer w-8 h-8`}
              onClick={() => setPage(i)}
            >
              {i + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyList;
