import axios from "axios"
import { useState, useEffect } from "react"
import { Student } from "../../interfaces"

export default function Home() {
  const [data, setData] = useState<Student>()

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/student/657fffcccf8886d53e8106d1').then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <div className="p-4 w-full">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Vak
              </th>
              <th scope="col" className="px-6 py-3">
                Toets
              </th>
              <th scope="col" className="px-6 py-3">
                Cijfer
              </th>
            </tr>
          </thead>

          <tbody>
            {data &&
              // @ts-ignore
              data?.grades.map((grade: any) => {
                return (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {grade.test.subject.name}
                    </th>
                    <td className="px-6 py-4">
                      {grade.test.name}
                    </td>
                    <td className="px-6 py-4">
                      {grade.value}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}