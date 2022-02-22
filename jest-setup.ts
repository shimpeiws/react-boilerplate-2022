import "@testing-library/jest-dom";
import * as fetchPolifill from "whatwg-fetch";

global.fetch = fetchPolifill.fetch;
global.Request = fetchPolifill.Request;
global.Headers = fetchPolifill.Headers;
global.Response = fetchPolifill.Response;
