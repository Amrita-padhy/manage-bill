import { extendTheme, withDefaultSize } from "@chakra-ui/react";

export const myNewTheme = extendTheme({
  styles: {
    global: {
      // styles for the `p`
      p: {
        marginTop: "0px",
      },
    },
  },
});
