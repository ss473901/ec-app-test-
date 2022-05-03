import axios from "axios";

const BASE_URL = "https://safe-everglades-33177.herokuapp.com/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDZjM2ZmNGM1Y2VmZWUzMmYwZDI5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTU4MjE2MSwiZXhwIjoxNjQ5ODQxMzYxfQ.Hc_Z41NqqmUInq-xRkKVewK8jp4rOBRrjGb9DZms-Es";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
