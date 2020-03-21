import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "~/layout";
import Routes from "./Router";
import GlobalStyle from "~/styles/global";

function App() {
  const [t, i18n] = useTranslation();

  function handleChangeLang(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Routes />
    </Layout>
  );
}

export default App;
