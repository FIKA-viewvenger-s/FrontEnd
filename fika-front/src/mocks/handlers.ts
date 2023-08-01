import { rest } from "msw";
import { gameData } from "./mockData";

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
];
