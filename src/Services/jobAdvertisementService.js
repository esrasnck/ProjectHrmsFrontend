import axios from "axios";

export default class JobAdvertisementService{
   
    getByIsActive(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByIsActive")
    }

    getByAppealDeadline(){

    return axios.get("http://localhost:8080/api/jobadvertisements/getByAppealDeadline")

   }

} 