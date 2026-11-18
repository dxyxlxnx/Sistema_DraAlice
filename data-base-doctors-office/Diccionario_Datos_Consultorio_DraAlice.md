# Normativas para el desarrollo del proyecto:

- Se usara el estandart camelCase para todo aquel titulo que no sea una entidad (atributos, etc..), en el caso de las entidades se usara la PascualCase para el nobramiento de la mismas de manera exclusiva. 
- El manejo de la información en los registros se manejara usando en mayusculas unica y exclusivamnete.
- La cantidad de caracteres permitido por titulo se mantendra en aproxiados 1 a 3 caracteres por palabra que conforme el titulo en un maximo de 15 caracteres por titulo.
- Para el manejo de los atrivutos en la base de datos estos no tendran restricciones con la cantidad de letras por palabra.
<hr>

# Modelo relacional, glb-env:
    
- PrmUsrSys (*PermissionUserSystem*): entidad fuerte encargada de almacenar los distintos permisos que pueda tener los diferentes usurios del sistema.
- RolUsrSys (*RoleUserSystem*): entidad fuerte que almacenara los distintos roles que peudan haber entre los usuarios del sistema.
- RecPrmUsrSys (*RecordPermissionUserSystem*): entidad relacional que almacenara los diferentes permisos pertenecientes a un mismo usuario. **Entidad dependiente de PrmUsrSys y UsrSys.**
- UsrSys (*UserSystem*): entidad encargada de almacenar la informacion de los usuarios del sitema. **Entidad dependiente de RolUsrSys.**
- PatRec (*PatientRecord*): entidad encargada de almacenar la informacion personal del paciente.
- SchApp (*ScheduledAppointments*): entidad encargada de llevar los registros de las consultas de los pacientes. **entidad dependiente de PatRec.**
- DetSchApp (*DetailScheduledAppointments*): entidad encargada de almacenar el detalle perteneciente a las citas e informacion mas detallada del mismo