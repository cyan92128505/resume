import React, { useCallback, useMemo } from "react";
import LanguageKeysZh from "./zh";
import LanguageKeys, { LangProps } from "./en";

const zh = new LanguageKeysZh();
const en = new LanguageKeys();

type State = { lang: string; keys: LanguageKeys };

const LangStateContext = React.createContext<State | undefined>(undefined);
const LangUpdaterContext = React.createContext<
  React.Dispatch<React.SetStateAction<"en" | "zh">> | undefined
>(undefined);

const LangProvider: React.FunctionComponent<{}> = ({ children }) => {
  const [lang, setLang] = React.useState<"en" | "zh">("en");

  const value = useMemo(() => {
    return {
      lang,
      keys: lang === "zh" ? zh : en,
    };
  }, [lang]);

  return (
    <LangStateContext.Provider value={value}>
      <LangUpdaterContext.Provider value={setLang}>
        {children}
      </LangUpdaterContext.Provider>
    </LangStateContext.Provider>
  );
};

function useLangState() {
  const langState = React.useContext(LangStateContext);
  if (typeof window !== "undefined") {
    const query = window.location.search;
    if (/zh/.test(query)) {
      return {
        lang: "zh",
        keys: zh,
      };
    }
  }

  if (langState === undefined) {
    return {
      lang: "zh",
      keys: zh,
    };
  }

  return langState;
}

function useT() {
  const langState = useLangState();

  const t = useCallback(
    (id: LangProps, data?: any): string => {
      const textItem: any = (langState.keys as any)[id];
      const str: string = textItem || id;

      return textItem instanceof Function ? textItem(data) : str;
    },
    [langState]
  );

  return t;
}

function useLang() {
  const langState = useLangState();

  return langState.lang;
}

function useSetLang() {
  const setLang = React.useContext(LangUpdaterContext);
  if (setLang === undefined) {
    throw new Error("useSetLang must be used within a LangProvider");
  }

  return setLang;
}

type Props = { id: LangProps; data?: any };

// eslint-disable-next-line react/display-name
const T = React.memo(({ id, data }: Props) => {
  const t = useT();

  return <>{t(id, data)}</>;
});

export { LangProvider, useSetLang, useT, useLang, T };
