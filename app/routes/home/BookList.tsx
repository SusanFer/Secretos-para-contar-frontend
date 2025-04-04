import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { LibraryInterface } from "../../interface/libraryInterface";
import { libraryMock } from "../../utils/libraryMock";

function BookList() {
    const [dataApi, setDataApi] = useState<LibraryInterface[]>([])
    useEffect(()=>{
        setDataApi(libraryMock)
    },[])
    return ( 
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Nuestros libros</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dataApi.map((data)=>(
                    <div 
                        key={data.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-200"
                    >
                        <div className="h-64 overflow-hidden">
                            <img 
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                                src={data.image} 
                                alt={data.name} 
                            />
                        </div>
                        <div className="p-4 flex-grow flex flex-col justify-between">
                            <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-200">{data.name}</h3>
                            {data.author && (
                                <p className="text-gray-600 text-sm mb-2">By {data.author}</p>
                            )}
                            <div className="mt-auto pt-3 flex justify-between items-center">
                                <Link 
                                    to={`/book/${data.id}`} 
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                                >
                                    Ver libro
                                </Link>
                                {data.available ? (
                                    <span className="text-green-600 text-sm font-medium">Disponible</span>
                                ) : (
                                    <span className="text-red-600 text-sm font-medium">No disponible</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default BookList;