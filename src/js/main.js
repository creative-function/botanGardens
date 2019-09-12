
console.log(`hello chello`);

let wp0 = document.getElementById('wp0');
let wp1 = document.getElementById('wp1');
let wp2 = document.getElementById('wp2');
let wp3 = document.getElementById('wp3');
let wp4 = document.getElementById('wp4');
let wp5 = document.getElementById('wp5');
let wp6 = document.getElementById('wp6');
let wp7 = document.getElementById('wp7');
let wp8 = document.getElementById('wp8');
let wp9 = document.getElementById('wp9');
let wp10 = document.getElementById('wp10');
let wp11 = document.getElementById('wp11');
let wp12 = document.getElementById('wp12');

let transDiv = document.querySelector(".transition");
 

function colorDown(element){

    if (element.id == "w0"){

        console.log("point ready " + element.id)
        var tl = new TimelineMax();
        tl.to(transDiv, 2, {backgroundColor:"none"})

    }else if(element.id == "wp1"){

        let tl2 = new TimelineMax();
        tl2.from(transDiv, .5, {backgroundColor:"none"})
        .to(transDiv,1.5,{backgroundColor:"pink"});

    }else if(element.id == "wp2"){

        console.log("point ready " + element.id)
        var tl = new TimelineMax();
        tl.to(transDiv, 2, {backgroundColor:"none"})

    }else if(element.id == "wp3"){

        console.log("trans ready: " + element.id)
        var tl = new TimelineMax();
        tl.to(transDiv, 2, {backgroundColor:"red"})

    }else if(element.id == "wp4"){
        console.log("point ready " + element.id)
        var tl = new TimelineMax();
        tl.to(transDiv, 2, {backgroundColor:"green"})

    }else if(element.id == "wp5"){

        console.log("point ready " + element.id)
        var tl = new TimelineMax();
        tl.to(transDiv, 2, {backgroundColor:"none"})

    }else if(element.id == "wp6"){

        console.log("point ready " + element.id)
        var tl = new TimelineMax();
        tl.to(transDiv, 2, {backgroundColor:"purple"})

    }else if(element.id == "wp7"){

        console.log("point ready " + element.id)
        var tl = new TimelineMax();
        tl.to(transDiv, 2, {backgroundColor:"none"})
    }else if(element.id == "wp8"){

        console.log("point ready " + element.id)
        var tl = new TimelineMax();
        tl.to(transDiv, 2, {backgroundColor:"yellow"})

    }else if(element.id == "wp9"){

        console.log("point ready " + element.id)
        var tl = new TimelineMax();
        tl.to(transDiv, 2, {backgroundColor:"none"})

    }else if(element.id == "wp10"){

        console.log("point ready " + element.id)
        var tl = new TimelineMax();
        tl.to(transDiv, 2, {backgroundColor:"purple"})

    }else if(element.id == "wp11"){

        console.log("point ready " + element.id)
        var tl = new TimelineMax();
        tl.to(transDiv, 2, {backgroundColor:"none"})
    }

}

function colorUp(element){

    var tl = new TimelineMax();

    if (element.id == "wp0"){

        console.log("point ready " + element.id)
        
        tl.to(transDiv, 2, {backgroundColor:"none"})

    }else if(element.id == "wp1"){

        console.log("point ready " + element.id)
        // tl.from(transDiv, .5, {backgroundColor:"none"})
        // tl.to(transDiv,1,{backgroundColor:"pink"})
        // tl.to(transDiv, .5, {backgroundColor:"none"});

    }else if(element.id == "wp2"){

        console.log("point ready " + element.id)
        tl.to(transDiv, 2, {backgroundColor:"yellow"})

    }else if(element.id == "wp3"){

        console.log("trans ready: " + element.id)
        tl.to(transDiv, 2, {backgroundColor:"red"})

    }else if(element.id == "wp4"){
        console.log("point ready " + element.id)
        tl.to(transDiv, 2, {backgroundColor:"green"})

    }else if(element.id == "wp5"){

        console.log("point ready " + element.id)
        tl.to(transDiv, 2, {backgroundColor:"goldenrod"})

    }else if(element.id == "wp6"){

        console.log("point ready " + element.id)
        tl.to(transDiv, 2, {backgroundColor:"purple"})

    }else if(element.id == "wp7"){

        console.log("point ready " + element.id)
        tl.to(transDiv, 2, {backgroundColor:"none"})
    }

}

