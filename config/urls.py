"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)# El archivo urls.py es el archivo de configuración de URL para el proyecto Django. Define las rutas que se asignan a las vistas de la aplicación. En este caso, se incluyen las rutas para el panel de administración de Django, las rutas para la aplicación 'usuarios' y las rutas para el inicio de sesión y la actualización de tokens utilizando la biblioteca Simple JWT. Cada ruta se asigna a una vista específica que se encargará de manejar las solicitudes HTTP correspondientes.

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('usuarios.urls')),
    path('api/', include('proveedores.urls')),
    path('api/', include('compras.urls')),
    path('api/login/', TokenObtainPairView.as_view()), # La ruta 'api/login/' se asigna a la vista TokenObtainPairView, que es proporcionada por la biblioteca Simple JWT. Esta vista se encarga de manejar las solicitudes de inicio de sesión y generar un par de tokens (access y refresh) para el usuario autenticado. El nombre 'token_obtain_pair' se utiliza para referenciar esta ruta en otras partes del código, como en las pruebas o en la documentación de la API.
    path('api/refresh/', TokenRefreshView.as_view()), # La ruta 'api/refresh/' se asigna a la vista TokenRefreshView, que también es proporcionada por la biblioteca Simple JWT. Esta vista se encarga de manejar las solicitudes de actualización de tokens, lo que permite a los usuarios obtener un nuevo token de acceso utilizando un token de actualización válido. El nombre 'token_refresh' se utiliza para referenciar esta ruta en otras partes del código, como en las pruebas o en la documentación de la API.
    
]
