import { Route, Routes } from "react-router-dom";
import { AddBlog } from "./components/AddBlog";
import { Auth } from "./components/Auth";
import { BlogDetail } from "./components/BlogDetail";
import { Blogs } from "./components/Blogs";
import { Header } from "./components/Header";
import { UserBlogs } from "./components/UserBlogs";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetail />} />{" "}
        </Routes>
      </main>
    </>
  );
}

export default App;