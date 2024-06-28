import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { AxiosInstance } from "axios";
import { Dispatch } from "@reduxjs/toolkit";

export interface ThunkExtraArg {
  api: AxiosInstance;
}
export const useAppDispatch = () => useDispatch<AppDispatch>();

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch?: Dispatch;
}
