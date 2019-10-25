var myobject = new Vue({
    el: '#app',
    data: {
        num_carousel:1,
        ActiveCarr: true,
        objeto: [{
                title: 'Algo 1',
                descripcion: 'Otracosa 1',
                img: 'http://lorempixel.com/400/200',
                active:true
            },
            {
                title: 'Algo 1',
                descripcion: 'Otracosa 1',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 1',
                descripcion: 'Otracosa 1',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 1',
                descripcion: 'Otracosa 1',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 1',
                descripcion: 'Otracosa 1',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 1',
                descripcion: 'Otracosa 1',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 1',
                descripcion: 'Otracosa 1',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 1',
                descripcion: 'Otracosa 1',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 1',
                descripcion: 'Otracosa 1',
                img: 'http://lorempixel.com/400/200',
                active:false
            }
        ]
    }, 
    methods:{
        contar: function(){
            let div = this.objeto.length/4;
            this.num_carousel = Math.ceil(div);
        },
        isActiveCarr: function(num){
            this.ActiveCarr = (num == 0)?true:false
        },
        regresa_partes: function(inicio, fin){
            console.log(inicio+" "+fin);
            return this.objeto.slice(inicio, fin+1);
        },
    },
    mounted: function(){
        this.contar();
    },
    computed:{
        isActiveC: function(num){
            return (num === 1)?{active:true}:{active:false};
        }
    }
})