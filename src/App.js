import {Link, Routes, Route} from "react-router-dom";

import Home from "./Components/Lesson_4/Pages/Home";
import Layout from "./Components/Lesson_4/Pages/Layout";
import About from "./Components/Lesson_4/Pages/About";
import Users from "./Components/Lesson_4/Pages/Users";
import Posts from "./Components/Lesson_4/Pages/Posts";
import Comments from "./Components/Lesson_4/Pages/Comments";
import UserDetails from "./Components/Lesson_4/Pages/UserDetails";

function App() {
    return (
        <div>
            <div>
                <h2>menu</h2>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/layout'}>layout</Link></li>
                    <li><Link to={'/about'}>about</Link></li>
                </ul>
            </div>

            <div>
                <h2>content</h2>

                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'/layout'} element={<Layout/>}>
                        <Route path={'users'} element={<Users/>}>
                            <Route path={':id'} element={<UserDetails/>}/>
                        </Route>
                        <Route path={'posts'} element={<Posts/>}/>
                        <Route path={'comments'} element={<Comments/>}/>
                    </Route>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
            </div>

        </div>
    );
}
export default App;