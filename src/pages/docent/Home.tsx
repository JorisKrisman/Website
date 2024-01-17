import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosAuth } from "../../interceptors";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState()

  useEffect(() => {
    axiosAuth
      .get(process.env.REACT_APP_BACKEND_URL + '/teacher/657c1f01458ac6000ece2f46')
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
  }, [])

  function handleClick(klas: string, subject: string) {
    console.log(klas, subject)
    navigate(`/docent/klas/${klas}/${subject}`)
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
                              data.subjects.some((s) => s._id === subject._id)
                            )
                            .map((subject: any) => {
                              return (
                                <p onClick={() => handleClick(item._id, subject._id)} className="hover:cursor-pointer">{subject.name}</p>
                              );
                            })}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
  );
}

export default Home;
