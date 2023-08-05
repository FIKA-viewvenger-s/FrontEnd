import { rest } from "msw";
import { assemblesData, gameData } from "./mockData";

export const handlers = [
  rest.get("/game", (req, res, ctx) => {
    // const { gameDt, gameType, league, lat, lon } = req.params;
    return res(
      // ctx.text(
      //   `gameDt : ${gameDt}, gameType:${gameType}, league:${league}, lat:${lat}, lon:${lon}`
      // ),
      ctx.delay(1000),
      ctx.json(gameData)
    );
  }),
  rest.get(
    "/assembles/:gameType/:league/:teamNm/:lat/:lon/:sortType",
    (req, res, ctx) => {
      return res(ctx.json(assemblesData));
    }
  ),
  rest.get("/assemblies/reservation", (req, res, ctx) => {
    return res(ctx.json(assemblesData));
  }),
];
