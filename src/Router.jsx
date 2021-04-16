import { Router, Switch, Route } from 'react-router-dom';
// utils
import history from './utils/history';
// components
import ToDoListPage from './pages/TodoList';
import TaskDetailPage from './pages/TaskDetail';

function BrowserRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={ToDoListPage} />
                <Route exact path="/task/:index" component={TaskDetailPage} />
            </Switch>
        </Router>
    );
}

export default BrowserRouter;
