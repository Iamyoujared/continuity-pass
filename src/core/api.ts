import axios from "axios";
import useSWR from "swr";
import { getToken } from "@/api/actions";

// @ts-ignore
const fetcher = (...args) =>
  // @ts-ignore
  fetch(...args).then((res) => {
    if (res.status === 200) return res.json();
    throw Error("An error has occurred.");
  });

const USERS_URL = `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/users/Iamyoujared`;
const REPOS_URL = `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/user/repos`;
const CONTENT_REPO_URL = `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/repos/Iamyoujared/codesignal-tests/contents/package.json`;

// We obtain the files from the repo
const GET_TREES_URL = `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/repos/Iamyoujared/codesignal-tests/git/trees/23cf69d9ac4becb88fa665397024fdc6fc8b68d8`;

export function UseTrees() {
  const { data, error, isLoading } = useSWR(GET_TREES_URL, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    trees: data,
    isLoading,
    isError: error,
  };
}

export function UseUsers() {
  const { data, error, isLoading } = useSWR(USERS_URL, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    users: data,
    isLoading,
    isError: error,
  };
}

export function UseContentRepo() {
  const { data, error, isLoading } = useSWR(CONTENT_REPO_URL, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    content: data,
    isLoading,
    isError: error,
  };
}

export const UseRepos = (token: string) => {
  console.log("token", token);
  const fetcherAxios = (url: string) =>
    axios
      .get(url, { headers: { Authorization: "Bearer " + token } })
      .then((res) => res.data);

  const { data, error, isLoading } = useSWR(REPOS_URL, fetcherAxios, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    repos: data,
    isLoading,
    isError: error,
  };
};
