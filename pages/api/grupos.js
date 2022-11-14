import { grupos } from "../../services/gruposServices";

export default function handleGrupos(req, res) {
  res.status(200).json(grupos)
}