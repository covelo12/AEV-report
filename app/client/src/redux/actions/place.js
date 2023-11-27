import axios from "axios";
import {
  placeRequest,
  placeAddSuccess,
  placeFail,
  placesUserSuccess,
  placeGetByIdSuccess,
  placeUpdateSuccess,
  placeGetSuccess,
  placeDeleteSuccess,
} from "../reducers/place";

export const addNewPlace = (data) => async (dispatch) => {
  try {
    dispatch(placeRequest());

    const places = await axios({
      method: "POST",
      url: "http://localhost:4000/api/v1/place/addPlace",
      data,
    });
    dispatch(placeAddSuccess(places.data));
  } catch (error) {
    dispatch(placeFail(error));
  }
};
export const getUserPlaces = () => async (dispatch) => {
  try {
    dispatch(placeRequest());
    const places = await axios({
      method: "GET",
      url: "http://localhost:4000/api/v1/place/UserPlaces",
    });
    dispatch(placesUserSuccess(places.data));
  } catch (error) {
    dispatch(placeFail(error));
  }
};
export const getPlaceById = (id) => async (dispatch) => {
  try {
    dispatch(placeRequest());
    const place = await axios({
      method: "GET",
      url: `http://localhost:4000/api/v1/place/getPlace/${id}`,
    });
    dispatch(placeGetByIdSuccess(place.data));
  } catch (error) {
    dispatch(placeFail(error.message));
  }
};
export const updatePlace = (data) => async (dispatch) => {
  try {
    dispatch(placeRequest());
    const place = await axios({
      method: "PUT",
      url: `http://localhost:4000/api/v1/place/${data.id}`,
      data,
    });
    dispatch(placeUpdateSuccess(place.data));
  } catch (error) {
    dispatch(placeFail(error.message));
  }
};
export const getAllPlaces = () => async (dispatch) => {
  try {
    dispatch(placeRequest());
    const places = await axios({
      method: "GET",
      url: "http://localhost:4000/api/v1/place",
    });
    dispatch(placeGetSuccess(places.data));
  } catch (error) {
    dispatch(placeFail(error.message));
  }
};
export const deletePlace = (id) => async (dispatch) => {
  try {
    dispatch(placeRequest());
    const place = await axios({
      method: "DELETE",
      url: `http://localhost:4000/api/v1/place/${id}`,
    });
    console.log(place);
    dispatch(placeDeleteSuccess(id));
  } catch (error) {
    dispatch(placeFail(error.message));
  }
};
