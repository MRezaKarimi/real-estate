import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Ellipsis } from "react-awesome-spinners";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesByIds } from "../stores/propertySlice";
import { clearFavorites, getFavorites } from "../utils/favoriteTools";
import { OutlinedButton } from "./buttons";
import Footer from "./footer";
import PropertyItem from "./propertyItem";

const Favorites = () => {
  const ids = getFavorites();
  const dispatch = useDispatch();
  const { favoriteProperties, loading } = useSelector(
    (store) => store.property
  );

  useEffect(() => {
    if (ids.length > 0) {
      dispatch(getPropertiesByIds(ids));
    }
  }, []);

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear favorites?")) {
      clearFavorites();
      window.location.reload();
    }
  };

  return (
    <>
      {ids.length === 0 ? (
        <div>
          <div className="flex justify-center h-[calc(100vh-4rem)]">
            <span className="text-sky-900 text-2xl font-semibold my-auto">
              Favorite list is empty
            </span>
          </div>
          <Footer />
        </div>
      ) : loading ? (
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
          <Ellipsis color="#0369a1" />
        </div>
      ) : (
        <div className="w-11/12 mx-auto">
          <div className="flex my-5 justify-between items-center">
            <span className="text-sky-900 text-3xl font-bold">
              Favorite Properties
            </span>
            <OutlinedButton
              text="Clear All"
              icon={faTrash}
              onClick={handleClearAll}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4">
            {favoriteProperties.map((property, i) => (
              <PropertyItem key={i} property={property} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
