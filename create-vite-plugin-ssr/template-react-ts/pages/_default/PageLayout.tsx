import React from "react";
import logo from "./logo.svg";
import "./PageLayout.css";

export { PageLayout };

type Children = React.ReactNode;

function PageLayout({ children }: { children: Children }) {
  return (
    <React.StrictMode>
      <ViteAntiFlicker>
        <Layout>
          <Sidebar>
            <Logo />
            <a href="/">Home</a>
            <a href="/about">About</a>
          </Sidebar>
          <Content>{children}</Content>
        </Layout>
      </ViteAntiFlicker>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: Children }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

function Sidebar({ children }: { children: Children }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: Children }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logo} height={64} />
      </a>
    </div>
  );
}

// In development Vite loads the CSS dynamically leading to a flickering effect.
// The <ViteAntiFlicker> component removes the flickering.
function ViteAntiFlicker({ children }: { children: Children }) {
  return (
    <div style={{ display: "none" }} className="vite-anti-flicker">
      {children}
    </div>
  );
}
