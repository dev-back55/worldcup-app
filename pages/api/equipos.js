import { equipos } from "../../services/equiposServices";

export default function handleEquipos(req, res) {
  res.status(200).json(equipos)
}