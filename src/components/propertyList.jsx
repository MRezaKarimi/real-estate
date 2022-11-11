import React, { useEffect } from "react";
import PropertyItem from "./propertyItem";
import { useDispatch, useSelector } from "react-redux";
import { Ellipsis } from "react-awesome-spinners";
import { useSearchParams } from "react-router-dom";
import { getProperties } from "../stores/propertySlice";
import Pagination from "./pagination";

const PropertyList = () => {
  const { propertyList, pagesCount, loading } = useSelector(
    (store) => store.property
  );
  const [queryParams] = useSearchParams();
  const dispatch = useDispatch();

  document.title = `Property List | Page ${queryParams.get("page") ?? 1}`;

  useEffect(() => {
    dispatch(
      getProperties({
        page: queryParams.get("page") ?? 1,
        city: queryParams.get("city"),
        northWest: queryParams.get("northWest"),
        southEast: queryParams.get("southEast"),
      })
    );
    window.scrollTo(0, 0);
  }, [queryParams]);

  return (
    <div className="basis-full lg:basis-1/2">
      {loading ? (
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
          <Ellipsis color="#0369a1" />
        </div>
      ) : propertyList && propertyList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 px-4">
          {propertyList.map((property, i) => (
            <PropertyItem key={i} property={property} />
          ))}
        </div>
      ) : (
        <div className="h-[calc(100vh-4rem)] flex flex-col justify-center items text-center text-sky-900">
          <span className="font-bold text-5xl my-7">Oops!</span>
          <span className="font-semibold text-lg">
            No property was found!
            <br />
            Try searching in another city
          </span>
        </div>
      )}

      <Pagination pagesCount={pagesCount} />
    </div>
  );
};

export default PropertyList;
