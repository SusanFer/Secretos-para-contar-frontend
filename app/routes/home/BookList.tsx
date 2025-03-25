import { useEffect, useState } from "react";
import { LibraryInterface } from "~/interface/libraryInterface";
import { libraryMock } from "~/utils/libraryMock";

function BookList() {
    const [dataApi, setDataApi] = useState<LibraryInterface[]>([])
    useEffect(()=>{
        setDataApi(libraryMock)
    },[])
    return ( 
        <div>
            <div className="flex flex-wrap gap-4">
                {dataApi.map((data)=>(
                    <div key={data.id}>
                        <img className="w-64" src={data.image} alt={data.name} />
                        <div>
                            <h3>{data.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default BookList;