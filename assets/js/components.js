/**
*   Component Management Script
*   (Append and Remove html/js as components within a html)
*   By Chandimaj (chandimaj@icloud.com)
*/


/** Loads HTML / Js Components into app.
 *  
 * Usecase: load_component('component_folder_name')
 * 
 * */
function load_component(component_name){
    const header_url = 'components/'+component_name+'/cmp_head.html';
    const js_url = 'components/'+component_name+'/cmp_scripts.js';

    //Resetting HTMLs
    $('#app_sub_header').html('');
    $('#app_body').html('');

    //Removing Component Scripts
    remove_cmp_js();
    remove_subcmp_js();
    console.log('loading_component: '+component_name);
    //Loading Component to DOM
    $('#app_sub_header').load(header_url,function(){ // Load body
      load_js(js_url)  // Load scripts
      load_js('components/cmp_common_scripts.js'); // Load component common scripts
    });
}


/** Loads HTML / Js Sub Components into app body.
 *  
 * Usecase: load_sub_component('parent_component_name', 'target_component_foldername')
 * 
 * */
function load_sub_component(parent_component, sub_component_name){

    
    const body_url = 'components/'+parent_component+'/'+sub_component_name+'/subcmp_body.html';
    const js_url = 'components/'+parent_component+'/'+sub_component_name+'/subcmp_scripts.js';

    //Resetting HTMLs
    $('#app_body').html('');

    //Resetting Sub Component JS
    remove_subcmp_js();
    console.log('loading sub component:'+parent_component+'/'+sub_component_name);

    //Loading Sub Component to DOM
    $('#app_body').load(body_url,function(){ // Load body
      load_js(js_url);  // Load scripts
      load_js('components/subcmp_common_scripts.js'); // Load Sub component common scripts 
    });
}


/** 
 * 
 * Appending JS to html head
 */
function load_js(file_url){
  console.log('loading js: '+file_url);
    let fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", file_url);
    if (typeof fileref!="undefined"){
      document.getElementsByTagName("head")[0].appendChild(fileref);
    }
  }

/**
 * 
 * Remove Any JS by file name or url
 */
function remove_js(file_search_term) {
  console.log('Removing js: '+file_search_term);
  let allsuspects=document.getElementsByTagName("script");

  for (let i=allsuspects.length; i>=0; i--){
     //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute("src")!=null && allsuspects[i].getAttribute("src").indexOf(file_search_term)!=-1 ){
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
  }
}


/**
 * 
 * Remove Components JS from app
 */

function remove_cmp_js(){
  console.log('Removing components js...');
  let allsuspects=document.getElementsByTagName("script");

  for (let i=allsuspects.length; i>=0; i--){
     //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] 
      && allsuspects[i].getAttribute("src")!=null 
      && (allsuspects[i].getAttribute("src").indexOf('cmp_scripts.js')!=-1 
          || allsuspects[i].getAttribute("src").indexOf('cmp_common_scripts.js')!=-1 
          || allsuspects[i].getAttribute("src").indexOf('subcmp_scripts.js')!=-1 
          || allsuspects[i].getAttribute("src").indexOf('subcmp_common_scripts.js')!=-1 
          || allsuspects[i].getAttribute("src").indexOf('module.js')!=-1 )){
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
  }
}

/**
 * 
 * Remove Sub Components JS  from app
 */

function remove_subcmp_js(){
  console.log('Removing sub components js...');
  let allsuspects=document.getElementsByTagName("script");
  for (let i=allsuspects.length; i>=0; i--){
      //search backwards within nodelist for matching elements to remove
      if (allsuspects[i] 
        && allsuspects[i].getAttribute("src")!=null 
        && (allsuspects[i].getAttribute("src").indexOf('subcmp_scripts.js')!=-1 
            || allsuspects[i].getAttribute("src").indexOf('subcmp_common_scripts.js')!=-1 
            || allsuspects[i].getAttribute("src").indexOf('module.js')!=-1 )){
          allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
      }
  }
}


