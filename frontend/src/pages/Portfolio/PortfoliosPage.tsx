import PlusOutlined from "@ant-design/icons/PlusOutlined";
import {
  PageContainer,
  ProColumns,
  ProTable,
} from "@ant-design/pro-components";
import { useQuery } from "urql";
import {
  PortfoliosDocument,
  BasePortfolioFragment,
  PortfolioAssetsCountFragment,
} from "../../graphql/schema";
import { Link } from "react-router-dom";
import { Button } from "antd";

const columns: ProColumns<
  BasePortfolioFragment & PortfolioAssetsCountFragment
>[] = [
  {
    title: "Name",
    dataIndex: "name",
    render: (_, portfolio) => (
      <Link to={`/portfolios/${portfolio.id}/assets`}>{portfolio.name}</Link>
    ),
  },
  {
    title: "Total Assets",
    dataIndex: ["assets_aggregate", "aggregate", "count"],
    search: false,
    editable: false,
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

export const PortfoliosPage = () => {
  const [result] = useQuery({ query: PortfoliosDocument });
  return (
    <PageContainer>
      <ProTable
        dataSource={result.data?.portfolios ?? []}
        loading={result.fetching}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
        }}
        options={{
          search: true,
        }}
        search={false}
        columns={columns}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            Create
          </Button>,
        ]}
      />
    </PageContainer>
  );
};
