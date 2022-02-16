import React from 'react';

import {BrowserRouter, Route, NavLink, Routes} from "react-router-dom";
import UsersPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";

const App = () => {

    return (
        <BrowserRouter>
                <div>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/todos">Todos</NavLink>
                </div>
            <Routes>
                <Route path={'/users'} element={<UsersPage />}>

                </Route>
                <Route path={'/todos'} element={<TodosPage />}>

                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;