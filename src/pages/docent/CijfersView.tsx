import axios from 'axios'
import { useState, useEffect } from 'react'

function CijferView() {
  const [data, setData] = useState()

  useEffect(() => {
    axios
      .get('http://localhost:3001/teacher/657c1f01458ac6000ece2f46')
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
  }, [])

  function handleClick() {
    console.log('clicked')
  }
  return (
    <div className="p-4 w-full">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Klassen
              </th>
              <th scope="col" className="px-6 py-3">
                Vak
              </th>
              <th scope="col" className="px-6 py-3">
                Studenten
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data &&
              // @ts-ignore
              data?.classes.map((item: any) => {
                return (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">
                      {item.subjects
                        .filter((subject: any) =>
                        // @ts-ignore
                          data.subjects.some((s) => s._id == subject._id)
                        )
                        .map((subject: any) => {
                          return <p onClick={handleClick}>{subject.name}</p>
                        })}
                    </td>
                    <td className="px-6 py-4">18-12-2023</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Select
                      </a>
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

export default CijferView
