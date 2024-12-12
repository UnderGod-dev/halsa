import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  return (
    <div className="mx-4 xl:mx-16">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
