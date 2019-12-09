var player = {
    spisok: [{
            name: "majid",
            year: 2019,
            duration: '3.2m'
        },
        {name:"shabnam",year:2018, duration:'8m'},
        {name:"fakhriddin",year:2010, duration:'2.8m'},
        {name:"nozia",year:2017, duration:'3.6m'},
        {name:"pitbul",year:2017, duration:'5m'}
    ],

    i: 0,
     p:new Promise(function (resolve, reject) { 
        //  console.log('bobojohn')
        setTimeout( bob => {
            console.log('johnn')
        },0)


     }),

    next:
        function () {
             
            setTimeout( bob => {
                if (this.i < (player.spisok.length - 1)) {
                    this.i++
                    // return this.i
                } else {
                    this.i = this.i
                }
                
                return player.i



            },0 )
            return player.i  
        },

        
    prev: function () {
        setTimeout(function (){  if (this.i > 0) {
            this.i--
        } else {
            this.i = this.i
        }
        return player.i   
        },0)
        return player.i  
       
    },
    play: function () {
        setTimeout(function(){
            console.log(player.spisok[player.i]);
            console.log(player.spisok[player.i].name + '_' + player.spisok[player.i].year + '__' + player.spisok[player.i].duration)
        },100)
       
    },
    addTolist: function (name, year, duration) {
        this.spisok.push({
            name: name,
            year: year,
            duration: duration
        })

    }


};

// var video = {};
// var templ = {};
// templ.__proto__ = Object.assign(player);
// video.__proto__ = Object.create(templ);


// //  var video = getPrototypeOf(player)
// // Object.setPrototypeOf(video) = player;
// var video = Object.create(player)
// // player.__proto__=video
// video.spisok=[],//'это перый способ но когда мы не добали новый файл video покажит нам пустой обект
// video.addTolist("Jakson", 2019, "2m");

// console.log('video ' ,video.spisok)
// console.log( 'player' , player.spisok)




player.next()

// player.next()

//  player.prev()
 player.play()