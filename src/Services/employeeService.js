import axios from "axios";

export default class EmployeeService{
    

    getAllEmployee(){
        return axios.get("http://localhost:8080/api/employees/getall");
    }

    getEmployeeById(params){

        return axios.get(`http://localhost:8080/api/employees/getbyid?id=${params}`)
    }

}