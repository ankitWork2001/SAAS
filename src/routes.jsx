import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// General Pages
import Home from "./pages/Home/Home";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Features from './pages/Features/Features'; 
import Toolkits from './pages/ToolKits/Toolkits';
import Screeners from './pages/Screeners/Screeners';
import Backtesters from './pages/Backtesters/Backtesters';
import Pricing from './components/Pricing';  // General Pricing
import TermsAndServices from './pages/TermsAndServices/TermsAndServices';
import Disclaimer from './pages/Disclaimer/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Cookies from './pages/Cookies/Cookies';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import PrivacyForm from './pages/PrivacyPolicy/PrivacyForm';
import Support from './pages/Support/Support';
import AITest from "./pages/AITest/AITest";

// About Page Sections
import About from "./components/About";
import AboutHero from './components/About/AboutHero';
import Market from './components/About/Market';
import Trading from './components/About/Trading';
import Lux from './components/About/Lux';

// Pricing Page Sections
import Plans from './components/Pricing/Plans';
import Safe from './components/Pricing/Safe';
import Question from './components/Pricing/Question';
import Pricing1 from './components/Pricing/Pricing1';

// Admin Dashboard and Child Pages
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import FourGrid from './pages/Admin/Dashboard/FourGrid';
import GraphTable from './pages/Admin/Dashboard/GraphTable';
import UserTable from './pages/Admin/Dashboard/UserTable';

// Admin User Section
import AdminUserTable from './pages/Admin/User/UserTable';

// Admin Layout
import AdminLayout from './layouts/AdminLayout';
import SubscriptionPricing from './pages/Admin/Subscription/Pricing';  // Admin Pricing

// Admin Review Section
import Review1 from './pages/Admin/Review/Review1';
import Rating from './pages/Admin/Review/Rating';
import Comment from './pages/Admin/Review/Comment';
import Setting1 from './pages/Admin/Settings/Setting1';
import Profile1 from './pages/Admin/Profile/Profile1'; // Profile Page



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
        element: <Pricing />,  // General Pricing Page
        children: [
          {
            index: true,
            element: <Pricing1 />
          },
          {
            path: "plans",
            element: <Plans />
          },
          {
            path: "safe",
            element: <Safe />
          },
          {
            path: "question",
            element: <Question />
          }
        ]
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            index: true,
            element: <AboutHero />
          },
          {
            path: "market",
            element: <Market />
          },
          {
            path: "trading",
            element: <Trading />
          },
          {
            path: "lux",
            element: <Lux />
          }
        ]
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

      // Admin Routes
      {
        path: "admin",
        element: <AdminLayout />,  // AdminLayout already includes Navbar and Sidebar
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [
              {
                index: true,
                element: <FourGrid />
              },
              {
                path: "fourgrid",
                element: <FourGrid />
              },
              {
                path: "graphtable",
                element: <GraphTable />
              },
              {
                path: "usertable",
                element: <UserTable />
              }
            ]
          },
          {
            path: "user",
            children: [
              {
                index: true,
                element: <AdminUserTable />
              },
              {
                path: "usertable",
                element: <AdminUserTable />
              }
            ]
          },
          {
            path: "subscription",
            element: <AdminLayout />, // Don't repeat AdminLayout here
            children: [
              {
                path: "pricing",
                element: <SubscriptionPricing />  // Admin Pricing
              }
            ]
          },
          // Admin Review Section
          {
            path: "review",
            element: <AdminLayout />,  // AdminLayout already includes Navbar
            children: [
              {
                index: true,
                element: <Review1 />
              },
              {
                path: "rating",
                element: <Rating />
              },
              {
                path: "comment",
                element: <Comment />
              }
            ]
          },
          {
            path: "settings",
            element: <Setting1 />,  // Only Setting1 will be displayed
          },
          {
            path: "profile",
            element: <Profile1 />  // Profile1 added
          }


        ]
      }
    ],
  },
]);

export default router;
