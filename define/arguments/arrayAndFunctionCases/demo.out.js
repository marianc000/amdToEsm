import view from './deps/view.js';
const html=await fetch(new URL('./template.html',import.meta.url)).then(response => response.text());



        export default view(html);
    
