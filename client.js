


class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 );
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log( employees );


function bonusCalc( employee ){
  //initial bonusPercent 
  let bonusPercent = 0;

  let salaryNum = parseInt(employee.annualSalary);

  //adjust by employee rating
  if (employee.reviewRating === 5){
    bonusPercent = .10;
  }   else if (employee.reviewRating === 4){
    bonusPercent = .06;
  } else if (employee.reviewRating === 3){
    bonusPercent = .04;
  } else {
    bonusPercent = 0;
  }


 //adjust by employment length
  if ( employee.employeeNumber.length === 4 ){
    bonusPercent += .05;
  }
 
  //adjust by employee salary
  if (salaryNum > 65,000){
    bonusPercent -= .01;
  }

  //make sure bonusPercent isnt too high or too low
  if ( bonusPercent > .13 ){
    bonusPercent = .13;
  } else if ( bonusPercent < 0 ){
    bonusPercent = 0;
  }
  let bonus = salaryNum * bonusPercent;
  return {
    name: employee.name,
    bonusPercentage: ( bonusPercent * 100 ).toString() + '%',
    totalCompensation: ( bonus + salaryNum ).toString(),
    totalBonus: Math.floor( bonus )
  }
}

function renderListItem( employee ){
  let name = $('<p></p>').text('Name:' + employee.name );
  let bonusPercentage = $('<p></p>').text('Bonus %' + employee.bonusPercentage );
  let totalCompensation = $('<p></p>').text('Total Compensation' + employee.totalCompensation );
  let totalBonus = $('<p></p>').text('Total Bonus' + employee.totalBonus );
  return $('<li></li>').append(name, bonusPercentage, totalCompensation, totalBonus);
}

$(document).ready(function(){
  for (let i = 0; i < employees.length; i++){
  console.log(bonusCalc(employees [i]));
  let employeeInfo = bonusCalc(employees[i]);
  $('#employeeBonuses').append(renderListItem(employeeInfo))
  }
});

  
