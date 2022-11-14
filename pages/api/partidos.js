// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { partidos } from "../../services/partidosServices";

export default function handler(req, res) {
  res.status(200).json(partidos)
}

// export async function getServerSideProps() {
//   const { API_URL } = process.env
//   const res = fetch(`${API_URL}/api/partidos`)
//   const data = await res.json()

//   return {
//     props: {
//       partidos: data.attributes
//     }
//   }
// }
