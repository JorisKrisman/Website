import CijferView from './pages/docent/CijfersView'
import StudentList from './pages/docent/StudentList'
import DocentHome from './pages/docent/Home'
import Home from './pages/student/Home'
import KlasView from './pages/docent/KlasView'
import Login from './pages/login/Login'

export const routes = [
  {
    path: '/',
    component: <DocentHome />,
  },
  {
    path: '/Docent/CijfersView',
    component: <CijferView />,
  },
  {
    path: '/Docent/StudentList',
    component: <StudentList />,
  },
  {
    path: '/student',
    component: <Home />,
  },
  {
    path: '/docent/klas/:klasId/:subjectId',
    component: <KlasView />,
  },
  {
    path: '/login',
    component: <Login />,
  }
]
