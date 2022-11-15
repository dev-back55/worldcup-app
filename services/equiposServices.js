import { server } from '../config';

export async function getEquipos() {
    const resp = await fetch(`${server}/api/equipos`);
    const equipo = await resp.json();
    const equipos = equipo.data;
    return equipos;
}

export const equipos = {
    "data": [
      {
        "id": 21,
        "attributes": {
          "name": "Alemania",
          "pais": "Alemania",
          "clave": null,
          "grupo": "E",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_gm-flag.gif",
          "createdAt": "2022-11-12T12:39:57.697Z",
          "updatedAt": "2022-11-13T12:25:07.565Z",
          "publishedAt": "2022-11-12T12:39:58.221Z"
        }
      },
      {
        "id": 11,
        "attributes": {
          "name": "Arabia Saudita",
          "pais": "Arabia Saudita",
          "clave": null,
          "grupo": "C",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_sa-flag.gif",
          "createdAt": "2022-11-12T12:22:58.310Z",
          "updatedAt": "2022-11-13T12:25:08.249Z",
          "publishedAt": "2022-11-12T12:22:58.949Z"
        }
      },
      {
        "id": 1,
        "attributes": {
          "name": "Argentina",
          "pais": "Argentina",
          "clave": null,
          "grupo": "C",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_ar-flag.gif",
          "createdAt": "2022-11-09T20:54:57.768Z",
          "updatedAt": "2022-11-13T12:25:08.950Z",
          "publishedAt": "2022-11-09T20:58:18.830Z"
        }
      },
      {
        "id": 17,
        "attributes": {
          "name": "Australia",
          "pais": "Australia",
          "clave": null,
          "grupo": "D",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_as-flag.gif",
          "createdAt": "2022-11-12T12:35:23.358Z",
          "updatedAt": "2022-11-13T12:25:09.780Z",
          "publishedAt": "2022-11-12T12:35:25.704Z"
        }
      },
      {
        "id": 22,
        "attributes": {
          "name": "Bélgica",
          "pais": "Bélgica",
          "clave": null,
          "grupo": "F",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_be-flag.gif",
          "createdAt": "2022-11-12T12:40:53.281Z",
          "updatedAt": "2022-11-13T12:25:10.468Z",
          "publishedAt": "2022-11-12T12:40:53.767Z"
        }
      },
      {
        "id": 26,
        "attributes": {
          "name": "Brasil",
          "pais": "Brasil",
          "clave": null,
          "grupo": "G",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_br-flag.gif",
          "createdAt": "2022-11-12T12:44:17.519Z",
          "updatedAt": "2022-11-13T12:25:11.153Z",
          "publishedAt": "2022-11-12T12:44:18.184Z"
        }
      },
      {
        "id": 29,
        "attributes": {
          "name": "Camerún",
          "pais": "Camerún",
          "clave": null,
          "grupo": "G",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_cm-flag.gif",
          "createdAt": "2022-11-12T12:47:11.586Z",
          "updatedAt": "2022-11-13T12:25:11.831Z",
          "publishedAt": "2022-11-12T12:47:12.165Z"
        }
      },
      {
        "id": 23,
        "attributes": {
          "name": "Canadá",
          "pais": "Canadá",
          "clave": null,
          "grupo": "F",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_ca-flag.gif",
          "createdAt": "2022-11-12T12:41:34.243Z",
          "updatedAt": "2022-11-13T12:25:12.510Z",
          "publishedAt": "2022-11-12T12:41:35.869Z"
        }
      },
      {
        "id": 9,
        "attributes": {
          "name": "Corea",
          "pais": "Corea",
          "clave": null,
          "grupo": "H",
          "flagurl": "https://t3.ftcdn.net/jpg/00/01/24/86/240_F_1248660_SHeNtHnfX3e1tmeXuHnAhZaSKMrkcz.jpg",
          "createdAt": "2022-11-12T12:19:50.620Z",
          "updatedAt": "2022-11-13T12:25:13.192Z",
          "publishedAt": "2022-11-12T12:19:51.649Z"
        }
      },
      {
        "id": 20,
        "attributes": {
          "name": "Costa Rica",
          "pais": "Costa Rica",
          "clave": null,
          "grupo": "E",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_cs-flag.gif",
          "createdAt": "2022-11-12T12:38:38.207Z",
          "updatedAt": "2022-11-13T12:25:13.885Z",
          "publishedAt": "2022-11-12T12:38:38.809Z"
        }
      },
      {
        "id": 25,
        "attributes": {
          "name": "Croacia",
          "pais": "Croacia",
          "clave": null,
          "grupo": "F",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_mo-flag.gif",
          "createdAt": "2022-11-12T12:43:28.360Z",
          "updatedAt": "2022-11-13T12:25:14.569Z",
          "publishedAt": "2022-11-12T12:43:29.440Z"
        }
      },
      {
        "id": 15,
        "attributes": {
          "name": "Dinamarca",
          "pais": "Dinamarca",
          "clave": null,
          "grupo": "D",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_da-flag.gif",
          "createdAt": "2022-11-12T12:33:00.645Z",
          "updatedAt": "2022-11-13T12:25:15.251Z",
          "publishedAt": "2022-11-12T12:33:01.464Z"
        }
      },
      {
        "id": 3,
        "attributes": {
          "name": "Ecuador",
          "pais": "Ecuador",
          "clave": null,
          "grupo": "A",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_ec-flag.gif",
          "createdAt": "2022-11-09T21:01:55.729Z",
          "updatedAt": "2022-11-13T12:25:15.931Z",
          "publishedAt": "2022-11-09T21:01:57.107Z"
        }
      },
      {
        "id": 18,
        "attributes": {
          "name": "España",
          "pais": "España",
          "clave": null,
          "grupo": "E",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_sp-flag.gif",
          "createdAt": "2022-11-12T12:36:59.484Z",
          "updatedAt": "2022-11-13T12:25:16.651Z",
          "publishedAt": "2022-11-12T12:37:00.172Z"
        }
      },
      {
        "id": 14,
        "attributes": {
          "name": "Francia",
          "pais": "Francia",
          "clave": null,
          "grupo": "D",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif",
          "createdAt": "2022-11-12T12:32:03.523Z",
          "updatedAt": "2022-11-13T12:25:17.408Z",
          "publishedAt": "2022-11-12T12:32:04.170Z"
        }
      },
      {
        "id": 10,
        "attributes": {
          "name": "Gales",
          "pais": "Gales",
          "clave": null,
          "grupo": "B",
          "flagurl": "https://t4.ftcdn.net/jpg/01/10/57/45/240_F_110574525_aKkGjsUi167klASS2tpSmadXSjSkgrB6.jpg",
          "createdAt": "2022-11-12T12:21:14.650Z",
          "updatedAt": "2022-11-13T12:25:18.103Z",
          "publishedAt": "2022-11-12T12:21:15.333Z"
        }
      },
      {
        "id": 31,
        "attributes": {
          "name": "Ghana",
          "pais": "Ghana",
          "clave": null,
          "grupo": "H",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_gh-flag.gif",
          "createdAt": "2022-11-12T12:49:42.547Z",
          "updatedAt": "2022-11-13T12:25:18.795Z",
          "publishedAt": "2022-11-12T12:49:43.274Z"
        }
      },
      {
        "id": 5,
        "attributes": {
          "name": "Holanda",
          "pais": "Holanda",
          "clave": null,
          "grupo": "A",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_nl-flag.gif",
          "createdAt": "2022-11-12T12:12:53.789Z",
          "updatedAt": "2022-11-13T12:25:19.487Z",
          "publishedAt": "2022-11-12T12:13:00.610Z"
        }
      },
      {
        "id": 6,
        "attributes": {
          "name": "Inglaterra",
          "pais": "Inglaterra",
          "clave": null,
          "grupo": "B",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_uk-flag.gif",
          "createdAt": "2022-11-12T12:15:36.612Z",
          "updatedAt": "2022-11-13T12:25:20.179Z",
          "publishedAt": "2022-11-12T12:15:37.655Z"
        }
      },
      {
        "id": 7,
        "attributes": {
          "name": "Irán",
          "pais": "Irán",
          "clave": null,
          "grupo": "B",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_ir-flag.gif",
          "createdAt": "2022-11-12T12:16:39.883Z",
          "updatedAt": "2022-11-13T12:25:20.871Z",
          "publishedAt": "2022-11-12T12:16:40.521Z"
        }
      },
      {
        "id": 19,
        "attributes": {
          "name": "Japón",
          "pais": "Japón",
          "clave": null,
          "grupo": "E",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_ja-flag.gif",
          "createdAt": "2022-11-12T12:37:44.957Z",
          "updatedAt": "2022-11-13T12:25:21.556Z",
          "publishedAt": "2022-11-12T12:37:45.458Z"
        }
      },
      {
        "id": 24,
        "attributes": {
          "name": "Marruecos",
          "pais": "Marruecos",
          "clave": null,
          "grupo": "F",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_mo-flag.gif",
          "createdAt": "2022-11-12T12:42:34.338Z",
          "updatedAt": "2022-11-13T12:25:22.952Z",
          "publishedAt": "2022-11-12T12:42:34.896Z"
        }
      },
      {
        "id": 12,
        "attributes": {
          "name": "México",
          "pais": "México",
          "clave": null,
          "grupo": "C",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_mx-flag.gif",
          "createdAt": "2022-11-12T12:24:32.589Z",
          "updatedAt": "2022-11-13T12:25:23.628Z",
          "publishedAt": "2022-11-12T12:24:33.364Z"
        }
      },
      {
        "id": 13,
        "attributes": {
          "name": "Polonia",
          "pais": "Polonia",
          "clave": null,
          "grupo": "C",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_pl-flag.gif",
          "createdAt": "2022-11-12T12:25:30.806Z",
          "updatedAt": "2022-11-13T12:25:24.318Z",
          "publishedAt": "2022-11-12T12:25:31.535Z"
        }
      },
      {
        "id": 30,
        "attributes": {
          "name": "Portugal",
          "pais": "Portugal",
          "clave": null,
          "grupo": "H",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_po-flag.gif",
          "createdAt": "2022-11-12T12:48:16.609Z",
          "updatedAt": "2022-11-13T12:25:25.002Z",
          "publishedAt": "2022-11-12T12:48:17.455Z"
        }
      },
      {
        "id": 32,
        "attributes": {
          "name": "Qatar",
          "pais": "Qatar",
          "clave": null,
          "grupo": "A",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_qa-flag.gif",
          "createdAt": "2022-11-14T02:25:12.297Z",
          "updatedAt": "2022-11-14T02:25:18.983Z",
          "publishedAt": "2022-11-14T02:25:18.778Z"
        }
      },
      {
        "id": 2,
        "attributes": {
          "name": "Senegal",
          "pais": "Senegal",
          "clave": null,
          "grupo": "A",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_sg-flag.gif",
          "createdAt": "2022-11-14T02:12:16.561Z",
          "updatedAt": "2022-11-14T02:12:24.471Z",
          "publishedAt": "2022-11-14T02:12:24.268Z"
        }
      },
      {
        "id": 4,
        "attributes": {
          "name": "Serbia",
          "pais": "Serbia",
          "clave": null,
          "grupo": "G",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_ri-flag.gif",
          "createdAt": "2022-11-14T02:14:02.350Z",
          "updatedAt": "2022-11-14T02:14:09.647Z",
          "publishedAt": "2022-11-14T02:14:09.439Z"
        }
      },
      {
        "id": 8,
        "attributes": {
          "name": "Suiza",
          "pais": "Suiza",
          "clave": null,
          "grupo": "G",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_sz-flag.gif",
          "createdAt": "2022-11-14T02:15:45.266Z",
          "updatedAt": "2022-11-14T02:15:53.872Z",
          "publishedAt": "2022-11-14T02:15:53.665Z"
        }
      },
      {
        "id": 16,
        "attributes": {
          "name": "Túnez",
          "pais": "Túnez",
          "clave": null,
          "grupo": "D",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_ts-flag.gif",
          "createdAt": "2022-11-14T02:18:20.634Z",
          "updatedAt": "2022-11-14T02:18:26.452Z",
          "publishedAt": "2022-11-14T02:18:26.248Z"
        }
      },
      {
        "id": 27,
        "attributes": {
          "name": "Uruguay",
          "pais": "Uruguay",
          "clave": null,
          "grupo": "H",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_uy-flag.gif",
          "createdAt": "2022-11-14T02:21:42.573Z",
          "updatedAt": "2022-11-14T02:21:48.468Z",
          "publishedAt": "2022-11-14T02:21:48.265Z"
        }
      },
      {
        "id": 28,
        "attributes": {
          "name": "USA",
          "pais": "USA",
          "clave": null,
          "grupo": "B",
          "flagurl": "https://www.worldometers.info/img/flags/small/tn_us-flag.gif",
          "createdAt": "2022-11-14T02:22:40.681Z",
          "updatedAt": "2022-11-14T02:22:46.200Z",
          "publishedAt": "2022-11-14T02:22:45.982Z"
        }
      }
    ]
  }