import { useState } from "react";

import { commentsData } from "./data/commentsData";
import CommentsWrapper from "./components/CommentsWrapper";

function App() {
  return (
    <>
      <CommentsWrapper data={commentsData} />
    </>
  );
}

export default App;
