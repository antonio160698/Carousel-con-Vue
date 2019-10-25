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
                title: 'Algo 2',
                descripcion: 'Otracosa 2',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 3',
                descripcion: 'Otracosa 3',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 4',
                descripcion: 'Otracosa 4',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 5',
                descripcion: 'Otracosa 5',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 6',
                descripcion: 'Otracosa 6',
                img: 'http://lorempixel.com/400/200',
                active:false
            },
            {
                title: 'Algo 7',
                descripcion: 'Otracosa 7',
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
            this.num_carousel = Math.round(div);
        },
        isActiveCarr: function(num){
            this.ActiveCarr = (num == 0)?true:false
        },
        regresa_partes: function(inicio, fin){
            console.log(inicio+" "+fin);
            return this.objeto.slice(inicio, fin);
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