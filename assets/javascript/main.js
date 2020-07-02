const bodyElement = document.querySelector('body')
let div = document.createElement('div')
let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.floor(Math.random() * 2)
    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            return "heads "
        }
        else {
            return "tails "
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
        or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {
            image.setAttribute("src", "./assets/images/coin_head.jpg")
        }
        else {
            image.setAttribute("src", "./assets/images/coin_tails.jpg")
        }
        return image;
    }
};
function display20Flips() {
    for (let index = 0; index < 20; index += 1) {
        coin.flip();
        bodyElement.append(coin.toString());
    }

}
new display20Flips()
function display20Images() {
    for (let index = 0; index < 20; index += 1) {
        coin.flip();
        div.append(coin.toHTML())
        bodyElement.append(div)



    }
}
new display20Images()
//