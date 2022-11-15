import { server } from '../config';

export async function getPartidos() {
    const res = await fetch(`${server}/api/partidos`);
    const data = await res.json();
    const datas = data.data;
    return datas;
}


export const partidos = {
    "data": [
      {
        "id": 190,
        "attributes": {
          "dia": "2022-11-20",
          "horario": "10:00 MX, 11:00 US, 13:00 AR, 17:00 ES",
          "equipo_a": "Qatar",
          "equipo_b": "Ecuador",
          "estadio": "Al Bayt",
          "grupo": "A",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_qa-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_ec-flag.gif",
          "createdAt": "2022-11-10T10:45:28.389Z",
          "updatedAt": "2022-11-13T12:51:59.503Z",
          "publishedAt": "2022-11-10T10:45:33.891Z"
        }
      },
      {
        "id": 3,
        "attributes": {
          "dia": "2022-11-21",
          "horario": "07:00 MX, 8:00 US, 10:00 AR, 14:00 ES",
          "equipo_a": "Inglaterra",
          "equipo_b": "Irán",
          "estadio": "Khalifa International",
          "grupo": "B",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_uk-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_ir-flag.gif",
          "createdAt": "2022-11-09T15:43:11.212Z",
          "updatedAt": "2022-11-13T12:52:00.161Z",
          "publishedAt": "2022-11-09T15:43:14.363Z"
        }
      },
      {
        "id": 4,
        "attributes": {
          "dia": "2022-11-21",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Usa",
          "equipo_b": "Gales",
          "estadio": "Ahmad Bin Ali",
          "grupo": "B",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_us-flag.gif",
          "flag_b": "https://t4.ftcdn.net/jpg/01/10/57/45/240_F_110574525_aKkGjsUi167klASS2tpSmadXSjSkgrB6.jpg",
          "createdAt": "2022-11-09T15:44:29.032Z",
          "updatedAt": "2022-11-13T12:52:00.846Z",
          "publishedAt": "2022-11-09T15:44:30.564Z"
        }
      },
      {
        "id": 2,
        "attributes": {
          "dia": "2022-11-21",
          "horario": "10:00 MX, 11:00 US, 13:00 AR, 17:00 ES",
          "equipo_a": "Senegal",
          "equipo_b": "Holanda",
          "estadio": "Al Thumama",
          "grupo": "A",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_sg-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_nl-flag.gif",
          "createdAt": "2022-11-09T15:41:44.675Z",
          "updatedAt": "2022-11-13T12:52:01.494Z",
          "publishedAt": "2022-11-09T15:41:48.724Z"
        }
      },
      {
        "id": 154,
        "attributes": {
          "dia": "2022-11-22",
          "horario": "04:00 MX, 5:00 US, 07:00 AR, 11:00 ES",
          "equipo_a": "Argentina",
          "equipo_b": "Arabia Saudita",
          "estadio": "Lusail",
          "grupo": "C",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_ar-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_sa-flag.gif",
          "createdAt": "2022-11-09T17:21:47.263Z",
          "updatedAt": "2022-11-13T12:52:02.141Z",
          "publishedAt": "2022-11-09T17:21:48.219Z"
        }
      },
      {
        "id": 161,
        "attributes": {
          "dia": "2022-11-22",
          "horario": "07:00 MX, 8:00 US, 10:00 AR, 14:00 ES",
          "equipo_a": "Dinamarca",
          "equipo_b": "Túnez",
          "estadio": "Education City",
          "grupo": "D",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_da-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_ts-flag.gif",
          "createdAt": "2022-11-09T17:28:26.478Z",
          "updatedAt": "2022-11-13T12:52:02.790Z",
          "publishedAt": "2022-11-09T17:28:27.318Z"
        }
      },
      {
        "id": 160,
        "attributes": {
          "dia": "2022-11-22",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Francia",
          "equipo_b": "Australia",
          "estadio": "Al Janoub",
          "grupo": "D",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_as-flag.gif",
          "createdAt": "2022-11-09T17:27:28.300Z",
          "updatedAt": "2022-11-13T12:52:03.446Z",
          "publishedAt": "2022-11-09T17:27:29.151Z"
        }
      },
      {
        "id": 155,
        "attributes": {
          "dia": "2022-11-22",
          "horario": "10:00 MX, 11:00 US, 13:00 AR, 17:00 ES",
          "equipo_a": "México",
          "equipo_b": "Polonia",
          "estadio": "Stadium 974",
          "grupo": "C",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_mx-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_pl-flag.gif",
          "createdAt": "2022-11-09T17:22:41.515Z",
          "updatedAt": "2022-11-13T12:52:04.102Z",
          "publishedAt": "2022-11-09T17:22:42.359Z"
        }
      },
      {
        "id": 173,
        "attributes": {
          "dia": "2022-11-23",
          "horario": "04:00 MX, 5:00 US, 07:00 AR, 11:00 ES",
          "equipo_a": "Marruecos",
          "equipo_b": "Croacia",
          "estadio": "Al Bayt",
          "grupo": "F",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_mo-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_hr-flag.gif",
          "createdAt": "2022-11-09T17:39:14.770Z",
          "updatedAt": "2022-11-13T12:52:04.771Z",
          "publishedAt": "2022-11-09T17:39:15.622Z"
        }
      },
      {
        "id": 167,
        "attributes": {
          "dia": "2022-11-23",
          "horario": "07:00 MX, 8:00 US, 10:00 AR, 14:00 ES",
          "equipo_a": "Alemania",
          "equipo_b": "Japón",
          "estadio": "Khalifa International",
          "grupo": "E",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_gm-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_ja-flag.gif",
          "createdAt": "2022-11-09T17:33:39.526Z",
          "updatedAt": "2022-11-13T12:52:05.427Z",
          "publishedAt": "2022-11-09T17:33:40.343Z"
        }
      },
      {
        "id": 172,
        "attributes": {
          "dia": "2022-11-23",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Bélgica",
          "equipo_b": "Canadá",
          "estadio": "Ahmad Bin Ali",
          "grupo": "F",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_be-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_ca-flag.gif",
          "createdAt": "2022-11-09T17:38:30.489Z",
          "updatedAt": "2022-11-13T12:52:06.086Z",
          "publishedAt": "2022-11-09T17:38:31.275Z"
        }
      },
      {
        "id": 166,
        "attributes": {
          "dia": "2022-11-23",
          "horario": "10:00 MX, 11:00 US, 13:00 AR, 17:00 ES",
          "equipo_a": "España",
          "equipo_b": "Costa Rica",
          "estadio": "Al Thumama",
          "grupo": "E",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_sp-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_cs-flag.gif",
          "createdAt": "2022-11-09T17:32:54.551Z",
          "updatedAt": "2022-11-13T12:52:06.754Z",
          "publishedAt": "2022-11-09T17:32:55.467Z"
        }
      },
      {
        "id": 178,
        "attributes": {
          "dia": "2022-11-24",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Brasil",
          "equipo_b": "Serbia",
          "estadio": "Lusail",
          "grupo": "G",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_br-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_ri-flag.gif",
          "createdAt": "2022-11-09T17:44:00.910Z",
          "updatedAt": "2022-11-13T12:52:07.652Z",
          "publishedAt": "2022-11-09T17:44:01.933Z"
        }
      },
      {
        "id": 184,
        "attributes": {
          "dia": "2022-11-24",
          "horario": "10:00 MX, 11:00 US, 13:00 AR, 17:00 ES",
          "equipo_a": "Portugal",
          "equipo_b": "Ghana",
          "estadio": "Stadium 974",
          "grupo": "H",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_po-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_gh-flag.gif",
          "createdAt": "2022-11-09T17:49:47.706Z",
          "updatedAt": "2022-11-13T12:52:08.303Z",
          "publishedAt": "2022-11-09T17:49:48.422Z"
        }
      },
      {
        "id": 185,
        "attributes": {
          "dia": "2022-11-24",
          "horario": "07:00 MX, 8:00 US, 10:00 AR, 14:00 ES",
          "equipo_a": "Uruguay",
          "equipo_b": "Corea",
          "estadio": "Education City",
          "grupo": "H",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_uy-flag.gif",
          "flag_b": "https://t3.ftcdn.net/jpg/00/01/24/86/240_F_1248660_SHeNtHnfX3e1tmeXuHnAhZaSKMrkcz.jpg",
          "createdAt": "2022-11-09T17:50:23.714Z",
          "updatedAt": "2022-11-13T12:52:08.983Z",
          "publishedAt": "2022-11-09T17:50:24.452Z"
        }
      },
      {
        "id": 179,
        "attributes": {
          "dia": "2022-11-24",
          "horario": "04:00 MX, 5:00 US, 07:00 AR, 11:00 ES",
          "equipo_a": "Suiza",
          "equipo_b": "Camerún",
          "estadio": "Al Janoub",
          "grupo": "G",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_sz-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_cm-flag.gif",
          "createdAt": "2022-11-09T17:45:21.291Z",
          "updatedAt": "2022-11-13T12:52:09.681Z",
          "publishedAt": "2022-11-09T17:45:22.220Z"
        }
      },
      {
        "id": 147,
        "attributes": {
          "dia": "2022-11-25",
          "horario": "10:00 MX, 11:00 US, 13:00 AR, 17:00 ES",
          "equipo_a": "Holanda",
          "equipo_b": "Ecuador",
          "estadio": "Khalifa International",
          "grupo": "A",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_nl-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_ec-flag.gif",
          "createdAt": "2022-11-09T17:11:33.594Z",
          "updatedAt": "2022-11-13T12:52:10.421Z",
          "publishedAt": "2022-11-09T17:11:34.857Z"
        }
      },
      {
        "id": 151,
        "attributes": {
          "dia": "2022-11-25",
          "horario": "04:00 MX, 5:00 US, 07:00 AR, 11:00 ES",
          "equipo_a": "Gales",
          "equipo_b": "Irán",
          "estadio": "Ahmad Bin Ali",
          "grupo": "B",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://t4.ftcdn.net/jpg/01/10/57/45/240_F_110574525_aKkGjsUi167klASS2tpSmadXSjSkgrB6.jpg",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_ir-flag.gif",
          "createdAt": "2022-11-09T17:16:09.059Z",
          "updatedAt": "2022-11-13T12:52:11.074Z",
          "publishedAt": "2022-11-09T17:16:09.966Z"
        }
      },
      {
        "id": 146,
        "attributes": {
          "dia": "2022-11-25",
          "horario": "07:00 MX, 8:00 US, 10:00 AR, 14:00 ES",
          "equipo_a": "Qatar",
          "equipo_b": "Senegal",
          "estadio": "Al Thumama",
          "grupo": "A",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_qa-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_sg-flag.gif",
          "createdAt": "2022-11-09T17:09:50.896Z",
          "updatedAt": "2022-11-13T12:52:11.750Z",
          "publishedAt": "2022-11-09T17:10:32.435Z"
        }
      },
      {
        "id": 150,
        "attributes": {
          "dia": "2022-11-25",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Inglaterra",
          "equipo_b": "USA",
          "estadio": "Al Bayt",
          "grupo": "B",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_uk-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_us-flag.gif",
          "createdAt": "2022-11-09T17:14:20.612Z",
          "updatedAt": "2022-11-13T12:52:12.393Z",
          "publishedAt": "2022-11-09T17:14:21.594Z"
        }
      },
      {
        "id": 157,
        "attributes": {
          "dia": "2022-11-26",
          "horario": "07:00 MX, 8:00 US, 10:00 AR, 14:00 ES",
          "equipo_a": "Polonia",
          "equipo_b": "Arabia Saudita",
          "estadio": "Education City",
          "grupo": "C",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_pl-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_sa-flag.gif",
          "createdAt": "2022-11-09T17:24:39.866Z",
          "updatedAt": "2022-11-13T12:52:13.040Z",
          "publishedAt": "2022-11-09T17:24:40.780Z"
        }
      },
      {
        "id": 156,
        "attributes": {
          "dia": "2022-11-26",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Argentina",
          "equipo_b": "México",
          "estadio": "Lusail",
          "grupo": "C",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_ar-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_mx-flag.gif",
          "createdAt": "2022-11-09T17:23:39.020Z",
          "updatedAt": "2022-11-13T12:52:13.702Z",
          "publishedAt": "2022-11-09T17:23:39.889Z"
        }
      },
      {
        "id": 163,
        "attributes": {
          "dia": "2022-11-26",
          "horario": "04:00 MX, 5:00 US, 07:00 AR, 11:00 ES",
          "equipo_a": "Túnez",
          "equipo_b": "Australia",
          "estadio": "Al Janoub",
          "grupo": "D",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_ts-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_as-flag.gif",
          "createdAt": "2022-11-09T17:30:05.222Z",
          "updatedAt": "2022-11-13T12:52:14.358Z",
          "publishedAt": "2022-11-09T17:30:06.208Z"
        }
      },
      {
        "id": 162,
        "attributes": {
          "dia": "2022-11-26",
          "horario": "10:00 MX, 11:00 US, 13:00 AR, 17:00 ES",
          "equipo_a": "Francia",
          "equipo_b": "Dinamarca",
          "estadio": "Stadium 974",
          "grupo": "D",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_da-flag.gif",
          "createdAt": "2022-11-09T17:29:05.230Z",
          "updatedAt": "2022-11-13T12:52:15.006Z",
          "publishedAt": "2022-11-09T17:29:06.093Z"
        }
      },
      {
        "id": 169,
        "attributes": {
          "dia": "2022-11-27",
          "horario": "04:00 MX, 5:00 US, 07:00 AR, 11:00 ES",
          "equipo_a": "Japón",
          "equipo_b": "Costa Rica",
          "estadio": "Ahmad Bin Ali",
          "grupo": "E",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_ja-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_cs-flag.gif",
          "createdAt": "2022-11-09T17:35:22.259Z",
          "updatedAt": "2022-11-13T12:52:15.652Z",
          "publishedAt": "2022-11-09T17:35:23.015Z"
        }
      },
      {
        "id": 168,
        "attributes": {
          "dia": "2022-11-27",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "España",
          "equipo_b": "Alemania",
          "estadio": "Al Bayt",
          "grupo": "E",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_sp-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_gm-flag.gif",
          "createdAt": "2022-11-09T17:34:30.884Z",
          "updatedAt": "2022-11-13T12:52:16.298Z",
          "publishedAt": "2022-11-09T17:34:31.662Z"
        }
      },
      {
        "id": 174,
        "attributes": {
          "dia": "2022-11-27",
          "horario": "07:00 MX, 8:00 US, 10:00 AR, 14:00 ES",
          "equipo_a": "Bélgica",
          "equipo_b": "Marruecos",
          "estadio": "Al Thumama",
          "grupo": "F",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_be-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_mo-flag.gif",
          "createdAt": "2022-11-09T17:39:56.612Z",
          "updatedAt": "2022-11-13T12:52:17.051Z",
          "publishedAt": "2022-11-09T17:39:57.408Z"
        }
      },
      {
        "id": 175,
        "attributes": {
          "dia": "2022-11-27",
          "horario": "10:00 MX, 11:00 US, 13:00 AR, 17:00 ES",
          "equipo_a": "Croacia",
          "equipo_b": "Canadá",
          "estadio": "Khalifa International",
          "grupo": "F",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_hr-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_ca-flag.gif",
          "createdAt": "2022-11-09T17:40:43.690Z",
          "updatedAt": "2022-11-13T12:52:17.853Z",
          "publishedAt": "2022-11-09T17:40:44.385Z"
        }
      },
      {
        "id": 187,
        "attributes": {
          "dia": "2022-11-28",
          "horario": "07:00 MX, 8:00 US, 10:00 AR, 14:00 ES",
          "equipo_a": "Corea",
          "equipo_b": "Ghana",
          "estadio": "Education City",
          "grupo": "H",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://t3.ftcdn.net/jpg/00/01/24/86/240_F_1248660_SHeNtHnfX3e1tmeXuHnAhZaSKMrkcz.jpg",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_gh-flag.gif",
          "createdAt": "2022-11-09T17:51:39.930Z",
          "updatedAt": "2022-11-13T12:52:18.507Z",
          "publishedAt": "2022-11-09T17:51:40.869Z"
        }
      },
      {
        "id": 186,
        "attributes": {
          "dia": "2022-11-28",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Portugal",
          "equipo_b": "Uruguay",
          "estadio": "Lusail",
          "grupo": "H",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_po-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_uy-flag.gif",
          "createdAt": "2022-11-09T17:51:00.788Z",
          "updatedAt": "2022-11-13T12:52:19.208Z",
          "publishedAt": "2022-11-09T17:51:01.504Z"
        }
      },
      {
        "id": 181,
        "attributes": {
          "dia": "2022-11-28",
          "horario": "04:00 MX, 5:00 US, 07:00 AR, 11:00 ES",
          "equipo_a": "Camerún",
          "equipo_b": "Serbia",
          "estadio": "Al Janoub",
          "grupo": "G",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_cm-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_ri-flag.gif",
          "createdAt": "2022-11-09T17:47:19.898Z",
          "updatedAt": "2022-11-13T12:52:19.861Z",
          "publishedAt": "2022-11-09T17:47:20.751Z"
        }
      },
      {
        "id": 180,
        "attributes": {
          "dia": "2022-11-28",
          "horario": "10:00 MX, 11:00 US, 13:00 AR, 17:00 ES",
          "equipo_a": "Brasil",
          "equipo_b": "Suiza",
          "estadio": "Stadium 974",
          "grupo": "G",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_br-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_sz-flag.gif",
          "createdAt": "2022-11-09T17:46:18.981Z",
          "updatedAt": "2022-11-13T12:52:20.511Z",
          "publishedAt": "2022-11-09T17:46:20.935Z"
        }
      },
      {
        "id": 148,
        "attributes": {
          "dia": "2022-11-29",
          "horario": "09:00 MX, 10:00 US, 12:00 AR, 16:00 ES",
          "equipo_a": "Holanda",
          "equipo_b": "Qatar",
          "estadio": "Al Bayt",
          "grupo": "A",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_nl-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_qa-flag.gif",
          "createdAt": "2022-11-09T17:12:28.893Z",
          "updatedAt": "2022-11-13T12:52:21.153Z",
          "publishedAt": "2022-11-09T17:12:29.854Z"
        }
      },
      {
        "id": 152,
        "attributes": {
          "dia": "2022-11-29",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Gales",
          "equipo_b": "Inglaterra",
          "estadio": "Ahmad Bin Ali",
          "grupo": "B",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://t4.ftcdn.net/jpg/01/10/57/45/240_F_110574525_aKkGjsUi167klASS2tpSmadXSjSkgrB6.jpg",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_uk-flag.gif",
          "createdAt": "2022-11-09T17:17:13.335Z",
          "updatedAt": "2022-11-13T12:52:21.799Z",
          "publishedAt": "2022-11-09T17:17:14.282Z"
        }
      },
      {
        "id": 153,
        "attributes": {
          "dia": "2022-11-29",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Irán",
          "equipo_b": "USA",
          "estadio": "Al Thumama",
          "grupo": "B",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_ir-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_us-flag.gif",
          "createdAt": "2022-11-09T17:18:30.318Z",
          "updatedAt": "2022-11-13T12:52:22.453Z",
          "publishedAt": "2022-11-09T17:18:31.236Z"
        }
      },
      {
        "id": 149,
        "attributes": {
          "dia": "2022-11-29",
          "horario": "09:00 MX, 10:00 US, 12:00 AR, 16:00 ES",
          "equipo_a": "Ecuador",
          "equipo_b": "Senegal",
          "estadio": "Khalifa International",
          "grupo": "A",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_ec-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_sg-flag.gif",
          "createdAt": "2022-11-09T17:13:17.764Z",
          "updatedAt": "2022-11-13T12:52:23.103Z",
          "publishedAt": "2022-11-09T17:13:18.843Z"
        }
      },
      {
        "id": 165,
        "attributes": {
          "dia": "2022-11-30",
          "horario": "09:00 MX, 10:00 US, 12:00 AR, 16:00 ES",
          "equipo_a": "Australia",
          "equipo_b": "Dinamarca",
          "estadio": "Al Janoub",
          "grupo": "D",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_as-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_da-flag.gif",
          "createdAt": "2022-11-09T17:31:46.533Z",
          "updatedAt": "2022-11-13T12:52:23.801Z",
          "publishedAt": "2022-11-09T17:31:47.460Z"
        }
      },
      {
        "id": 159,
        "attributes": {
          "dia": "2022-11-30",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Arabia Saudita",
          "equipo_b": "México",
          "estadio": "Lusail",
          "grupo": "C",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_sa-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_mx-flag.gif",
          "createdAt": "2022-11-09T17:26:17.329Z",
          "updatedAt": "2022-11-13T12:52:24.447Z",
          "publishedAt": "2022-11-09T17:26:18.322Z"
        }
      },
      {
        "id": 164,
        "attributes": {
          "dia": "2022-11-30",
          "horario": "09:00 MX, 10:00 US, 12:00 AR, 16:00 ES",
          "equipo_a": "Túnez",
          "equipo_b": "Francia",
          "estadio": "Education City",
          "grupo": "D",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_ts-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif",
          "createdAt": "2022-11-09T17:30:55.837Z",
          "updatedAt": "2022-11-13T12:52:25.095Z",
          "publishedAt": "2022-11-09T17:30:56.593Z"
        }
      },
      {
        "id": 158,
        "attributes": {
          "dia": "2022-11-30",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Polonia",
          "equipo_b": "Argentina",
          "estadio": "Stadium 974",
          "grupo": "C",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_pl-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_ar-flag.gif",
          "createdAt": "2022-11-09T17:25:33.259Z",
          "updatedAt": "2022-11-13T12:52:25.744Z",
          "publishedAt": "2022-11-09T17:25:34.087Z"
        }
      },
      {
        "id": 171,
        "attributes": {
          "dia": "2022-12-01",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Costa Rica",
          "equipo_b": "Alemania",
          "estadio": "Al Bayt",
          "grupo": "E",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_cs-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_gm-flag.gif",
          "createdAt": "2022-11-09T17:36:58.312Z",
          "updatedAt": "2022-11-13T12:52:26.391Z",
          "publishedAt": "2022-11-09T17:36:59.096Z"
        }
      },
      {
        "id": 170,
        "attributes": {
          "dia": "2022-12-01",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Japón",
          "equipo_b": "España",
          "estadio": "Khalifa International",
          "grupo": "E",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_ja-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_sp-flag.gif",
          "createdAt": "2022-11-09T17:36:11.164Z",
          "updatedAt": "2022-11-13T12:52:27.254Z",
          "publishedAt": "2022-11-09T17:36:11.857Z"
        }
      },
      {
        "id": 177,
        "attributes": {
          "dia": "2022-12-01",
          "horario": "09:00 MX, 10:00 US, 12:00 AR, 16:00 ES",
          "equipo_a": "Canadá",
          "equipo_b": "Marruecos",
          "estadio": "Al Thumama",
          "grupo": "F",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_ca-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_mo-flag.gif",
          "createdAt": "2022-11-09T17:42:47.812Z",
          "updatedAt": "2022-11-13T12:52:27.992Z",
          "publishedAt": "2022-11-09T17:42:53.102Z"
        }
      },
      {
        "id": 176,
        "attributes": {
          "dia": "2022-12-01",
          "horario": "09:00 MX, 10:00 US, 12:00 AR, 16:00 ES",
          "equipo_a": "Croacia",
          "equipo_b": "Bélgica",
          "estadio": "Ahmad Bin Ali",
          "grupo": "F",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_hr-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_be-flag.gif",
          "createdAt": "2022-11-09T17:41:40.178Z",
          "updatedAt": "2022-11-13T12:52:28.638Z",
          "publishedAt": "2022-11-09T17:41:42.262Z"
        }
      },
      {
        "id": 183,
        "attributes": {
          "dia": "2022-12-02",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Serbia",
          "equipo_b": "Suiza",
          "estadio": "Stadium 974",
          "grupo": "G",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_ri-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_sz-flag.gif",
          "createdAt": "2022-11-09T17:48:41.462Z",
          "updatedAt": "2022-11-13T12:52:29.294Z",
          "publishedAt": "2022-11-09T17:48:42.306Z"
        }
      },
      {
        "id": 182,
        "attributes": {
          "dia": "2022-12-02",
          "horario": "13:00 MX, 14:00 US, 16:00 AR, 20:00 ES",
          "equipo_a": "Camerún",
          "equipo_b": "Brasil",
          "estadio": "Lusail",
          "grupo": "G",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_cm-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_br-flag.gif",
          "createdAt": "2022-11-09T17:47:58.063Z",
          "updatedAt": "2022-11-13T12:52:29.960Z",
          "publishedAt": "2022-11-09T17:47:58.829Z"
        }
      },
      {
        "id": 188,
        "attributes": {
          "dia": "2022-12-02",
          "horario": "09:00 MX, 10:00 US, 12:00 AR, 16:00 ES",
          "equipo_a": "Corea",
          "equipo_b": "Portugal",
          "estadio": "Education City",
          "grupo": "H",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://t3.ftcdn.net/jpg/00/01/24/86/240_F_1248660_SHeNtHnfX3e1tmeXuHnAhZaSKMrkcz.jpg",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_po-flag.gif",
          "createdAt": "2022-11-09T17:52:19.519Z",
          "updatedAt": "2022-11-13T12:52:30.611Z",
          "publishedAt": "2022-11-09T17:52:20.321Z"
        }
      },
      {
        "id": 189,
        "attributes": {
          "dia": "2022-12-02",
          "horario": "09:00 MX, 10:00 US, 12:00 AR, 16:00 ES",
          "equipo_a": "Ghana",
          "equipo_b": "Uruguay",
          "estadio": "Al Janoub",
          "grupo": "H",
          "ganador": null,
          "goles_a": null,
          "goles_b": null,
          "flag_a": "https://www.worldometers.info/img/flags/small/tn_gh-flag.gif",
          "flag_b": "https://www.worldometers.info/img/flags/small/tn_uy-flag.gif",
          "createdAt": "2022-11-09T17:53:04.016Z",
          "updatedAt": "2022-11-13T12:52:31.279Z",
          "publishedAt": "2022-11-09T17:53:04.892Z"
        }
      }
    ]
}



