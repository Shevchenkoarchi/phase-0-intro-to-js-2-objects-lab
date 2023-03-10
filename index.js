// Write your solution in this file!
const employee = {
    name : "Arthur",
    streetAddress : "Brooklyn"
}
function updateEmployeeWithKeyAndValue(obj, key, value)
{const newObj = {...obj}
newObj[key] = value
return newObj
}
const employees = updateEmployeeWithKeyAndValue(...employee, "Name", "Sam")
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}
function deleteFromEmployeeByKey(obj,key){
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete employee.name
    return employee
}
