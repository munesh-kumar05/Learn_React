

// interface HeaderKumar{
//     title : string;
//     description : string;
// }



// export default function(props: HeaderKumar){

//     return(
//         <>
//            <div> hi from tile {props.title}</div> 
//            <div> hi from tile {props.description}</div> 
          
//            </>
//     )
// }

interface HeaderKumar{
    title : string;
    description : string;
}
export default function({title, description}: HeaderKumar){

    return(
        <>
           <div> hi from tile {title}</div> 
           <div> hi from tile {description}</div> 
          
           </>
    )
}