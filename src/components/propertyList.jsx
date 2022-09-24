import React, { useEffect, useState } from "react";
import PropertyItem from "./propertyItem";
import { useDispatch, useSelector } from "react-redux";
import { Ellipsis } from "react-awesome-spinners";
import { getProperties } from "../stores/propertySlice";
import Pagination from "./pagination";

const PropertyList = () => {
  const [page, setPage] = useState(0);
  const { propertyList, pagesCount, loading } = useSelector(
    (store) => store.property
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperties({ page }));
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="basis-full lg:basis-1/2">
      {loading ? (
        <div
          className="flex justify-center items-center"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <Ellipsis color="#0369a1" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
          {propertyList.map((property, i) => (
            <PropertyItem key={i} property={property} />
          ))}
        </div>
      )}

      <Pagination page={page} setPage={setPage} pagesCount={pagesCount} />
    </div>
  );
};

export default PropertyList;
