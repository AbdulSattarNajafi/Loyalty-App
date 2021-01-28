/**
 * 
 * UI Related Functions
 */
function ui_related_functions() {
    
    //Main menu navigation
    //Component Navigation
    cmp_navigations();

    
/**
 * END: UI Related Functions
 */
}

/**
 * Default settings for app open screen
 */
function default_loads() {
    load_component('general_settings');
}

/**
 * Navigations Related Scripts
 */

 //--------- MAIN NAVIGATION (COMPONENT NAVIGATION)
function cmp_navigations() {
    $('#app_header .cmp_nav button').click(function(e) {
        e.stopPropagation();
        const cmp_target = $(this).attr('cmp_target');
        if(typeof cmp_target !== typeof undefined && cmp_target !== false){
            load_component(cmp_target);
        }

        $('#app_header .cmp_nav button').removeClass('btn-underline');
        $('#app_header .cmp_nav button').addClass('btn-light');
        $(this).addClass('btn-underline'); 
        $(this).removeClass('btn-light'); 
    });
}

/**
 *  On document load complete
 */
jQuery(function($){
    ui_related_functions();

    default_loads(); 
});