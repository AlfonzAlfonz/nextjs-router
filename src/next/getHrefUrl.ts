import { match } from "../match";
import { FlattenRoutes } from "../router";
import { parse } from "url";

const getHrefUrl = (url: string, flattenRoutes: FlattenRoutes) => {
  const { query } = parse(url);
  const m = match<Record<string, string>>(url, flattenRoutes);
  return m
    ? flattenRoutes[m.path].filename + (query ? "?" + query : "")
    : undefined;
};

export default getHrefUrl;
