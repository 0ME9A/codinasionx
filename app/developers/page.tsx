import { devsDataType } from "app/_types/Devs";
import AnimatedDevs from "app/_components/DevsComp/AnimatedDevs";
import Devs from "app/_components/DevsComp/Devs";

export default async function Page() {
  const data: devsDataType[] = [];
  let status = 200;
  let page = 1;
  
  // while (status === 200) {
  //   const url = `https://api.github.com/repos/codinasion/program/contributors?per_page=100&page=${page}`;
  //   const fetchD = await fetch(url);
  //   const result: devsDataType[] = fetchD.status === 200 ? await fetchD.json() : [];
  //   data.push(...result);
  //   status = fetchD.status;
    
  //   if (result.length > 0) {
  //     page++;
  //   } else {
  //     break;
  //   }
  // }
    
  console.log(data, '----------devs')
  
  
  // return null
  return <Devs api={{ data, status }} infinite={true}  />
}

  













  // const [api, setApi] = useState<{data: devsDataType[], status: number}>({data: [], status: 404})
  // const [page, setPage] = useState<number>(1)
    
      // useEffect(() => {
        //   const url = `https://api.github.com/repos/codinasion/program/contributors?per_page=100&page=${page}`;
      //   async function fd(url: string) {
        //     const fetchD = await fetch(url);
        //     const result: devsDataType[] = fetchD.status === 200 ? await fetchD.json() : []
        //     fetchD.status === 200 && setApi({ data: [...api.data, ...result], status: fetchD.status })
        
        //     setTimeout(() => {
      //       fetchD.status === 200 && result.length > 1 && setPage(page + 1)
      //     }, 3000);
      //   }
    
      //   fd(url)
      //   console.log(api)
      // }, [page])