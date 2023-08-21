import React from "react";
import Header from "./components/MainHeader/Header";
import "./App.css";
import Main from "./components/Carousel/Main";
import Wrapper from "./components/section-categories/Wrapper";
import MainFlashSale from "./components/FlashSale/MainFlashSale";
import MainCategories from "./components/Categories/MainCategories";
import MainJFY from "./components/JustForYou/MainJFY";
import MainFooter from "./components/Footer/MainFooter";

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Wrapper />
			{window.innerWidth > 1000 && <MainFlashSale />}
			{window.innerWidth > 1000 && <MainCategories />}
			<MainJFY />
			<MainFooter />
		</div>
	);
}

export default App;
