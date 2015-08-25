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
    .when("/medicinafisica",{
        templateUrl: "views/mfisica.html"
    })
    .when("/rehabilitacion",{
        templateUrl: "views/rehabilitacion.html"
    })
    .when("/calidad",{
        templateUrl: "views/calidad.html"
    })
    .otherwise({ reditrectTo : "/" });
}

//creamos el modulo y le aplicamos la configuración
var app = angular.module("rehavita", ['ngRoute','uiGmapgoogle-maps','ui.bootstrap']).config(configApp);
