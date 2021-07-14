import { ProxyState } from "../AppState.js";
import Home from "../Models/Home.js";

class HomesService {
   createHome(rawHome) {
      ProxyState.homes = [...ProxyState.homes, new Home(rawHome)]
   }
}

export const homesService = new HomesService()