import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import Footer from "./Footer";
interface Props {
  children: any;
}
const AppLayout: FC<Props> = ({ children }) => {

  return (
    <Box as='main' style={{ minHeight: "100vh" }}>
      <Box>
        {children}
      </Box>
      <Footer/>
    </Box>
  )
}

export default AppLayout