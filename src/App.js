import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeDetail from "./page/HomePage/HomeDetail/HomeDetail";
import Layout from "./template/Layout";
import ListRoom from "./page/ListRoom/ListRoom";
import DetailRoom from "./page/DetailRoom/DetailRoom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import { createBrowserHistory } from "history";
import UserInfor from "./page/UserInfor/UserInfor";
import NotFoundPages from "./page/NotFound/NotFoundPages";
import Loading from "./component/Loading/Loading";
import ManageUser from "./page/ManageUser/ManageUser";
import EditUser from "./page/ManageUser/EditUser";
import AdminPriority from "./page/AdminPriority/AdminPriority";
import AdminLayout from "./template/AdminLayout";
import ManageRoom from "./page/ManageRoom/ManageRoom";
import ThemRoom from "./page/ManageRoom/ThemRoom";
import EditRoom from "./page/ManageRoom/EditRoom";
export let history = createBrowserHistory();
function App() {
  return (
    <>
      <Loading />
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Layout Component={HomeDetail} />;
            }}
          />
          <Route
            path="/room"
            exact
            render={() => {
              return <Layout Component={ListRoom} />;
            }}
          />
          <Route
            path="/detailroom/:id"
            exact
            render={() => {
              return <Layout Component={DetailRoom} />;
            }}
          />
          <Route
            path="/user"
            exact
            render={() => {
              return <Layout Component={UserInfor} />;
            }}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/edituser" exact component={EditUser} />
          <Route path="/adminPriority" exact component={AdminPriority} />

          <Route
            path="/admin"
            exact
            render={() => {
              return <AdminLayout Component={ManageUser} />;
            }}
          />
          <Route
            path="/manageRoom"
            exact
            render={() => {
              return <AdminLayout Component={ManageRoom} />;
            }}
          />
          <Route path="/addRoom" exact component={ThemRoom} />
          <Route path="/editRoom/:id" exact component={EditRoom} />
          <Route path="*" exact component={NotFoundPages} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
