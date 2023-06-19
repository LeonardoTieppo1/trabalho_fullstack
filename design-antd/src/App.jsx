import { Avatar, Layout, Menu } from 'antd';
import './App.css';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Html5Outlined, UserAddOutlined, QuestionCircleOutlined, DeleteOutlined } from "@ant-design/icons"
import Sider from 'antd/es/layout/Sider';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Login } from './login';
import { User } from './user';
import { Users } from "./users";
function App() {

  const rotas = createBrowserRouter([{
    path: '/',
    element: <Login/>
  }, {
    path: '/usuario',
    element: <User/>
  },
  {
    path: '/usuarios',
    element: <Users/>
  },
  {
    path: '/login',
    element: <h1>Questions</h1>
  },
  {
    path: '/exclude',
    element: <h1>Exclusions</h1>
  }]);

  const itemMenuSelecionado = (item) => {
    rotas.navigate(item.key);
  }

  const Conteudo = (props) => {

    return <RouterProvider router={rotas} />

  }
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <Avatar icon={<Html5Outlined />} style={{ float: "left" }}></Avatar>

        <h1 style={{ color: "white" }}>Cabeçalho</h1>
      </Header>
      <Layout style={{ border: "1px solid black" }}>
        <Sider>
          <Menu onClick={itemMenuSelecionado}>
            <Menu.Item icon={<UserAddOutlined />} key="/usuario">Users</Menu.Item>
            <Menu.Item icon={<QuestionCircleOutlined />} key="/question">Duvidas</Menu.Item>
            <Menu.Item icon={<DeleteOutlined />} key="/exclude">Excluir</Menu.Item>
          </Menu>
        </Sider>
        <Content div style={{marginLeft:15}}>
          <Conteudo />
        </Content>
      </Layout>
      <Footer>
        <h1 style={{marginTop:25}}>Rodapé</h1>
      </Footer>
    </Layout>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
