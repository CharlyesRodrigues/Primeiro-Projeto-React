import {Trash} from 'phosphor-react';


import './style.css';
export function CardUsers(bebe) {
    function deleteUsers(idUser){
   
   // Pra mostrar funcionando  usa-se o comando a seguir 
                //console.log(idUser); depois de testado colocamos o comando abaixo

                bebe.onDeleteStudent(idUser);

    }
    return (
     
           <div className='container-card'>
               <p style={{color:'white'}}>{bebe.name}</p>
               <button onClick={()=> deleteUsers(bebe.idStudent)}>
               <Trash size={32} />
            </button>

           </div>
           
    
    )
  }