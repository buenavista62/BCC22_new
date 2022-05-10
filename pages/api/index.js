export default function handler(req, res) {
    const data = process.env.NEXT_PUBLIC_CODES
    res.status(200).json(data)
  }