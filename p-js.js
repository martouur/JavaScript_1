import readline from "readline";


const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }]
  
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];
  


// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function getNumberFromConsole() {
    const promise = new Promise((resolve, reject) => {
        console.log('These are the rules of the game:.\n 1- Show in table format all the students. \n 2- Show by console the number of students in the class.\n 3- Show by console all the names of the students. \n 4- Delete the last student of the class. \n 5- Eliminate a student randomly from the class. \n 6- Show by console all the data of the students that are girls.\n 7- Show by console the number of boys and girls that are in the class.\n 8- Show true or false by console if all the students in the class are girls. \n 9- Show by console the names of the students that are between 20 and 25 years old. \n 10- Add a new student \n 11- Display by console the name of the youngest person in the class. \n12- Show by console the average age of all the students in the class. \n 13- Show by console the average age of the girls in the class. \n 14- Add a new grade to the students. For each student of the class, we will have to calculate a random grade (number between 0 and 10) and add it to the list of grades. \n15- Sort the array of students alphabetically by name');
        rl.question("Insert a number between 1 and 15: ", (num) => {
        rl.pause();
        if (isInt(num)) {
          num = Number.parseInt(num);
          resolve(num);
        } else {
          reject("You have exit the game, try again with a number between 1 and 15.");
        }
      });
    });
  
    return promise;
  }
  const chosenNumber = await getNumberFromConsole();
  async function main(){
    do{
        let button = await getNumberFromConsole();
    try{
        console.log('You have chosen the following number:'+ button)
        chosenNumber(button);
    } catch(error) {
        console.log('Please, insert a valid number')
    } } while ((button> 0) && (button<=15))
  }

switch(chosenNumber){
    case 1:
        // 1- Mostrar en formato de tabla todos los alumnos. 
        const table = console.table(students)
        break;
    
    case 2:
        // 2- Mostrar por consola la cantidad de alumnos que hay en clase.
        console.log('There are '+(students.length) +' students in this classroom.')

        break;

    case 3:
        //3- Mostrar por consola todos los nombres de los alumnos.
        function getNames(item){
        return[item.name].join("");
        }
      
        const onlyNames = students.map(getNames);
      
        console.log(onlyNames)
        break;

    case 4:
        // 4- Eliminar el último alumno de la clase.
        console.log('You have successfully removed this student:')
        console.log(students.pop())
        console.log('Now, these are the students left in the classroom:')
        console.log(students)

        break;

    case 5:
        //5- Eliminar un alumno aleatoriamente de la clase.
        console.log('The student deleted randomly is :')
        console.log(students.splice(1,1))
        console.log('This is how the classroom looks like now: ')
        console.log(students)
        break;

    case 6:
        //6- Mostrar por consola todos los datos de los alumnos que son chicas.
        
        students.find(girl =>{
            if(girl.gender == 'female') {
                console.log('The females in this classroom are: ')
                console.log(girl);
            }
        }); 
        break;

    case 7:
         //7- Mostrar por consola el número de chicos y chicas que hay en la clase.
         let female = 0;
         let male = 0;
         students.forEach(object => {
             if (object.gender === 'female') {
                 female++;
             } else if (object.gender === 'male') {
                 male++;
             }
         });
        console.log('There are ' + female 'girls and ' + male 'boys in the classroom')                                   
    break;
       
    case 8:
       // 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
        const isFemale = (gender) => gender.value ==='female';
        console.log(students.every(isFemale))
       break;

    case 9:
        //9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
        function young (students) {
            students.forEach(object => {
                if(object.age > 20 && object.age < 25) {
                console.log('The students between 20 and 25 are:' object.name);
    }
  });
}
     
        break;

    case 10:
       // 10- Añadir un alumno nuevo con los siguientes datos:
            //- nombre aleatorio.
            //- edad aleatoria entre 20 y 50 años.
            //- género aleatorio.
            //- listado de calificaciones vacío.
                //¡OJO!, el nombre y el género tienen que ir acordes.
   
        const randomName = availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)]
        
        function randomNumber(min, max) {
            const randomAge = Math.round(Math.random() * (50 - 20) + 20);
         }

        students.push({
            age: console.log(randomAge),
            examScore:[],
            gender:availableGenders[1],
            name: console.log(randomName),

        })
        break;

    case 11:
        //11- Mostrar por consola el nombre de la persona más joven de la clase.
            //¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.
        students.sort(function(a,b) {
            if (a.age > b.age) {
                return 1;
            } if (a.age < b.age) {
                return -1;
            } 
            
            return 0;
            })
            
        let youngest = students.at(0).name;
        console.log('The youngest person in the classroom is:  '+ youngest)
        break;

    case 12:
        //12- Mostrar por consola la edad media de todos los alumnos de la clase.
        const sumAges = students.reduce ((sum, num) => sum + num.age, 0);
        const average = sumAges / students.length;
        
        console.log('The average age of all the students in the classroom is: '+ average + ' years old.')
              
        break;

    case 13:
        // 13- Mostrar por consola la edad media de las chicas de la clase.
        function MedioEdadChicas(students) {
          let stAge = [];
          students.forEach(object => {
            if(object.gender === "female") {
              stAge.push(object.age);
            }
          });
          
          let sum = 0;
          for (let i = 0; i < stAge.length; i++){  
            sum = sum + stAge[i];
          }
          const faverage = sum/stAge.length;
         console.log('The average of the girls' age in the classroom is:' + faverage)

               
        break;

    case 14:
        //14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
        function randomCalification(min, max) {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;
        return randomNumber;
        
        function getScore(students) {
            students.forEach(object) => {
                const newScore = randomCalification(0, 10);
                object.examScores = newScore;
            });
            consule.log(students);
          }
        
          
        console.log(getScore(students))
        break;

    case 15:
       // 15- Ordenar el array de alumnos alfabéticamente según su nombre.
       const aplhArray = sortName(students)

        function sortName(students) {
            students.sort((a, b) => {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                    return 0;
            });
  
            console.log("The following array is sorted alphabetically:  ", students)
         }
       break;
    default:
    console.log("This is not a number between 1 and 15.")

  }
