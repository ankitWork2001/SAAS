// src/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Features from './pages/Features/Features';
import Toolkits from './pages/ToolKits/Toolkits';
import Screeners from './pages/Screeners/Screeners';
import Backtesters from './pages/Backtesters/Backtesters';
import Pricing from './components/Pricing';
import TermsAndServices from './pages/TermsAndServices/TermsAndServices';
import Disclaimer from './pages/Disclaimer/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Cookies from './pages/Cookies/Cookies';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import PrivacyForm from './pages/PrivacyPolicy/PrivacyForm';
import Support from './pages/Support/Support';
import AITest from "./pages/AITest/AITest";


export const router = createBrowserRouter([
     {
          path: "/",
          element: <App />,
          children: [
               {
                    index: true,
                    element: <Home />,
               },
               {
                    path: "signup",
                    element: <Signup />,
               },
               {
                    path: "login",
                    element: <Login />,
               },
               {
                    path: "features",
                    element: <Features />,
                    children: [
                         {
                              path: "toolkits",
                              element: <Toolkits />,
                         },
                         {
                              path: "screeners",
                              element: <Screeners />,
                         },
                         {
                              path: "backtesters",
                              element: <Backtesters />,
                         },
                    ],
               },
               {
                    path: "pricing",
                    element: <Pricing />,
               },
               {
                    path: "ai-test",
                    element: <AITest />,
               },
               {
                    path: "terms",
                    element: <TermsAndServices />,
               },
               {
                    path: "disclaimer",
                    element: <Disclaimer />,
               },
               {
                    path: "privacy-policy",
                    element: <PrivacyPolicy />,
               },
               {
                    path: "cookies",
                    element: <Cookies />,
               },
               {
                    path: "personal-info",
                    element: <PersonalInfo />,
               },
               {
                    path: "privacy-form",
                    element: <PrivacyForm />,
               },
               {
                    path: "support",
                    element: <Support />,
               },
          ],
     },
]);

export default router;