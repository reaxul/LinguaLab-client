import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../provider/AuthProvider'
import { useContext } from 'react';
const useClasses = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: myClasses = [] } = useQuery({
        queryKey: ['my-classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://linguo-lab-server.vercel.app/my-classes?email=${user?.email}`)
            return res.json();
        },
    })

    return [myClasses, refetch]


}
export default useClasses;