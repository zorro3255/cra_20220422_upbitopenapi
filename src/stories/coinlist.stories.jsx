import CoinList from '../materialcomponent/coinlist';
import { MemoryRouter } from "react-router";

export default {
    title: "가상화폐 목록",
    component: CoinList,
    decorators: [
        (Story) => (
          <MemoryRouter>
            <Story />
            </MemoryRouter>
        )
      ]
};

const Template = (args) => <CoinList {...args} />;

export const FirstStory = {
    args: {
      style: {color: "yellow"}
    }
  };
