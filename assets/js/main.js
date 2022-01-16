
let app = new Vue({

    el: "#app",
    data: {

        active: 0,
        timer: "",
        images: [
            {
                url:   'assets/img/01.jpg',
                title: 'Svezia',
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                url:   'assets/img/02.jpg',
                title: 'Svizzera',
                text:  'Lorem ipsum',
            },
            {
                url:   'assets/img/03.jpg',
                title: 'Gran Bretagna',
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
            },
            {
                url:   'assets/img/04.jpg',
                title: 'Germania',
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam',
            },
            {
                url:   'assets/img/05.jpg',
                title: 'Paradise',
                text:  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },    
        ],
    },
    methods: {
        isactive: function(imgIndex){
            if (imgIndex == this.active){
                return "active";
            }
            return "";
        },
        shownext: function(){
            this.active++;
            if(this.active == this.images.length){
                this.active = 0;
            }
        },
        showprev: function(){
            this.active --;
            if (this.active < 0){
                this.active = this.images.length - 1;
            }
        },
        setimage: function(index){
            this.stoptimer();
            this.active = index;
        },
        changeimg: function(){
            this.shownext();
        },
        stoptimer: function(){
            clearInterval(this.timer);
        },

    },
});

app.timer = setInterval(app.changeimg, 3000);
