/** @format */

import * as actionTypes from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS_REQUEST:
			return {
				loading: true,
				products: [],
			};
		case actionTypes.GET_PRODUCTS_SUCCESS:
			return {
				products: action.payload,
				loading: false,
			};
		case actionTypes.GET_PRODUCTS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action,
) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
			return {
				loading: true,
			};
		case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
			return {
				loading: false,
				product: action.payload,
			};
		case actionTypes.GET_PRODUCT_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case actionTypes.GET_PRODUCT_DETAILS_RESET:
			return {
				product: {},
			};
		default:
			return state;
	}
};

export const productDeleteReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case actionTypes.PRODUCT_DELETE_REQUEST:
			return {
				loading: true,
			};
		case actionTypes.PRODUCT_DELETE_SUCCESS:
			return {
				loading: false,
				product: action.payload,
				success: true,
			};
		case actionTypes.PRODUCT_DELETE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const productSaveReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case actionTypes.PRODUCT_SAVE_REQUEST:
			return {
				loading: true,
				success: true,
				product: action.payload,
			};
		case actionTypes.PRODUCT_SAVE_SUCCESS:
			return {
				loading: false,
			};
		case actionTypes.PRODUCT_SAVE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const productReviewSaveReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case actionTypes.PRODUCT_REVIEW_SAVE_REQUEST:
			return {
				loading: true,
			};
		case actionTypes.PRODUCT_REVIEW_SAVE_SUCCESS:
			return {
				loading: false,
				review: action.payload,
				success: true,
			};
		case actionTypes.PRODUCT_REVIEW_SAVE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case actionTypes.PRODUCT_REVIEW_SAVE_RESET:
			return {};
		default:
			return state;
	}
};
