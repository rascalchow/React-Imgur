import React, { Component } from "react";

type MainLayoutProps = {
  children: React.ReactNode
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => (
  <div className="container">{children}</div>
);
export default MainLayout;
