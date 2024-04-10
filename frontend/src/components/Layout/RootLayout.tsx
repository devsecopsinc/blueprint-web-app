import {
  ApiOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  FolderOpenOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { ProLayout, MenuDataItem } from "@ant-design/pro-components";
import { Dropdown } from "antd";
import { Link, Outlet } from "react-router-dom";

const layoutRoutes: MenuDataItem[] = [
  {
    path: "/portfolios",
    name: "Portfolios",
    icon: <FolderOpenOutlined />,
  },
  {
    path: "/integrations",
    name: "Integrations",
    icon: <ApiOutlined />,
  },
  {
    path: "/modules",
    name: "Modules",
    icon: <AppstoreOutlined />,
  },
  {
    path: "/scenario-types",
    name: "Scenario Types",
    icon: <FileTextOutlined />,
  },
];

export const RootLayout = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        route={{ routes: layoutRoutes }}
        layout="mix"
        title="KEAN 3"
        headerTitleRender={(_, title) => title}
        menuItemRender={(item, dom) => <Link to={item.path ?? "#"}>{dom}</Link>}
        token={{
          header: {
            colorBgHeader: "#1F2022",
            colorTextMenu: "white",
            colorHeaderTitle: "white",
            colorTextRightActionsItem: "white",
          },
        }}
        avatarProps={{
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
          size: "small",
          title: "John Doe",
          render: (_, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "logout",
                      icon: <LogoutOutlined />,
                      label: "Logout",
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};
