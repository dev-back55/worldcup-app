// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { partidos } from "../../services/partidosServices";

export default function handler(req, res) {
  res.status(200).json(partidos)
}

// export async function getServerSideProps() {
//   const { NEXT_PUBLIC_API_URL } = process.env
//   const res = fetch(`${NEXT_PUBLIC_API_URL}/api/partidos`)
//   const data = await res.json()

//   return {
//     props: {
//       partidos: data.attributes
//     }
//   }
// }
