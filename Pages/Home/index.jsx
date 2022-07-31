import {useState} from  'react';
import { Plus } from 'phosphor-react';
import { CardUsers} from '../../Components/CardUsers';


import './style.css';

export function Home() {
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState([])
    
    
    function handleAddStudent(){
    
 if (studentName !==''){
     const newStudent = {

          name:studentName
   
        }
       /* Duas formas de adicionar contatos no array
          1º setStudents( prevState=>[...prevState,newStudent]);
          2º  setStudents([...students,newStudent]);*/
        
        setStudents([...students,newStudent]);
   
        setStudentName('')

 
 } else{

// colocando emoji  npm i emoji-picker-react
alert('Digite um nome:');

 }



 /*    Ele usou esse comando abaixo no if( Para obter uma condição quase o usuário não
     digite nada  e coloque para adicionar)
 
      const newStudent = {

       name:studentName

     }
     Duas formas de adicionar contatos no array
       1º setStudents( prevState=>[...prevState,newStudent]);
       2º  setStudents([...students,newStudent]);
     
     setStudents([...students,newStudent]);

     setStudentName('')  */

    }

function handleRemoveStudent(idStudent){
                   //  // Visualizar funcionando  usa-se o comando a seguir 
                       //  econsole.log(idStudent); depois de testado colocamos o comando abaixo 

setStudents(students.filter((e, index) => index !== idStudent) );               

 }

    return (
     <div className="container">
           <h1>Lista de Alunos do curso </h1>
           <div className="input-container">
                <input 
                
                type= "text" 
                placeholder="Nome do Aluno"
                onChange={e=>setStudentName(e.target.value)}
                   value={studentName}             
                />
                              
                
                <button title="Adicionar aluno" onClick={handleAddStudent}>
                <Plus size={26} ></Plus>
                </button>
           </div>
           <div className="container-list" >
              {
               
               students.map((student,index) => <CardUsers key={index}  name={student.name} idStudent={index} 
               onDeleteStudent={handleRemoveStudent}     />)
              
              }
                
                </div>
           
           </div>


    
    )
  }
  
  