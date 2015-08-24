app.controller("mainCtrl", function ($scope, uiGmapGoogleMapApi) {

    $scope.map = {center: { latitude: -34.902250, longitude: -56.175044 }, zoom: 18};
    $scope.options = {scrollwheel: false, draggable: false};
    $scope.marker = {
      id: 0,
      coords: {
        latitude: -34.902250,
        longitude:  -56.175044
      },
      icon: 'img/pin2.png',
      options: {
        animation: 1,
        draggable: true
      }
    };
    
    $scope.servicios = [
        { img: 'img/convenios/atenas2.png',
          titulo: 'Atenas',
          descripcion: '',
          link: ''},
        { img: 'img/convenios/blue.png',
          titulo: 'Blue Cross & Blue Shield',
          descripcion: '',
          link: ''},
        { img: 'img/convenios/summum.jpg',
          titulo: 'Summum',
          descripcion: '',
          link: ''},
        { img: 'img/convenios/defensor.png',
          titulo: 'Defensor Sporting',
          descripcion: '',
          link: ''},
        { img: 'img/convenios/cosem2.png',
          titulo: 'Cosem',
          descripcion: '',
          link: ''},
        { img: 'img/convenios/pulso2.jpg',
          titulo: 'Pulso Acompañantes',
          descripcion: '',
          link: ''},
       ];
    
    $scope.convenios = [
        { titulo: 'Pulso (10%)'},
        { titulo: 'Defensor Sporting - Socios (25%)'},
        { titulo: 'Asociación de funcionarios de Seem (10%)'}
       ];
    
    $scope.sobrenos = {
        titulo: 'Quienes somos',
        descripcion: 'Reha-vita es un emprendimiento pensado en llenar espacios que aún no se han cubierto en el área de la Rehabilitación y la calidad de vida, brindando atención grupal o individual según las necesidades de cada paciente, adecuando horarios y tratamiento sin esperas e inconvenientes.<br>El concepto de lograr una adecuada calidad de vida una vez terminado el proceso de Rehabilitación formal, es algo que hoy en día es preocupación de muchas personas que no encuentran un ámbito adecuado a sus necesidades para continuar su actividad física una vez dadas de alta de los servicios de Rehabilitación.<br>Contamos con una planta de 200 m² con consultorios y gimnasios equipados adecuadamente para brindar cualquier servicio de Medicina Física y Rehabilitación.',
        imagen: '' 
        
    };
    
    $scope.equipo = {};
    
    
    $scope.homearticulos = [
        {
            class: 'col-sm-6 col-md-4 wow bounceInLeft',
            anim_duration: '1s',
            anim_delay: '0s',
            imagen: 'img/galeria/1.jpg',
            titulo: 'Nuestra Clinica',
            descipcion: '',
            link: '#/galeria',
            btn: 'Ir a la galeria'
        },
        {
            class: 'col-sm-6 col-md-4 wow bounceInUp',
            anim_duration: '1s',
            anim_delay: '0.5s',
            imagen: 'img/home/deportiva.jpg',
            titulo: 'Medicina Fisica',
            descipcion: '',
            link: '#',
            btn: 'Más información'
        },
        {
            class: 'col-sm-6 col-md-4 wow bounceInUp',
            anim_duration: '1s',
            anim_delay: '1s',
            imagen: 'img/home/vendaje.jpg',
            titulo: 'Calidad de vida',
            descipcion: '',
            link: '#',
            btn: 'Más información'
        }
    ];
    
    
    $scope.imgenesGaleria = [
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/1.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive recortada',
            ruta: 'img/galeria/2.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/3.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/5.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/7.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/8.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/9.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/4.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/11.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/12.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/13.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/14.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/15.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/16.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/18.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/19.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/20.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/21.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/22.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/23.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/24.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/25.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/26.jpg'
        }
    ];
    
    
    $scope.personasEquipo = [
        {
            class: 'col-md-6 text-center equipo-stilo',
            nombre: 'Dra. Gabriela De Pizzol',
            profesion: 'Fisiatra',
            area: 'DIRECCIÓN TÉCNICA',
            img: ''
        },
        {
            class: 'col-md-6 text-center equipo-stilo',
            nombre: 'Lic. en Fisioterapia Silvia Ardaiz',
            profesion: 'Fisiatra',
            area: 'COORDINACIÓN',
            img: ''
        },
        {
            class: 'col-md-4 text-center equipo-stilo',
            nombre: 'Lic. en Fisioterapia Silvia Ardaiz',
            profesion: 'Fisiatra',
            area: '',
            img:''
        },
        {
            class: 'col-md-4 text-center equipo-stilo',
            nombre: 'Lic. en Fisioterapia Silvia Ardaiz',
            profesion: 'Fisiatra',
            area: '',
            img: ''
        },
        {
            class: 'col-md-4 text-center',
            nombre: 'Lic. en Fisioterapia Silvia Ardaiz',
            profesion: 'Fisiatra',
            area: '',
            img: ''
        }
        
    ];
    
});

