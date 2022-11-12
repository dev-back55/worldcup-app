// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export async function getServerSideProps() {
  const { API_URL } = process.env
  const res = fetch(`${API_URL}/api/partidos`)
  const data = await res.json()

  return {
    props: {
      partidos: data.attributes
    }
  }
}
