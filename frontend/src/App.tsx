import { AppRouter } from "./lib/react-router/router";
import { Header } from "./components/header/header.component";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
    </>
  );
};
