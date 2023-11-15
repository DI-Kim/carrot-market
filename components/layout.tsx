import { cls } from "@/libs/utils";
import React from "react";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div className="fixed left-0 top-0 flex w-full items-center justify-center border-b bg-white py-3 text-lg font-medium text-gray-800">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-16", hasTabBar ? "pb-16" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 left-0 flex w-full items-center justify-between border-t bg-white pb-10 pt-3 text-gray-800">
          <span>동네생활</span>
          <span>a</span>
          <span>b</span>
          <span>c</span>
          <span>d</span>
        </nav>
      ) : null}
    </div>
  );
}
