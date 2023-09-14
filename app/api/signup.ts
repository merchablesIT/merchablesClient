import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email } = req.body as {email: string};

        // You can perform further processing here, such as storing the email in a database.

        // For demonstration purposes, let's just send a response.
        res.status(200).json({ message: 'Email submitted successfully!' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}