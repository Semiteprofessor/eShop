/** @format */

import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

		const { data } = await axios.get("/api/products");

		dispatch({
			type: actionTypes.GET_PRODUCTS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCTS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/products/${id}`);

		dispatch({
			type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const removeProductDetails = () => (dispatch) => {
	dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};

const saveProduct = (product) => async (dispatch, getState) => {
	try {
		dispatch({ type: actionTypes.PRODUCT_SAVE_REQUEST, payload: product });
		const {
			userSignin: { userInfo },
		} = getState();
		if (!product._id) {
			const { data } = await axios.post("/api/products", product, {
				headers: {
					Authorization: "Bearer " + userInfo.token,
				},
			});
			dispatch({ type: actionTypes.PRODUCT_SAVE_SUCCESS, payload: data });
		} else {
			const { data } = await axios.put(
				"/api/products/" + product._id,
				product,
				{
					headers: {
						Authorization: "Bearer " + userInfo.token,
					},
				},
			);
			dispatch({ type: actionTypes.PRODUCT_SAVE_SUCCESS, payload: data });
		}
	} catch (error) {
		dispatch({ type: actionTypes.PRODUCT_SAVE_FAIL, payload: error.message });
	}
};

const deleteProdcut = (productId) => async (dispatch, getState) => {
	try {
		const {
			userSignin: { userInfo },
		} = getState();
		dispatch({ type: actionTypes.PRODUCT_DELETE_REQUEST, payload: productId });
		const { data } = await axios.delete("/api/products/" + productId, {
			headers: {
				Authorization: "Bearer " + userInfo.token,
			},
		});
		dispatch({
			type: actionTypes.PRODUCT_DELETE_SUCCESS,
			payload: data,
			success: true,
		});
	} catch (error) {
		dispatch({ type: actionTypes.PRODUCT_DELETE_FAIL, payload: error.message });
	}
};

const saveProductReview = (productId, review) => async (dispatch, getState) => {
	try {
		const {
			userSignin: {
				userInfo: { token },
			},
		} = getState();
		dispatch({
			type: actionTypes.PRODUCT_REVIEW_SAVE_REQUEST,
			payload: review,
		});
		const { data } = await axios.post(
			`/api/products/${productId}/reviews`,
			review,
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			},
		);
		dispatch({ type: actionTypes.PRODUCT_REVIEW_SAVE_SUCCESS, payload: data });
	} catch (error) {
		// report error
		dispatch({
			type: actionTypes.PRODUCT_REVIEW_SAVE_FAIL,
			payload: error.message,
		});
	}
};

export { saveProduct, deleteProdcut, saveProductReview };
