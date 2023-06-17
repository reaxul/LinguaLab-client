// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import Swal from "sweetalert2";
import useClasses from "../../hooks/useClasses";

const MyClasses = () => {
//   const { user } = useContext(AuthContext);
//   const [myClasses, setMyClasses] = useState([]);
//   const URL = `https://linguo-lab-server.vercel.app/my-classes?email=${user?.email}`;
//   useEffect(() => {
//     fetch(URL)
//       .then((res) => res.json())
//       .then((data) => setMyClasses(data));
//   }, [URL]);
    const [myClasses, refetch] = useClasses();
  const handleDelete = id => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://linguo-lab-server.vercel.app/my-classes/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
        }
    })
}

  return (
    <div className="mt-4">
      <h3 className="text-2xl">Total Classes: {myClasses.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((row,index)=><tr key={index}>
              <td>
                {index+1}
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={row.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                            <div className="font-bold">{row.name}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                {row.instructor}
              </td>
                <td>$ {row.price}</td>
              <td>
                <button onClick={()=>handleDelete(row._id)} className="btn bg-[#9a212b] btn-xs"><FaTrashAlt></FaTrashAlt> Delete</button>
              </td>
              <td>
                <button className="btn bg-[#1d424f] btn-xs"><MdPayment></MdPayment>Pay</button>
              </td>
            </tr>)}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
