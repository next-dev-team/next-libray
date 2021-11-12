
import { Pricing2 } from "components-next";
import { DemoLayout } from "../utils/layout";

const Demo = () => {
  return <DemoLayout data={[{ title: "Price2", component: <Pricing2 /> }]} />;
};

export default Demo;
