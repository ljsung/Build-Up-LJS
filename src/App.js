import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./Pages/Main";
import Issue from "./Pages/Issue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* <Route index element={<Main />} />
          <Route imdex element={<Issue/>} /> */}
          <Route path="/" element={<Main/>}/>
          <Route path="/issue.html" element={<Issue/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
