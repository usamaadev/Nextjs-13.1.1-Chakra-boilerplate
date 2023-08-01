import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import NProgressbar from '@components/common/NProgressbar';
import AppLayout from '@layouts/AppLayout';
import customTheme from '@styles/ChakraTheme';
import useRouteTriggers from "@hooks/useRouteTriggers";

export default function App({ Component, pageProps }: AppProps) {
  const routeState = useRouteTriggers();
  return (
    <>
      <Head>
        <title>Vai Comparar</title>
        <meta name='description' content='Vai Comparar' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <QueryClientProvider client={queryClient}> */}

        <ChakraProvider theme={customTheme}>
          {/* <Provider store={store}> */}
            {/* <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            /> */}
            <AppLayout>
              <NProgressbar
                isRouteChanging={routeState.isRouteChanging}
                key={routeState.loadingKey}
              />
              {/* <Hydrate state={pageProps.dehydratedState}> */}
                <Component {...pageProps} />
              {/* </Hydrate> */}
            </AppLayout>
          {/* </Provider> */}
        </ChakraProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider> */}
    </>
  )


}
