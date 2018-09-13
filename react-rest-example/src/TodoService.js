import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.common['Accept'] = 'application/json';

class TodoService {
    static findAll(){
        return new Promise((resolve) => {
            axios.get('/todos')
                .then((response) => {
                resolve(response.data);
            })
        });
    }
    static findOne(id) {
        return new Promise((resolve) => {
            axios.get('/todos/' + id)
                .then((response) => {
                resolve(response.data)
            });
        });
    }

    static create() {
        return new Promise((resolve) => {
            resolve({
                text: "",
                id: 0
            })
        });
    }

    static save(data){
           return new Promise((resolve) =>{
               if (data.id) {
                   axios.put('/todos/' + data.id,data).then((response)=> {
                       resolve(response.data)});
               } else {
                   axios.post('/todos',data).then((response)=> {
                       resolve(response.data)});
               }

        });
    }

    static remove(data){
        return new Promise((resolve) => {
            axios.delete('/todos/' + data.id).then((response)=> {
                resolve(response.data);
            });
        });
    }

}
export default TodoService;