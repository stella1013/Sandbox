class Tooltip extends HTMLElement {
    constructor(){
        super();
        console.log('Working...');
       
    }
    connectedCallback(){
        const toolTipIcon = document.createElement('span');
        toolTipIcon.textContent = ' (?) ';
        toolTipIcon.addEventListener('mouseenter', );
        this.appendChild(toolTipIcon);
    }
    _showTooltip(){
        
    }
}
customElements.define('tool-tip', Tooltip);