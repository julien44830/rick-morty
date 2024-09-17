import { useLoaderData } from "react-router-dom";


export default function DetailPage() {
  const data = useLoaderData();
  console.log('%c⧭', 'color: #aa00ff', data);


    return (
        <>
            <h1>{data.name}</h1>
            <img
                    src={data.image}
                    alt={data.name}
                />

            <p>type : {data.species}</p>
            <p>
              
              {data.status === 'Alive' ?
              '🟢 en vie pour le moment'
              :
              '🔴 décédé pour le moment'
            
            }
            </p>
        </>
    );
}
