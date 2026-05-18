import { mount } from "svelte";
import App from "./App.svelte";
import "./styles/style.scss";
import "./styles/headlines.scss";
import "./styles/theme-type.scss";
// palette overrides must come AFTER theme-type.scss — many palette
// surfaces tie specificity with `.theme-type-orange .X` rules, and load
// order is the cascade tiebreaker.
import "./styles/palettes.scss";
import "./lib/palette.svelte";

const app = mount(App, { target: document.getElementById("app")! });

export default app;
