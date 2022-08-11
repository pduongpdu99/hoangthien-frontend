import fs from "fs";

/**
 * HOME PAGE REQUEST
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const HOMEPAGE_REQUEST = async (req, res) => {
  try {
    const data = await fs.readFile("./src/views/index.html");
    res.send(data);
    res.end();
  } catch (error) {
    throw error;
  }
};
