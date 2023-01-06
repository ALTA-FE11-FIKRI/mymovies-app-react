import React, { Component } from "react";

import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default class Layout extends Component<LayoutProps> {
  render() {
    return (
      <div className="w-full h-screen flex flex-col bg-white dark:bg-black">
        <Navbar />
        <div className="h-full overflow-auto p-3">{this.props.children}</div>
      </div>
    );
  }
}
