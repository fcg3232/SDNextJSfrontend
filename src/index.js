import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./reducer/store";
import { productsFetch } from "./slices/productsSlice";
import { personalFetch } from "./slices/personalSlice";
import { propertyFetch } from "./slices/propertySlice";
import { blogFetch } from "./slices/blogSlice";
import { propertyLLCFetch } from "./slices/llcSlice";
import { berbixdataFetch } from "./slices/berbixSlice";
import { usersFetch } from './slices/UsersSlice';
// import { usersFetchbyID } from './slices/UsersSlice';
import { buyerOfferFetch } from './slices/buyersSlice';
import { sellerOfferFetch } from './slices/sellersSlice';
import { limitOrderOfferFetch } from "./slices/LimitOrderSlice";
// import {UserlimitOrder} from "./slices/LimitOrderSlice";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '../src/components/MarketPlace/config'

store.dispatch(productsFetch());
store.dispatch(personalFetch());
store.dispatch(propertyFetch());
store.dispatch(blogFetch());
store.dispatch(propertyLLCFetch());
store.dispatch(berbixdataFetch());
store.dispatch(usersFetch());
// store.dispatch(usersFetchbyID());
store.dispatch(buyerOfferFetch());
store.dispatch(sellerOfferFetch());
store.dispatch(limitOrderOfferFetch());
// store.dispatch(UserlimitOrder());

const queryClient = new QueryClient();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </WagmiProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
