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

    static add(data){
        return new Promise((resolve) =>{
            axios.post('/todos',data).then((response)=> {
                resolve(response.data)});
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