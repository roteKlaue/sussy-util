import Set from "../Classes/Set";

export default function(sus:any[]):any[] {
    return [...(new Set(...sus).toArray())];
}