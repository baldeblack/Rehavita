var configApp = function($routeProvider){
 
    $routeProvider.when("/", {
        templateUrl: "views/home.html"
    })
    .when("/contacto", {
        templateUrl: "views/contacto.html"
    })
    .when("/equipo",{
    	templateUrl: "views/equipo.html"
    })
    .when("/nosotros",{
    	templateUrl: "views/sobrenosotros.html"
    })
    .when("/convenios",{
    	templateUrl: "views/convenios.html"
    })
    .when("/galeria",{
        templateUrl: "views/galeria.html"
    })    
    .when("medicinafisica/equipamiento",{
        templateUrl: "views/equipamiento.html"
    })
    .when("/fisioterapia",{
        templateUrl: "views/fisioterapia.html"
    })
    .when("/adultomayor",{
        templateUrl: "views/adultomayor.html"
    })
    .when("/reumatologia",{
        templateUrl: "views/reumatologia.html"
    })
    .when("/traumatologia",{
        templateUrl: "views/traumatologia.html"
    })
    .otherwise({ reditrectTo : "/" });
}

//creamos el modulo y le aplicamos la configuración
var app = angular.module("rehavita", ['ngRoute','uiGmapgoogle-maps']).config(configApp);