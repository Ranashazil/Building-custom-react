function customrender(theElement, Container){
const hereElement = document.createElement(theElement.type)
hereElement.innerHTML = theElement.children
for (const prop in theElement.props) {
    hereElement.setAttribute(prop, theElement.props[prop]) // resct element k props ander ja k key pas krden ge jo ha prop
}

Container.appendChild(hereElement)
}

const theElement = {
    type: 'a',
    props: {
           href: 'https://google.com',
           target: '_blank'
    },
    children: 'i want to go to google'
}


const theContainer = document.querySelector('#root')

customrender(theElement, theContainer)// theelement ko theContainer ma inject krna ha 

