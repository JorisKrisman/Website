import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function KlasView() {
  const { klasId, subjectId } = useParams<{
    klasId: string
    subjectId: string
  }>()

  const [classData, setClassData] = useState([])
  const [tests, setTests] = useState([])

  const [changedGrades, setChangedGrades] = useState<any>([])

  const [newTest, setNewTest] = useState<any>()

  useEffect(() => {
    axios
      .get(`http://localhost:3001/class/${klasId}/${subjectId}`)
      .then((res) => {
        setClassData(res.data.students)
        setTests(res.data.tests)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [klasId, subjectId])

  function handleGradeChange(e: any, student: any, grade: any) {
    if (changedGrades.filter((g: any) => g.gradeId === grade._id && g.studentId === student._id).length > 0) {
      setChangedGrades(
        changedGrades.map((g: any) => {
          if (g.gradeId === grade._id && g.studentId === student._id) {
            return { ...g, value: e.target.value }
          } else {
            return g
          }
        })
      )
    } else {
      const newGrade = {
        gradeId: grade._id,
        value: e.target.value,
        studentId: student._id,
        testId: grade.test._id,
        teacher: '657c1f01458ac6000ece2f46',
      }

      setChangedGrades([...changedGrades, newGrade])
    }
  }

  function saveGrades() {
    axios
      .post(`http://localhost:3001/class/changeGrades`, { changedGrades })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function addTest() {
    axios
      .post(`http://localhost:3001/subject/${subjectId}/addTest`, {
        name: newTest,
      })
      .then((res) => {
        setTests(res.data.tests)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="p-4 w-full">
      <div className="flex align-middle mb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={addTest}
        >
          Nieuwe Toets
        </button>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Toets naam"
          onChange={(e) => setNewTest(e.target.value)}
        />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Student
              </th>
              {tests &&
                tests.map((test: any) => {
                  return (
                    <th
                      scope="col"
                      className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {test.name}
                    </th>
                  )
                })}
            </tr>
          </thead>

          <tbody>
            {classData &&
              // @ts-ignore
              classData?.map((student: any) => {
                return (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {student.firstName} {student.lastName}
                    </th>
                    {tests &&
                      tests.map((test: any) => {
                        return (
                          <td className="px-6 py-4">
                            {student.grades.filter(
                              (grade: any) => grade.test._id === test._id
                            ).length > 0 ? (
                              student.grades
                                .filter(
                                  (grade: any) => grade.test._id === test._id
                                )
                                .map((grade: any) => {
                                  return (
                                    <input
                                      className="w-16 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      defaultValue={grade.value}
                                      onChange={(e) =>
                                        handleGradeChange(e, student, grade)
                                      }
                                    />
                                  )
                                })
                            ) : (
                              <input
                                className="w-16 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) =>
                                  handleGradeChange(e, student, {
                                    test,
                                    value: 0,
                                  })
                                }
                              />
                            )}
                          </td>
                        )
                      })}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={saveGrades}
      >
        Opslaan
      </button>
    </div>
  )
}
