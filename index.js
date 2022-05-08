document.addEventListener('DOMContentLoaded',()=>{
   let instuff =  document.querySelector('#instuff')
})


let cal = {
    something : ['dfd',5],

    caldone : false ,
    decdone : false ,

    his : [],
    
    current : 0,

    one : function() {
        
        instuff.value += '1',
        this.caldone = false;
        this.decdone = false;
    } ,
    two : function() {
        instuff.value += '2',
        this.caldone = false;
        this.decdone = false;
    } ,
    three : function() {
        instuff.value += '3',
        this.caldone = false;
        this.decdone = false;
    } ,
    four : function() {
        instuff.value += '4',
        this.caldone = false;
        this.decdone = false;
    } ,
    five : function() {
        instuff.value += '5',
        this.caldone = false;
        this.decdone = false;
    } ,
    six : function() {
        instuff.value += '6',
        this.caldone = false;
        this.decdone = false;
    } ,
    seven : function() {
        instuff.value += '7',
        this.caldone = false;
        this.decdone = false;
    } ,
    eight : function() {
        instuff.value += '8',
        this.caldone = false;
        this.decdone = false;
    } ,
    nine : function() {
        instuff.value += '9',
        this.caldone = false;
        this.decdone = false;
    } ,
    zero : function() {
        instuff.value += '0',
        this.caldone = false;
        this.decdone = false;
    } ,

    add : function() {
        if(!this.caldone ){
            instuff.value += '+'
            this.caldone = true ;
        }
        
    },
    sub: function(){
        if(!this.caldone){
            instuff.value += '-'
            this.caldone = true ;
        }
    },
    mul : function() {
        if(!this.caldone){
            instuff.value += '*'
            this.caldone = true ;
        }
    },
    div : function() {
        if(!this.caldone){
            instuff.value += '/'
            this.caldone = true ;
        }
    },

    dec : function() {
        if(!this.decdone && !this.caldone){
            instuff.value += '.'
            this.decdone = true ;
        }
    },

    del : function(){
        instuff.value = instuff.value.slice(0,-1)
    },

    eqa : function (){
        
        let {his} = this
        console.dir(this.his)
        his.unshift(instuff.value)
        instuff.value = eval(instuff.value) ;
        his.unshift(instuff.value)
    },

    undo: function () {
        
        let {his, current} = this
        if(current <= his.length - 1){
            current += 1
        }
        instuff.value = his.slice(current,current+1)

    },

    redu: function(){
        let {his, current} = this
        if(current > 0 ){
            current -= 1
            instuff.value = his.slice(current,current + 1)
        }

    },

    cl : function() {
        console.log('say something i am giveing up on u ')
        instuff.value = '' ;
    }
    




}

console.log(cal.something)