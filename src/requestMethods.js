import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTczM2FlYWFmYzBlMmUyMjE0MjNiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzEyNjQ5MiwiZXhwIjoxNjQzMzg1NjkyfQ.IFQDIslVR4UFgTUD3phgq5GLoRDuKlJj-IpVI8u4Jw0";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { authorization: `Bearer ${TOKEN}` },
});