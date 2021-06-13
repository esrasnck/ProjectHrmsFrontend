import axios from "axios";

export default class LanguageService{

    getAllByCandidateId(params){

        return axios.get(`http://localhost:8080/api/controller/getall?candidateId=${params}`)
    }
}