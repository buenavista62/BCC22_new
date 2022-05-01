export default function handler(req, res) {
    const data = {
        mumbai_rpc_url : process.env.MUMBAI_RPC_URL,
        mumbai_key: process.env.API_ACCESS_KEY,
        private_key: process.env.PRIVATE_KEY,
        codes: process.env.CODES,
        infura_key: process.env.INFURA_KEY
      
    }
    res.status(200).json(data)
  }