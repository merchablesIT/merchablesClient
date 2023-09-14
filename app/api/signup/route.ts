import { NextApiRequest,  } from "next";
import { NextResponse } from "next/server";
/**
 * Retrieves a list of characters from the characters.json file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the characters data.
 */


export async function POST(req: NextApiRequest, res: NextResponse) {
    const { email } = req.body as {email: string};
    return NextResponse.json({message: 'Email submitted successfully!'})
}