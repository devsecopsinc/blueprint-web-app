import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Provider } from "urql";
import { useUrqlClient } from "./graphql/hooks/useUrqlClient";
import { ConfigProvider } from "antd";
import enUSIntl from "antd/es/locale/en_US";

function App() {
  const client = useUrqlClient();
  return (
    <Provider value={client}>
      <ConfigProvider locale={enUSIntl}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
