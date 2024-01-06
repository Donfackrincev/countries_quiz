import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosRequestConfig, Method } from "axios";

interface Args_RequestConfig<D> {
  method: Method;
  url: string;
  params?: AxiosRequestConfig<D>["params"];
  data?: AxiosRequestConfig<D>["data"];
}

export type ResultContainer<T> = {
  status: number;
  statusText: string;
  result: T;
};

export function toError(error: unknown) {
  return error instanceof Error
    ? error
    : new Error(typeof error === "string" ? error : JSON.stringify(error));
}


const baseQuery: BaseQueryFn<Args_RequestConfig<unknown>, ResultContainer<unknown>, Error> = async (args) => {
    try {
      const response = await axios(args);
      if (response.data === undefined) {
        return {
          error: new Error("Missing response data on successful request"), // Always require data from the API just to be consistent
        };
      }
      return {
        data: {
          status: response.status,
          statusText: response.statusText,
          result: response.data,
        },
      };
    } catch (error: unknown) {
      return { error: toError(error) };
    }
  };


  export default function createHttpApi(reducerPath: string) {
    return createApi({
      reducerPath,
      baseQuery,
      endpoints() {
        return {};
      },
    });
  }