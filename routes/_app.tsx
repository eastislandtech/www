import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>East Island Tech</title>
        <meta
          name="description"
          content="Precision electronics repairs and piano tuning in PEI"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