let waypoint0 = new Waypoint({
    element: wp0,
    handler: function handler(direction){
        if (direction == "up") {
            console.log(this.element) 
            colorUp(wp0);
        } else {
            console.log("downer") 
            colorDown(wp0);
        }
    },
    offset: '25%'
})

let waypoint1 = new Waypoint({
    element: wp1,
    handler: function handler(direction){
        if (direction == "up") {
            console.log(this.element) 
            colorUp(wp1);
        } else {
            console.log("downer") 
            colorDown(wp1);
        }
    }, offset: '100%'
    
})

let waypoint2 = new Waypoint({
    element: wp2,
    handler: function handler(direction){
        if (direction == "up") {
            console.log(this.element) 
            colorUp(wp2);
        } else {
            console.log("downer") 
            colorDown(wp2);
        }
    }
})

let waypoint3 = new Waypoint({
    element: wp3,
    handler: function handler(direction){
        if (direction == "up") {
            console.log(this.element) 
            colorUp(wp3);
        } else {
            console.log("downer") 
            colorDown(wp3);
        }
    }
})

let waypoint4 = new Waypoint({
    element: wp4,
    handler: function handler(direction){
        if (direction == "up") {
            console.log(this.element) 
            colorUp(wp4);
        } else {
            console.log("downer") 
            colorDown(wp4);
        }
    }
})

let waypoint5 = new Waypoint({
    element: wp5,
    handler: function handler(direction){
        if (direction == "up") {
            console.log(this.element) 
            colorUp(wp5);
        } else {
            console.log("downer") 
            colorDown(wp5);
        }
    }
})

let waypoint6 = new Waypoint({
    element: wp6,
    handler: function handler(direction){
        if (direction == "up") {
            console.log(this.element) 
            colorUp(wp6);
        } else {
            console.log("downer") 
            colorDown(wp6);
        }
    }
})

let waypoint7 = new Waypoint({
    element: wp7,
    handler: function handler(direction){
        if (direction == "up") {
            console.log(this.element) 
            colorUp(wp7);
        } else {
            console.log("downer") 
            colorDown(wp7);
        }
    }
})

let waypoint8 = new Waypoint({
    element: wp8,
    handler: function handler(direction){
        if (direction == "up") {
            console.log(this.element) 
            colorUp(wp8);
        } else {
            console.log("downer") 
            colorDown(wp8);
        }
    }
})

let waypoint9 = new Waypoint({
    element: wp9,
    handler: function handler(direction){
        if (direction == "up") {
            console.log(this.element) 
            colorUp(wp9);
        } else {
            console.log("downer") 
            colorDown(wp9);
        }
    }
})

let waypoint10 = new Waypoint({
    element: wp10,
    handler: function handler(direction){
        if (direction == "up") {
            console.log(this.element) 
            colorUp(wp10);
        } else {
            console.log("downer") 
            colorDown(wp10);
        }
    }
})

// let waypoint11 = new Waypoint({
//     element: wp11,
//     handler: function handler(direction){
//         if (direction == "up") {
//             console.log(this.element) 
//             colorUp(wp11);
//         } else {
//             console.log("downer") 
//             colorDown(wp11);
//         }
//     }
// })

// let waypoint12 = new Waypoint({
//     element: wp12,
//     handler: function handler(direction){
//         if (direction == "up") {
//             console.log(this.element) 
//             colorUp(wp12);
//         } else {
//             console.log("downer") 
//             colorDown(wp12);
//         }
//     }
// })

