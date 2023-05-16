import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'utils/axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { slug },
  } = req
  try {
    const response = await axios.get(`/api/app/products/${slug}`);
    res.status(200).json(response.data.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
