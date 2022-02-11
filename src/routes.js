import WinterHeader from "./components/WinterHeader";
import WinterProfile from "./components/winterMain/WinterProfile";
import WinterScheme from "./components/winterMain/WinterScheme";
import WinterLocations from "./components/winterMain/WinterLocations";

export default [
  { path: '/', component: WinterHeader },
  { path: '/profile', component: WinterProfile },
  { path: '/scheme', component: WinterScheme },
  { path: '/locations', component: WinterLocations }
]