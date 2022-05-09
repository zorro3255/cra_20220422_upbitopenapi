import Header from './header';

export default {
    title: "헤더(제목)",
    component: Header
};

const Template = (args) => <Header {...args} />;

export const FirstStory = {
    args: {
        title: "가상하폐 목록",
        style: { color: "#cccccc", borderTop: "1px solid #cccccc", borderBottom: "1px solid #cccccc" }
    }
};