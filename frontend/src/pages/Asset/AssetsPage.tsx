import PlusOutlined from "@ant-design/icons/PlusOutlined";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "urql";
import {
  PortfolioAssetsDocument,
  BaseAssetFragment,
  PortfolioDocument,
} from "../../graphql/schema";
import {
  PageContainer,
  ProColumns,
  ProTable,
} from "@ant-design/pro-components";
import { Button } from "antd";

const columns: ProColumns<BaseAssetFragment>[] = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Type",
    dataIndex: "type",
    search: false,
  },
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Actions",
    valueType: "option",
    key: "option",
    width: "120px",
    render: (_text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        Edit
      </a>,
      <a href="#" target="_blank" rel="noopener noreferrer" key="view">
        Delete
      </a>,
    ],
  },
];

export const AssetsPage = () => {
  const { portfolioId } = useParams();

  const [porfolioResult] = useQuery({
    query: PortfolioDocument,
    variables: { portfolioId: portfolioId ?? "" },
  });

  const breadcrumbItems = [
    { path: "/portfolios", title: "Portfolios" },
    { path: "#", title: porfolioResult.data?.portfolio?.name },
  ];

  const [result] = useQuery({
    query: PortfolioAssetsDocument,
    variables: { portfolioId: portfolioId ?? "" },
  });

  return (
    <PageContainer
      title="Assets"
      breadcrumb={{
        items: breadcrumbItems,
        itemRender: (route) => (
          <Link to={route.path ?? "#"}>{route.title}</Link>
        ),
      }}
    >
      <ProTable
        dataSource={result.data?.assets ?? []}
        loading={result.fetching}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
        }}
        columns={columns}
        options={{
          search: true,
        }}
        search={false}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            Create
          </Button>,
        ]}
      />
    </PageContainer>
  );
};
