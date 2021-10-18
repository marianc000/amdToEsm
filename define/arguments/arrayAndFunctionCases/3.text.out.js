import view from './deps/view.js';
const html=await fetch(new URL('./deps/template.html',import.meta.url)).then(response => response.text());

/*define>*//*<function*/
        /*return>*/export default/*<return*/ view(html);
/*function>*//*<define*/