import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://submify.vercel.app/blessingezenwa0211@gmail.com",
      {
        method: "POST",
        body: req.body,
      }
    );

    if (!response.ok) {
      return res.status(500).json({ success: false });
    }

    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false });
  }
}
