import React from "react"
import { Redirect } from "react-router-dom"

import ClientDashboard from "../pages/Dashboards/Client";
import AdministratorDashboard from "../pages/Dashboards/Administrator";

import CreateClient from "../pages/Clients/Create";
import ClientList from "../pages/Clients/Index";
import ClientDetails from "../pages/Clients/Details";
import EditClient from "../pages/Clients/Edit";

import DoctorList from "../pages/Doctors/Index";
import CreateDoctor from "../pages/Doctors/Create";
import DoctorDetails from "../pages/Doctors/Details";
import EditDoctor from "../pages/Doctors/Edit";

import AppointmentList from "../pages/Appointments/Index";
import CreateAppointment from "../pages/Appointments/Create";
import AppointmentDetails from "../pages/Appointments/Details";
import EditAppointment from "../pages/Appointments/Edit";

import DocAppointmentList from "../pages/DoctorFront/DocAppointments";
import DocClientList from "../pages/DoctorFront/DocClients";

// // Profile
import UserProfile from "../pages/Authentication/user-profile"

// // Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// //  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Login2 from "../pages/AuthenticationInner/Login2"
import Register1 from "../pages/AuthenticationInner/Register"
import Register2 from "../pages/AuthenticationInner/Register2"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import Recoverpw2 from "../pages/AuthenticationInner/Recoverpw2"
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword"
import ForgetPwd2 from "../pages/AuthenticationInner/ForgetPassword2"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"
import LockScreen2 from "../pages/AuthenticationInner/auth-lock-screen-2"
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail"
import ConfirmMail2 from "../pages/AuthenticationInner/page-confirm-mail-2"
import EmailVerification from "../pages/AuthenticationInner/auth-email-verification"
import EmailVerification2 from "../pages/AuthenticationInner/auth-email-verification-2"
import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification"
import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2"

// //PagesClientDetailsges/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"

const authProtectedRoutes = [
  { path: "/administrator", component: AdministratorDashboard },
  { path: "/client", component: ClientDashboard },

  { path: "/administrator/clients", component: ClientList },
  { path: "/administrator/clients/create", component: CreateClient },
  { path: "/administrator/clients/:uuid", component: ClientDetails },
  { path: "/administrator/clients/:uuid/edit", component: EditClient },

  { path: "/administrator/doctors", component: DoctorList },
  { path: "/administrator/doctors/create", component: CreateDoctor },
  { path: "/administrator/doctors/:uuid", component: DoctorDetails },
  { path: "/administrator/doctors/:uuid/edit", component: EditDoctor },

  { path: "/administrator/appointments", component: AppointmentList },
  { path: "/administrator/appointments/create", component: CreateAppointment },
  { path: "/administrator/appointments/:uuid", component: AppointmentDetails },
  { path: "/administrator/appointments/:uuid/edit", component: EditAppointment },

  { path: "/doctor/appointments", component: DocAppointmentList },
  { path: "/doctor/clients", component: DocClientList },

  

  // Profile
  { path: "/profile", component: UserProfile },

  //Utility
  //{ path: "/pages-starter", component: PagesStarter },
  //{ path: "/pages-timeline", component: PagesTimeline },
  //{ path: "/pages-faqs", component: PagesFaqs },
  //{ path: "/pages-pricing", component: PagesPricing },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/administrator" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

  //{ path: "/pages-maintenance", component: PagesMaintenance },
  //{ path: "/pages-comingsoon", component: PagesComingsoon },
  //{ path: "/pages-404", component: Pages404 },
  //{ path: "/pages-500", component: Pages500 },

//   // Authentication Inner
  { path: "/pages-login", component: Login1 },
  { path: "/pages-login-2", component: Login2 },
  { path: "/pages-register", component: Register1 },
  { path: "/pages-register-2", component: Register2 },
  { path: "/page-recoverpw", component: Recoverpw },
  { path: "/page-recoverpw-2", component: Recoverpw2 },
  { path: "/pages-forgot-pwd", component: ForgetPwd1 },
  { path: "/pages-forgot-pwd-2", component: ForgetPwd2 },
  { path: "/auth-lock-screen", component: LockScreen },
  { path: "/auth-lock-screen-2", component: LockScreen2 },
  { path: "/page-confirm-mail", component: ConfirmMail },
  { path: "/page-confirm-mail-2", component: ConfirmMail2 },
  { path: "/auth-email-verification", component: EmailVerification },
  { path: "/auth-email-verification-2", component: EmailVerification2 },
  { path: "/auth-two-step-verification", component: TwostepVerification },
  { path: "/auth-two-step-verification-2", component: TwostepVerification2 },
]

export { authProtectedRoutes,publicRoutes }
