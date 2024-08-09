import createFetchClient, { Middleware } from "openapi-fetch";
import createClient from "openapi-react-query";
import { paths } from "./schema";

const fetchClient = createFetchClient<paths>({
  baseUrl: "https://mantine-starter-kit.web.localhost/",
});
const contentTypeBasedOnHttpMethod: Middleware = {
  async onRequest(req) {
    if (req.request.method === "PATCH") {
      req.request.headers.set("Content-Type", "application/merge-patch+json");
    } else {
      req.request.headers.set("Content-Type", "application/ld+json");
    }
  },
};

fetchClient.use(contentTypeBasedOnHttpMethod);
const $api = createClient(fetchClient);

export default $api;