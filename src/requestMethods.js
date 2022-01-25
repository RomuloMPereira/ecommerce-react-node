import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTczM2FlYWFmYzBlMmUyMjE0MjNiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzEzNzcxMywiZXhwIjoxNjQzMzk2OTEzfQ.2T1lFQUUC12gPzwpBJgJNzsDCRuH4AHK4R1aPl-kuGw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { authorization: `Bearer ${TOKEN}` },
});