# MovieApp
[TOC]
##Codigo fuente
El codigo fuente se puede obtener del seguiente repositorio

`git clone https://github.com/AdrianCaniasRey/MovieApp.git`

##Requisitos
Para la compilacion y generacion de apk sera necesario tener instalado en el equipo:
- Ionic Cli `npm install -g @ionic/cli`
- JDK 8
- Gradle
- Android Studio

##Instalacion
- Una vez clonado el proyecto realizaremos la intalacion de los paquetes.
`npm install`

##Android
###Compilaciones
Para la compilacion de la app tenemos varias opciones las cuales se ejecutaran desde los scripts que se encuentran en el package.json
- Compilación de la app para debug
`npm run android_build_debug`
- Compilación de la app para producción
`npm run android_build_prod`
- Generación de apk firmada de debug
`npm run android_generate_debug_apk`
- Generación de apk firmada para producción
`npm run android_generate_prod_apk`

##Ejecutar en emulador / dispositivo físico
Para poder ejecutar la app directamente en un emulador o dispositivo ejecutar.
**Es necesario tener conectado un dispositvo fisico con la depuracion por usb activa o tener creado un emulador desde android studio:
`npm run android_run`