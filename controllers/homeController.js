app.controller("mainCtrl", function ($scope,$http, uiGmapGoogleMapApi) {

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
        { img: 'img/convenios/summum.jpg',
          titulo: 'Summum',
          descripcion: '',
          link: 'https://www.summum.com.uy/',segundo: '0.2s'},

        { img: 'img/convenios/defensor.png',
          titulo: 'Defensor Sporting',
          descripcion: '',
          link: 'http://defensorsporting.com.uy/dsc/',segundo: '0.3s'},
        { img: 'img/convenios/cosem2.png',
          titulo: 'Cosem',
          descripcion: '',
          link: 'https://www.cosem.com.uy/',segundo: '0.4s'},       
        { img: 'img/convenios/pulso2.jpg',
          titulo: 'Pulso Acompañantes',
          descripcion: '',
          link: 'http://www.pulso.com.uy/',segundo: '0.5s'},
        { img: 'img/convenios/blue.png',
          titulo: 'Blue Cross & Blue Shield',
          descripcion: '',
          link: 'http://www.bcbsu.com.uy/bcbsu/espaniol/index.asp',
          segundo: '0.6s'}
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
            class: 'col-xs-12 col-sm-4 col-md-4 wow zoomIn',
            anim_duration: '0.5s',
            anim_delay: '0s',
            imagen: 'img/home/home-rehavita-articulo.jpg',
            titulo: 'Nuestra Clinica',
            descripcion: 'En nuestras clínicas contamos con los medios técnicos más avanzados y los mejores profesionales para satisfacer por completo las necesidades de nuestros pacientes.',
            link: '#/galeria',
            btn: 'Ir a la galeria'
        },
        {
            class: 'col-xs-12 col-sm-4 col-md-4 wow zoomIn',
            anim_duration: '0.5s',
            anim_delay: '0.3s',
            imagen: 'img/home/home-rehavita-preguntas.png',
            titulo: 'Preguntas Frecuentes',
            descripcion: 'Preguntas que usualmente los clientes nos hacen con frecuencia.',
            link: '#/preguntas',
            btn: 'Ver preguntas'
        }
    ];
    
    $scope.noticias = [
        {
            imagen: 'img/noticias/1.jpg',
            fecha: '19/12/2014',
            titulo: 'Nos Mudamos!!',
            descripcion: 'Rehavita se reinventa....nuevas instalaciones, y la misma buena onda. Nos podés encontrar en Juan Antonio Rodríguez 1464 /603 (frente al Ministerio de Salud Pública).',
            link: '#/noticias',
            btn: 'Ver más'
        }
    ];
    
    
    $scope.imgenesGaleria = [
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr1.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr1.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive recortada',
            ruta: 'img/galeria/galeria-rehavita-gr2.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr2.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr3.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr3.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr4.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr4.jpg'

        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr5.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr5.jpg'
 
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr6.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr6.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr7.jpg',
            rutap: 'img/galeria/galeria-rehavita-pq7.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr8.jpg',
            rutap: 'img/galeria/galeria-rehavita-pq8.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr9.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr9.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr10.jpg',
            rutap: 'img/tratamientos/trat-rehavita-pq12.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr11.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr11.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr12.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr12.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr13.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr13.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr14.jpg',
            rutap: 'img/tratamientos/trat-rehavita-pq10.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr15.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr15.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr16.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr16.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr17.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr17.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr18.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr18.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr19.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr19.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr20.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr20.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr21.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr21.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr22.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr22.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr23.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr23.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr24.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr24.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr25.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr25.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr26.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr26.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr27.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr27.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr28.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr28.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr29.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr29.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr30.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr30.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr31.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr31.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr32.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr32.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr33.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr33.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr34.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr34.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr35.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr35.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr36.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr36.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr37.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr37.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr38.jpg',
            rutap: 'img/tratamientos/trat-rehavita-pq23.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr39.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr39.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr40.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr40.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr41.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr41.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            ruta: 'img/galeria/galeria-rehavita-gr42.jpg',
            rutap: 'img/galeria/galeria-rehavita-gr42.jpg'
        }
    ];
    
    
    $scope.personasEquipo = [
        {
            class: 'col-sm-6 col-md-4 text-center equipo-stilo',
            nombre: 'Dra. Gabriela De Pizzol',
            profesion: 'Fisiatra',
            area: '',
            img: 'img/equipo/p6.jpg',
            duracion: '0.5s',
            delay:'0.1s'
        },
        {
            class: 'col-sm-6 col-md-4 text-center equipo-stilo',
            nombre: 'Silvia Ardaiz',
            profesion: 'Lic. en Fisioterapia',
            area: '',
            img: 'img/equipo/p1.jpg',
            duracion: '0.5s',
            delay:'0.2s'
        },
        {
            class: 'col-sm-6 col-md-4 text-center equipo-stilo',
            nombre: 'Nathalie Jourdan',
            profesion: 'Lic. en Fisioterapia',
            area: '',
            img:'img/equipo/p2.jpg',
            duracion: '0.5s',
            delay:'0.3s'
        },
        {
            class: 'col-sm-6 col-md-4 text-center equipo-stilo',
            nombre: 'Natalia Balsa',
            profesion: 'Lic. en Fisioterapia',
            area: '',
            img: 'img/equipo/p4.jpg',
            duracion: '0.5s',
            delay:'0.4s'
        },
        {
            class: 'col-sm-6 col-md-4 text-center equipo-stilo',
            nombre: 'Esteban Fontes',
            profesion: 'Lic. en Fisioterapia',
            area: '',
            img: 'img/equipo/p5.jpg',
            duracion: '0.5s',
            delay:'0.5s'
        },
        {
            class: 'col-sm-6 col-md-4 text-center equipo-stilo',
            nombre: 'Florencia Borges',
            profesion: 'Lic. en Fisioterapia',
            area: '',
            img: 'img/equipo/p3.jpg',
            duracion: '0.5s',
            delay:'0.6s'
        }
        
    ];
    
    
    $scope.myInterval = 3000;
    $scope.slides = [
        {
          image: 'img/equipo/1.jpg'
        },
        {
          image: 'img/equipo/2.jpg'
        },
        {
          image: 'img/equipo/3.jpg'
        }
    ];
    
    $scope.insImagenes = [
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr1.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq1.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr2.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq2.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr3.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq3.jpg'

        },
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr4.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq4.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr5.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq5.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr6.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq6.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr7.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq7.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr8.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq8.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr9.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq9.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr10.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq10.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr11.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq11.jpg'
        },
        {
            titulo: '',
            class: 'img-responsive',
            img: 'img/instalaciones/instalaciones-rehavita-gr12.jpg',
            imgp: 'img/instalaciones/instalaciones-rehavita-pq12.jpg'
        }

        
    ];


    
    $scope.equipos = [
        {
            img: 'img/equipamiento/equipo-rehavita-neurodyn.jpg',
            titulo: 'Neurodyn',
            descipcion: '',
            duracion: '0.5s',
            delay: ''
        },
        {
            img: 'img/equipamiento/equipo-rehavita-iontoforesis.jpg',
            titulo: 'Iontoforesis',
            descipcion: '',
            duracion: '0.5s',
            delay: ''        
        },
        {
            img: 'img/equipamiento/equipo-rehavita-magneto.jpg',
            titulo: 'Magnetoterapia',
            descipcion: '',
            duracion: '0.5s',
            delay: '0.1s'
        },
        {
            img: 'img/equipamiento/equipo-rehavita-ultramax.jpg',
            titulo: 'Ultramax',
            descipcion: '',
            duracion: '0.5s',
            delay: '0.2s'
        },
        {
            img: 'img/equipamiento/equipo-rehavita-laser.jpg',
            titulo: 'Laser',
            descipcion: '',
            duracion: '0.5s',
            delay: '0.3s'
        },
        {
            img: 'img/equipamiento/equipo-rehavita-infrarojo.jpg',
            titulo: 'Infrarrojo',
            descipcion: '',
            duracion: '0.5s',
            delay: '0.4s'
        },
        {
            img: 'img/equipamiento/equipo-rehavita-ultrasono.jpg',
            titulo: 'Ultrasonido',
            descipcion: '',
            duracion: '0.5s',
            delay: '0.5s'
        }

    ];
    
    $scope.preguntas = [
        {
            img: 'img/home/home-rehavita-preguntasb.png',
            titulo: 'Puedo ir directamente a la clínica sin que me vea un médico?',
            respuesta: 'Lo ideal es que concurra con indicaciones médicas, pero de no tenerlas contamos con médico Fisiatra en la clínica. La clínica trabaja con protocolos de tratamiento para las diferentes patologías supervisadas por médico.',
            duracion: '0.5s',
            delay: '0.1s'
        },
        {
            img: 'img/home/home-rehavita-preguntasb.png',
            titulo: 'Hacen domicilios?',
            respuesta: 'Si, dependiendo de la zona.',
            duracion: '0.5s',
            delay: '0.2s'
        },
        {
            img: 'img/home/home-rehavita-preguntasb.png',
            titulo: 'Se hacen consultas médicas en domicilio?',
            respuesta: 'Si, se hacen para dar indicaciones al licenciado que concurra al domicilio.',
            duracion: '0.5s',
            delay: '0.3s'
        },
        {
            img: 'img/home/home-rehavita-preguntasb.png',
            titulo: 'En que horarios atienden en la clinica?',
            respuesta: 'Trabajamos de lunes a viernes de 9:30-13:00 y de 14:00-19:00.',
            duracion: '0.5s',
            delay: '0.4s'
        },
        {
            img: 'img/home/home-rehavita-preguntasb.png',
            titulo: 'En donde se encuentran ubicados?',
            respuesta: 'La dirección de la clinica es  Juan Antonio Rodriguez 1464-1468 apto 603, estamos en el barrio Cordón.',
            duracion: '0.5s',
            delay: '0.5s'
        }
    ];
    
    $scope.items = [
        'img/equipo/slide7.jpg', 
        'img/equipo/slide8.jpg',
        'img/equipo/slide9.jpg',
        'img/equipo/slide10.jpg',
        'img/equipo/slide11.jpg',
        'img/equipo/slide12.jpg', 
        'img/equipo/slide13.jpg',
        'img/equipo/slide14.jpg',
        'img/equipo/slide15.jpg',
        'img/equipo/slide16.jpg',
        'img/equipo/slide1.jpg', 
        'img/equipo/slide2.jpg',
        'img/equipo/slide3.jpg',
        'img/equipo/slide4.jpg',
        'img/equipo/slide5.jpg',
        'img/equipo/slide6.jpg'
    ];

    $scope.result = 'hidden';
    $scope.resultMessage;
    //$scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    
    $scope.formData = {};

    $scope.submitForm = function (formContacto) {
        alert('Form submitted with' + JSON.stringify($scope.formData));
        $scope.submitted = true;
        if (formContacto.$valid) {
            //$scope.formData.success = '';
            $http({
                method: 'POST',
                url: 'sendmail.php',
                //data: 'nombre=:'+$scope.formData.nombre +'&email='+$scope.formData.email+'&mensaje='+$scope.formData.mensaje,
                data:$.param($scope.formData),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(data){
                console.log(data);
                alert(data.messageSuccess);
                if (data.success) { //success comes from the return json object
                    //$scope.submitButtonDisabled = true;
                    $scope.resultMessage = 'Gracias, la consulta se envio correctamente';
                    $scope.result='bg-success';
                } else {
                    //$scope.submitButtonDisabled = false;
                    $scope.resultMessage = 'Error al enviar la consulta.';
                    $scope.result='bg-danger';
                }
                $scope.formData = {};
            });
        }else {
            //$scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Error, recuerde completar todos los campos';
            $scope.result='bg-danger';
        }
    };
    
});

