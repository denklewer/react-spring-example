import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import TodoListPage from "./TodoListPage";
import TodoEditPage from "./TodoEditPage";


export default function AppRouter() {
    return (
       <Router>
           <div>
               <Route path={"/"} exact component={e => {
                  return <Redirect to={"/todos"}/>
               }}/>
               <Route path={"/todos/"} exact component={TodoListPage}/>
               <Route path={"/todos/:id"} exact component={TodoEditPage}/>
           </div>
       </Router>
    );
}
