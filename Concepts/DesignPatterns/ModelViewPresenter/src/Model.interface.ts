export interface Modelable{
    data:string;
    getData:()=> string;
    setData:(data:string)=>void;
}