import React from "react";
import { PageHeader } from "antd";

type TitleProps = {
  title: string;
};
const Title = ({ title }: TitleProps) => {
  return <PageHeader className="site-page-header" title={title} />;
};

export default Title;
