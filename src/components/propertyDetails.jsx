import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCheck,
  faEnvelope,
  faLocationDot,
  faMessage,
  faPhone,
  faRuler,
  faShareNodes,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { markerIcon } from "./markers";
import { FilledButton, OutlinedButton } from "./buttons";
import Footer from "./footer";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyById } from "../stores/propertySlice";
import { Ellipsis } from "react-awesome-spinners";
import numToMoney from "../utils/numToMoney";
import ImageGallery from "./imageGallery";
import { addToFavorites, isInFavorites } from "../utils/favoriteTools";

const PropertyDetails = () => {
  document.title = "Property Details";
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(isInFavorites(id));
  const { propertyDetail, loading } = useSelector((store) => store.property);

  useEffect(() => {
    dispatch(getPropertyById(id));
  }, []);

  return loading || propertyDetail == null ? (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <Ellipsis color="#0369a1" />
    </div>
  ) : (
    <>
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col gap-y-1 sm:flex-row my-5 sm:items-end justify-between">
          <div className="flex flex-col gap-y-2">
            <span className="text-sky-900 text-2xl font-semibold">
              {propertyDetail.city}
            </span>
            <span className="text-gray-500">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              {propertyDetail.address}
            </span>
          </div>
          <div className="flex gap-x-2">
            <OutlinedButton text="Share" icon={faShareNodes} />
            {isFavorite ? (
              <FilledButton text="Added To Favorites" icon={faCheck} disabled />
            ) : (
              <FilledButton
                text="Add To Favorites"
                icon={faHeart}
                onClick={() => {
                  addToFavorites(propertyDetail._id);
                  setIsFavorite(true);
                }}
              />
            )}
          </div>
        </div>
        <ImageGallery
          images={propertyDetail.images.map((image) => {
            return {
              thumb: image.thumb,
              fullSize: image.fullSize.replace("507x312xc.jpg", "1100xxs.jpg"),
            };
          })}
        />
        <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2 my-10">
          <div className="flex flex-col gap-y-2 md:w-1/4 md:order-last">
            <div className="p-3 rounded-lg border-2 border-gray-200 flex flex-col gap-y-1 h-fit">
              <span className="text-gray-500">Price</span>
              <span className="text-sky-900 font-bold text-xl">
                ${numToMoney(propertyDetail.price)}
              </span>
              <span className="text-gray-500">
                Price per m<sup>2</sup>
              </span>
              <span className="text-sky-900 font-bold text">
                $
                {numToMoney(
                  Math.trunc(
                    Number(propertyDetail.price) / Number(propertyDetail.area)
                  )
                )}
              </span>
              <FilledButton text="Request Loan" />
            </div>
            <div className="p-3 rounded-lg border-2 border-gray-200 flex flex-col gap-y-1 h-fit">
              <div className="flex items-center gap-x-3">
                <img
                  src={process.env.PUBLIC_URL + "/avatar.png"}
                  alt="avatar"
                  className="ring-sky-700/40 ring-2 p-0.5 rounded-full h-16 w-h-16"
                />
                <div>
                  <p className="text-sky-900 font-semibold text-lg">
                    John Smith
                  </p>
                  <p className="text-gray-500 font-medium text-sm">Agent</p>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row justify-between mt-3">
                <OutlinedButton text="Call" icon={faPhone} />
                <OutlinedButton text="Email" icon={faEnvelope} />
                <OutlinedButton text="Chat" icon={faMessage} />
              </div>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="h-fit grid gap-y-5 grid-cols-2 sm:gap-y-0 sm:grid-cols-4 text-sky-900 text-xl font-semibold rounded-lg p-3 border-2 border-gray-200">
              <PropertyFeatureItem
                icon={faBed}
                feature="Bedrooms"
                value={propertyDetail.bed}
              />
              <PropertyFeatureItem
                icon={faShower}
                feature="Bathrooms"
                value={propertyDetail.bath}
              />
              <PropertyFeatureItem
                icon={faRuler}
                feature="Area"
                value={
                  <>
                    {propertyDetail.area} m<sup>2</sup>
                  </>
                }
              />
              <PropertyFeatureItem
                icon={faCalendarDays}
                feature="Year Built"
                value={propertyDetail.year}
              />
            </div>
            <p className="text-sky-900 text-xl font-semibold mt-10 mb-5">
              About this property
            </p>
            <p className="md:pr-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="md:pr-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
        <MapContainer
          zoom={13}
          center={["40.6531", "-73.9628"]}
          className="my-10 z-0"
          style={{ width: "100%", height: "400px", borderRadius: "0.75rem" }}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={["40.6531", "-73.9628"]} icon={markerIcon}></Marker>
        </MapContainer>
      </div>
      <Footer />
    </>
  );
};

const PropertyFeatureItem = ({ feature, value, icon }) => {
  return (
    <div>
      <p className="text-gray-500 text-base font-medium mb-3">{feature}</p>
      <FontAwesomeIcon icon={icon} />
      <span className="ml-2">{value}</span>
    </div>
  );
};

export default PropertyDetails;
