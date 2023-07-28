import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div style={{ overflowX: "hidden" }}>
          <Main />
          <NextScript />
          <script
            type="module"
            src="https://unpkg.com/@splinetool/viewer@0.9.379/build/spline-viewer.js"
            async
          ></script>
        </div>
      </body>
    </Html>
  );
}
