const userId =
  // @ts-ignore
  typeof window !== "undefined" && JSON.parse(localStorage?.getItem("user_id"));

const token =
  // @ts-ignore
  typeof window !== "undefined" && localStorage?.getItem("token");

export const USER = Object.freeze({
  ID: JSON.stringify(userId),
  TOKEN: JSON.stringify(token),
});
