import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'utils/axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const request = req.body;
  console.log(request)
  try {
    const response = await axios.post('/api/app/order/place', request);
    res.status(200).json(response.data);
  } catch (err) {
    // console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
