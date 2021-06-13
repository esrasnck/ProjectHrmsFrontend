import axios from "axios";

export default class JobExperiencesService{

    getJobExperiences(){

        return axios.get("http://localhost:8080/api/jobexperiences/getall")
    }

    getJobExperienceById(params){

        return axios.get(`http://localhost:8080/api/jobexperiences/getbyid?id=${params}`)
    }

}

