/* eslint-disable keyword-spacing */
import { process } from 'dotenv';

const API_URL = process.env.CLOUDINARY_URL;

const getImages = async (nextCursor) => {
  const params = new URLSearchParams();

  if (nextCursor) {
    params.append('next_cursor', nextCursor);
  }

  const response = await fetch(`${API_URL}/photos?${params.toString()}`);
  const data = await response.json();
  return data;
};

export default getImages;
