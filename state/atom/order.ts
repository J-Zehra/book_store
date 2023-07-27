import { BookFullDetails, FetchedBookData, FetchedCart } from "@/types";
import { atom } from "recoil";

export const selectedCartItems = atom({
  key: "selectedCartItems",
  default: [] as FetchedCart[],
});

export const selectedOrderItem = atom({
  key: "selectedOrderItem",
  default: {} as FetchedBookData | BookFullDetails | undefined,
});
// export const shippingAddress = atom({
//   key: "shippingAddress",
//   default: {} as FetchedBookData | BookFullDetails | undefined,
// });

// SHIPPING ADDRESS
export const firstNameState = atom({
  key: "firstName",
  default: "",
});
export const lastNameState = atom({
  key: "lastName",
  default: "",
});
export const emailState = atom({
  key: "email",
  default: "",
});
export const addressState = atom({
  key: "address",
  default: "",
});
export const cityState = atom({
  key: "city",
  default: "",
});
export const stateState = atom({
  key: "state",
  default: "",
});
export const postalCodeState = atom({
  key: "postalCode",
  default: 0,
});
export const countryState = atom({
  key: "country",
  default: "",
});

// PAYMENT DETAILS
export const nameState = atom({
  key: "name",
  default: "",
});
export const cardNumberState = atom({
  key: "cardNumberState",
  default: "",
});
export const expiryDateState = atom({
  key: "expiryDateState",
  default: "",
});
export const cvvState = atom({
  key: "cvvState",
  default: "",
});
