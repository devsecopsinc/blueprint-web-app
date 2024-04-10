import { useMemo } from "react";
import { cacheExchange, createClient, fetchExchange } from "urql";

const DEV = import.meta.env.DEV;
const PROD_HASURA_GRAPHQL_API_ENDPOINT = import.meta.env
  .VITE_HASURA_GRAPHQL_API_ENDPOINT;
const DEV_HASURA_API_ENDPOINT = "http://localhost:3001/v1/graphql";
const GRAPHQL_ENDPOINT = DEV
  ? DEV_HASURA_API_ENDPOINT
  : PROD_HASURA_GRAPHQL_API_ENDPOINT ?? "/v1/graphql";
const ADMIN_SECRET =
  import.meta.env.VITE_HASURA_GRAPHQL_ADMIN_SECRET ?? "password2024";

const defaultHeaders = {
  "content-type": "application/json",
  "x-hasura-admin-secret": ADMIN_SECRET,
};

const createUrqlClient = (headers: Record<string, string> = defaultHeaders) =>
  createClient({
    url: GRAPHQL_ENDPOINT ?? "",
    fetchOptions: {
      headers,
    },
    exchanges: [cacheExchange, fetchExchange],
  });

export const useUrqlClient = () => {
  const headers = defaultHeaders;
  const client = useMemo(() => createUrqlClient(headers), [headers]);
  return client;
};
