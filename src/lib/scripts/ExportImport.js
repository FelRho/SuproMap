import { storageManager } from "./storage";

export async function exportData()
{
    let data = storageManager.readFromLocalstorage();

    let blob = new Blob([JSON.stringify(data)], { type: 'application/json' });


    const timestamp = new Date();


    let dateTimeText = `${timestamp.getDate()}_${timestamp.getMonth() + 1}_${timestamp.getFullYear()}(${timestamp.getHours()}-${timestamp.getMinutes()}-${timestamp.getSeconds()})`;


    var tempLink = document.createElement("a");
  
    tempLink.setAttribute('href', URL.createObjectURL(blob));
  
    tempLink.setAttribute('download', `SuproMap_${dateTimeText}.json`);
    
    tempLink.click();
    
    URL.revokeObjectURL(tempLink.href);    
}

export function ImportData(){
    
}