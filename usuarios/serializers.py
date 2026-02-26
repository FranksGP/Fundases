from rest_framework import serializers
from .models import Usuario

# El serializer UsuarioSerializer es una clase que hereda de serializers.ModelSerializer, lo que significa que se basa en un modelo de Django para definir los campos que se incluirán en la serialización. En este caso, el modelo utilizado es Usuario, y los campos especificados son 'id', 'username', 'email', 'rol', 'activo' y 'password'. Además, se establece que el campo 'password' es de solo escritura (write_only), lo que significa que no se incluirá en la representación serializada del usuario, pero se podrá utilizar para crear o actualizar un usuario.
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'username', 'email', 'rol', 'activo', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }
# El método create se encarga de crear un nuevo usuario a partir de los datos validados. Primero, extrae la contraseña del diccionario de datos validados, luego crea una instancia del modelo Usuario con los datos restantes (sin la contraseña), establece la contraseña utilizando el método set_password (que se encarga de hashear la contraseña antes de guardarla en la base de datos) y finalmente guarda el usuario en la base de datos y devuelve la instancia del usuario creado.
    def create(self, validated_data):
        password = validated_data.pop('password') # Extrae la contraseña del diccionario de datos validados
        user = Usuario(**validated_data) # Crea una instancia del modelo Usuario con los datos validados (sin la contraseña)
        user.set_password(password) # Establece la contraseña utilizando el método set_password, que se encarga de hashear la contraseña antes de guardarla en la base de datos
        user.save() # Guarda el usuario en la base de datos
        return user # Devuelve la instancia del usuario creado