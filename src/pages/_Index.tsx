import { PixelGrid } from "../components/PixelGrid";
import Home from "./Home";
import Project from "./Project";
import { Fragment } from "react/jsx-runtime";
import { GlobalStateProvider } from "../utils/ControlUtil";

export default function _Index() {
  return (
    <Fragment>
      <GlobalStateProvider>
        <PixelGrid />

        <Home />
        <Project />
      </GlobalStateProvider>
    </Fragment>
  );
}
