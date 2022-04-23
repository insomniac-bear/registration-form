import Header from '../header/header';
import Title from '../title/title';
import Main from '../main/main';
import appStyles from './app.module.css';

const App = () => {
  return (
    <div className={appStyles.app}>
      <Header>
        <Title tag='h1'>Регистрация:</Title>
      </Header>
      <Main />
    </div>
  )
};

export default App;