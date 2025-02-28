import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'utils/axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get('/api/app/products');
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
