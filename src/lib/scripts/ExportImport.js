import { storageManager } from "./storage";

export async function exportData()
{
    const data = storageManager.readFromLocalstorage();

    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });

    downloadFile(URL.createObjectURL(blob), "SuproMapSave", "json");
}

export function downloadFile(url, name, type){
    const timestamp = new Date();


    const dateTimeText = `${timestamp.getDate()}_${timestamp.getMonth() + 1}_${timestamp.getFullYear()}(${timestamp.getHours()}-${timestamp.getMinutes()}-${timestamp.getSeconds()})`;


    let tempLink = document.createElement("a");
  
    tempLink.setAttribute('href', url);
  
    tempLink.setAttribute('download', `${name}_${dateTimeText}.${type}`);
    
    tempLink.click();
    
    URL.revokeObjectURL(tempLink.href);    

}