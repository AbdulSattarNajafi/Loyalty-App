/**
*   Module Management Script
*   (Append and Remove html/js as modules within a html)
*   By Chandimaj (chandimaj@icloud.com)
*/


/** Loads HTML / Js Components into app.
 *  
 * Usecase: load_module('module_placeholder_id','module_folder_URL')
 * 
 * */
function load_module(module_placeholder_id, module_folder_url){
    const module_url = 'components/'+module_folder_url+'/module.html';
    const js_url = 'components/'+module_folder_url+'/module.js';

    //Loading Component to DOM
    $('#'+module_placeholder_id).load(module_url,function(){ // Load body
      load_js(js_url)  // Load scripts
    });
}



/** 
 * 
 * Appending JS to html head
 */
function load_js(filename){
    let fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);
    if (typeof fileref!="undefined"){
      document.getElementsByTagName("head")[0].appendChild(fileref);
    }
  }

/**
 * 
 * Remove Module
 */

function remove_module(module_placeholder_id, module_folder_url){
    
    //Module location specific Script name
    const js_url = module_folder_url+'/module.js';

    //Resetting HTMLs
    $('#'+module_placeholder_id).html('');
    let allsuspects=document.getElementsByTagName("script");

    for (let i=allsuspects.length; i>=0; i--){
     //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute("src")!=null && allsuspects[i].getAttribute("src").indexOf(js_url)!=-1){
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
 }
}