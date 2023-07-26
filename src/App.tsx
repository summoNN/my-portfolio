import * as React from "react"
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Hero } from "./components/Hero";
import { Works } from "./components/Works/Works";

export const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero />,
    },
    {
      path: "/works",
      element: <Works />,
    },
  ]);

  return(
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}
