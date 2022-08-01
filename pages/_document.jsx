import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "styled-components";

class EditorDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2f42cb" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;500;700&family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <body>
          <ThemeProvider
            theme={{
              colors: {
                gradientBlue: "linear-gradient(to right, #2f42cb, #b6c9f2)",
                gradientOrange: "linear-gradient(to right, #ff9f43, #ff9f43)",
              },
            }}
          >
            <Main />
            <NextScript />
          </ThemeProvider>
        </body>
      </Html>
    );
  }

  static getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({});

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles)],
    };
  };
}

export default EditorDocument;
