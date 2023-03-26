import classes from './App.module.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";


function App() {
  return (
    <div className={classes.app}>
        <div className={classes.ball1}></div>
        <div className={classes.ball2}></div>
        <div className={classes.ball3}></div>
        <div className={classes.ball4}></div>
        <div className={classes.ball5}></div>

        <div className={classes.content}>
            <Header />
            <Content />
            <Footer />
        </div>
    </div>
  );
}

export default App;
