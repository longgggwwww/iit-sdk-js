import axios from "axios";
import { Prisma } from "@prisma/client";
import { server } from "..";

export async function create(input: Prisma.SchoolCreateInput) {
  try {
    const { status, data } = await axios.post(`${server}/api/schools`, input);
    return data;
  } catch (err) {
    console.log(err);
    console.log("hello world");
    return "jdaskd";
  }
}
