import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    muted: string;
  }

  interface TypeTextOptions {
    muted?: string;
  }
}
