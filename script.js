var cardcontainer = document.getElementById("cardcontainer")
var cardname = document.getElementById("cardname")
var addtaskpopup = document.getElementById("addtaskpopup")
var parent = document.getElementById('parent')
var addItemPopup = document.getElementById('addItemPopup')
var notask = document.getElementById('notask')
var singlecard = document.getElementById('singleCard')
var isssinglecard = false

// show task button
function showAddTask() {
    addtaskpopup.classList.remove('hide')
    parent.classList.add('blur')
}

// hide task button
function hideAddTask() {
    addtaskpopup.classList.add('hide')
    parent.classList.remove('blur')
}

//add card function
function addCard() {

    notask.classList.add('hide')
    hideAddTask()

    // create card element 
    let card = document.createElement('div')
    let cardHeading = document.createElement('h3')
    let line = document.createElement("hr")
    let itemList = document.createElement('div')
    let addItem = document.createElement('button')
    let deleteButton = document.createElement('button')

    // append Elements
    cardcontainer.appendChild(card)
    card.appendChild(cardHeading)
    card.appendChild(line)
    card.appendChild(itemList)
    card.appendChild(addItem)
    card.appendChild(deleteButton)


    //give value to element
    cardHeading.innerText = cardname.value
    cardname.value = "" //clearing the popup value
    card.classList.add('card')
    addItem.innerText = "+"
    deleteButton.innerText = "\u{1F5D1}";

    // delete button logic
    deleteButton.addEventListener('click', () => {
        card.remove()
        if (cardcontainer.innerText === '')
            notask.classList.remove('hide')
    })

    // add item   
    addItem.addEventListener('click', () => additemfunction(itemList))
    // console.log("additm") 

    //from here..........


    cardHeading.addEventListener('click', () => {

        isssinglecard = true
        singlecard.classList.remove('hide')
        cardcontainer.classList.add('hide')
        cardcontainer.classList.remove('cardcontainerdisplay')
        singlecard.classList.add('cardcontainerdisplay')
        let copycard = card.cloneNode(true)
        singlecard.appendChild(copycard)
        copycard.lastElementChild.addEventListener("click", () => {
            card.remove()
            copycard.remove()
            if (cardcontainer.innerText === '')
                notask.classList.remove('hide')
        })
        let markdoneclone = copycard.querySelectorAll('.markdonebutton')
        // let itemtextclone = itemclone.querySelector('.span1')
        console.log(copycard,markdoneclone)

        for (let i = 0; i < markdoneclone.length; i++) {
            markdoneclone[i].addEventListener('click', () => {

                markdoneclone[i].classList.add('hide')
                markdoneclone[i].previousSibling.classList.add('line')


            })

        }
        const copyaddbutton = copycard.lastElementChild.previousSibling;
        const copylist = copycard.querySelector("div")
        copyaddbutton.addEventListener('click', () => additemfunction(itemList, copylist))
        parent.firstElementChild.classList.remove('hide')

    })


    // if (isssinglecard) {
    //     // copyitem.firstElementChild.style.textDecoration = "line-through"
    //     markdone.addEventListener('click', () => {
    //         // itemtext.style.color = "blue;"
    //         markdone.classList.add('hide')
    //         itemtext.classList.add('line')
    //     })
    // }

}

function additemfunction(itemList, copylist) {

    addItemPopup.classList.remove('hide')
    parent.classList.add('blur')

    //create items
    let itemPopup = document.createElement('div')
    let itemPopupheading = document.createElement("h3")
    let itemName = document.createElement('input')
    let addButton = document.createElement('button')
    let closeButton = document.createElement('button')

    //append element
    addItemPopup.appendChild(itemPopup)
    addItemPopup.appendChild(itemPopupheading)
    addItemPopup.appendChild(itemName)
    addItemPopup.appendChild(addButton)
    addItemPopup.appendChild(closeButton)

    //give element values
    itemPopupheading.innerText = "Add task"
    addButton.innerText = "Add"
    closeButton.innerText = "Close"

    addButton.addEventListener('click', () => {
        // console.log("nmeeeee")
        addItemPopup.classList.add('hide')
        parent.classList.remove('blur')

        //creating item element
        var item = document.createElement('div')
        var itemtext = document.createElement('span')
        var markdone = document.createElement('button')

        //append
        item.appendChild(itemtext)
        item.appendChild(markdone)

        //value
        itemtext.innerText = itemName.value
        markdone.innerText = "Mark done"
        markdone.style.fontSize = "10px"
        markdone.style.padding = "2px"
        markdone.style.backgroundColor = "blue"
        markdone.style.border = "1px solid blue"

        markdone.classList.add('markdonebutton')
        itemtext.classList.add('spanA')

        if (isssinglecard) {
            // let copylist = copycard.querySelector('div')
            var copyitem = item.cloneNode(true)
            copylist.appendChild(copyitem)

            let markdoneclone = copyitem.querySelector('.markdonebutton')
            let itemtextclone = copyitem.querySelector('.spanA')

            markdoneclone.addEventListener('click', () => {
                itemtextclone.style.color = "blue;"
                        markdoneclone.classList.add('hide')
                        itemtextclone.classList.add('line')
            })



           
        }

        markdone.addEventListener('click', () => {
            // itemtext.style.color = "blue;"
            markdone.classList.add('hide')
            itemtext.classList.add('line')


            // if(isssinglecard){
            //     copyitem.firstElementChild.classList.add('line')
            // }
        })

        // if(isssinglecard){
        //     // copyitem.firstElementChild.style.textDecoration = "line-through"
        //     markdone.addEventListener('click', () => {
        //         // itemtext.style.color = "blue;"
        //         markdone.classList.add('hide')
        //         itemtext.classList.add('line')
        //     })
        // }

        //appending the item to item list
        itemList.appendChild(item)

        addItemPopup.innerText = ""
    })

    //close button logic
    closeButton.addEventListener('click', () => {
        addItemPopup.classList.add('hide')
        parent.classList.remove('blur')

        addItemPopup.innerText = ""
    })

}

function back() {
    isssinglecard = false
    parent.firstElementChild.classList.add('hide')
    singlecard.classList.add('hide')
    cardcontainer.classList.remove('hide')
    // cardcontainer.appendChild(singlecard.firstElementChild)
    cardcontainer.classList.add('cardcontainerdisplay')
    singlecard.classList.remove('cardcontainerdisplay')
    // cardcontainer.appendChild(singlecard.firstElementChild)
    singlecard.innerText = ''
}
