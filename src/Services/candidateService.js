import axios from "axios";

export default class CandidateService{
   
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }

    getCvByCandidateId(params){ // 1 numaraları id dolu* 

        return axios.get(`http://localhost:8080/api/candidates/getCVById?candidateId=${params}`)
    }
} 

