import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const buildOrderListItem = (order) => {
    const foundMetal = metals.find(
        (metal) => {
       
            if (metal.id === order.metalId) {
                return true
            
        }
        }
    )
    const foundSize = sizes.find(
        (size) => {
       
            if (size.id === order.sizeId) {
                return true
            
        }
        }
    )
    const foundStyle = styles.find(
        (style) => {
       
            if (style.id === order.styleId) {
                return true
            
        }
        }
    )
    const totalCost = (foundMetal.price + foundSize.price + foundStyle.price)
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
    // return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



// Remember that the function you pass to find() must return true/false



