import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Container from "./components/MainLayout";
import GalleriesList from "./components/GalleriesList";
import GalleryView from "./components/GalleryView";

import "./css/reset.css";
import "./css/framework.css";
import "./css/app.css";
import "./App.css";
import { store } from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Container>
            <Routes>
              <Route path="/" element={<GalleriesList />} />
              <Route path="/gallery/:galleryId" element={<GalleryView />} />
              </Routes>
          </Container>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
