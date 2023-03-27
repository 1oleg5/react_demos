import {Routes, Route} from 'react-router-dom';

import {RouterEndPoints} from "./Lesson_4/Routes/routes";
import {MainLayout} from "./Lesson_4/layout/MainLayout";
import {Home} from "./Lesson_4/pages/Home/Home";
import {Todos} from "./Lesson_4/pages/TodosPage/Todos";
import {Albums} from "./Lesson_4/pages/Albums/Albums";
import {CommentsPage} from "./Lesson_4/pages/CommentsPage/CommentsPage";
import {PostByComment} from "./Lesson_4/pages/PostByComment/PostByComment";


export const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path={RouterEndPoints.index} element={<MainLayout/>}>
                    <Route path={RouterEndPoints.index} element={<Home/>}/>
                    <Route path={RouterEndPoints.todos} element={<Todos/>}/>
                    <Route path={RouterEndPoints.albums} element={<Albums/>}/>
                    <Route path={RouterEndPoints.comments} element={<CommentsPage/>}>
                        <Route path={RouterEndPoints.postId} element={<PostByComment/>}/>
                    </Route>

                </Route>
            </Routes>
        </div>
    );
}