import { HTMLAttributes, PropsWithChildren } from "react";

export type ComponentPropsWithChildren<T = {}> = HTMLAttributes<T> &
  PropsWithChildren<T>;
