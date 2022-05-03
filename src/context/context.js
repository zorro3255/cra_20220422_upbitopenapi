import { createContext, useState } from 'react';

const SettingContext = createContext({ state: { lang: 'ko' }, action: () => { } });

const SettingProvider = (props) => {
    const [lang, setLang] = useState('ko');

    const value = {
        state: { lang },
        action: { setLang }
    };

    return <SettingContext.Provider value={value}>{props.children}</SettingContext.Provider>
};

const {Consumer: SettingConsumer} = SettingContext;

export {SettingProvider, SettingConsumer};

export default SettingContext;