export default class HapiAdapter {
    static create(fn){
        return async function (req){
            return await fn(req.params, req.payload);
        }
    }
}