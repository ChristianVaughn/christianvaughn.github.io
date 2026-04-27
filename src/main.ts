import { mount } from "svelte";
import App from "./App.svelte";
import "./styles/style.scss";
import "./styles/headlines.scss";
import "./styles/theme-type.scss";

const app = mount(App, { target: document.getElementById("app")! });

export default app;
