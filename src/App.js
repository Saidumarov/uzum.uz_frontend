import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AppLayout from "./pages/AppLayout";
import ModalProvider from "./components/modalProvider";
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <AppLayout />
        </ModalProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
