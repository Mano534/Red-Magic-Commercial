let all = document.querySelectorAll(".gr-2");
let fonts = document.querySelectorAll('.gr-1');
let items = document.querySelectorAll('.item');
let options= {
    // rootMargin: "0px 300px",
    threshole: 0
};
console.log(all);
let observeGrTwo=new IntersectionObserver((e,x)=>{
    // console.log(entery);

    e.forEach(e=>{
        if(!e.isIntersecting){
            return;
        }
        e.target.classList.toggle('animate');
    })
},options);
all.forEach(ele=>{
    observeGrTwo.observe(ele)
});

let animate2 = new IntersectionObserver(function(enter,x){
    enter.forEach(entery=>{
        // console.log(entery);
        if(!entery.isIntersecting){
            return;
        }
        entery.target.classList.toggle('animate');
        // animate2.unobserve(entery.target);
    })
},options)
fonts.forEach(ele=>{
    animate2.observe(ele);
})
let animate3 = new IntersectionObserver(function(enter,x){
    enter.forEach(entery=>{
        console.log(entery)
        // console.log(entery);
        if(!entery.isIntersecting){
            return;
        }
        entery.target.classList.add('animate');
        // animate3.unobserve(entery.target);
    })
},{threshold:0})
items.forEach(ele=>{
    animate3.observe(ele);
})
