import { sbOrganism } from "../testUtils";
import Countdown from "./";

export default {
  title: sbOrganism("Countdown"),
  component: Countdown,
};

export const Default = () => <Countdown />;

export const WithABigStep = () => <Countdown step={50} />;

export const StartAt10 = () => <Countdown initialCount={10} />;
