var employee = {
	name:"Steve",
	age:45,
	salary:2000000,
	address: {
		city: "Seattle",
		state: "Washington",
		pincode: '97150'
	}
}

// To display object - Employee
console.log(employee);
// To display individual value of properties of Employee object
console.log("Name : " +employee.name);
console.log("Age : " +employee.age);
console.log("Salary : " +employee.salary);

// To display Nested object - Address
console.log(employee.address);
// To display individual value of property of Nested object - Address
console.log("City : "+employee.address.city);
console.log("State: "+employee.address.state);
console.log("Pincode: "+employee.address.pincode);
