import React from 'react'

const Card = (props) => {


    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img alt='robots' src={`./photos/${props.id}.jpeg`} width={230} height={200}  />
            <div>
                <h2>{props.name}</h2>
                <p>{props.username}</p>
                <p>{props.email}</p>
                
            </div>
        </div>
    );
};
export default Card;



// here is the same code whith some diffrences

// const Card = ({}) => {
//     const {name, email, id} = props;


//     return (
//         <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
//             <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );
// };
// export default Card;

// another way to wirite the code above
// const Card = ({name, email, id}) => {


//     return (
//         <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
//             <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// };
// export default Card;










