const UsuarioDataWorker = require("../usuario.dataworker");
const RangoDataWorker = require("../rango.dataworker");
const AccionesDataWorker = require("../acciones.dataworker");
const PermisosDataWorker = require("../permisos.dataworker");
const PermisosEndpointDataWorker = require("../permisosendpoint.dataworker");

const installed = false;

exports.installApp = async()=>
{
    if(installed) return true;
    const cadete = await RangoDataWorker.newRango({"nombre": "Cadete", "poder": 0});
    const oficialI = await RangoDataWorker.newRango({"nombre": "Oficial I", "poder": 1});
    const oficialII = await RangoDataWorker.newRango({"nombre": "Oficial II", "poder": 2}); 
    const oficialIII = await RangoDataWorker.newRango({"nombre": "Oficial III", "poder": 3});
    const oficialLider = await RangoDataWorker.newRango({"nombre": "Oficial III+", "poder": 4});
    const detectiveI = await RangoDataWorker.newRango({"nombre": "Detective I", "poder": 4});
    const detectiveII = await RangoDataWorker.newRango({"nombre": "Detective II", "poder": 4});
    const detectiveIII = await RangoDataWorker.newRango({"nombre": "Detective III", "poder": 5});
    const SGTPrimero = await RangoDataWorker.newRango({"nombre": "Sargento I", "poder": 5});
    const SGTSegundo = await RangoDataWorker.newRango({"nombre": "Sargento II", "poder": 6});
    const TNTPrimero = await RangoDataWorker.newRango({"nombre": "Teniente I", "poder": 7});
    const TNTSegundo = await RangoDataWorker.newRango({"nombre": "Teniente II", "poder": 8});
    const CPTPrimero = await RangoDataWorker.newRango({"nombre": "Capitán I", "poder": 9});
    const CPTSegundo = await RangoDataWorker.newRango({"nombre": "Capitán II", "poder": 10});
    const CPTTercero = await RangoDataWorker.newRango({"nombre": "Capitán III", "poder": 11});
    const Commander = await RangoDataWorker.newRango({"nombre": "Comandante", "poder": 12});
    const AsstChief = await RangoDataWorker.newRango({"nombre": "Asistente del jefe", "poder": 13});
    const Chief = await RangoDataWorker.newRango({"nombre": "Jefe", "poder": 14});


    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.obtener", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.obtener.id", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.buscar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.nuevo", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.editar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.eliminar", acciones: []});    


    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.obtener", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.obtener.id", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.buscar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.nuevo", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.editar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.eliminar", acciones: []});


    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.obtener", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.obtener.id", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.buscar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.nuevo", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.editar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.eliminar", acciones: []});


    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.obtener", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.obtener.id", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.buscar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.nuevo", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.editar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.eliminar", acciones: []});


    await AccionesDataWorker.newAccion({nombre:"accion.eliminar", descripcion:"Permitirá eliminar acciones." });
    await AccionesDataWorker.newAccion({nombre:"permiso.eliminar", descripcion:"Permitirá eliminar permisos." });
    await AccionesDataWorker.newAccion({nombre:"rango.eliminar", descripcion:"Permitirá eliminar rangos." });
    await AccionesDataWorker.newAccion({nombre:"usuario.eliminar", descripcion:"Permitirá eliminar usuarios." });
    await AccionesDataWorker.newAccion({nombre:"ficha.eliminar", descripcion:"Permitirá eliminar fichas." });

    await AccionesDataWorker.newAccion({nombre:"accion.nuevo", descripcion:"Permitirá crear acciones." });
    await AccionesDataWorker.newAccion({nombre:"permiso.nuevo", descripcion:"Permitirá crear permisos." });
    await AccionesDataWorker.newAccion({nombre:"rango.nuevo", descripcion:"Permitirá crear rangos." });
    await AccionesDataWorker.newAccion({nombre:"usuario.nuevo", descripcion:"Permitirá crear usuarios." });
    await AccionesDataWorker.newAccion({nombre:"ficha.nuevo", descripcion:"Permitirá crear fichas." });

    await AccionesDataWorker.newAccion({nombre:"accion.editar", descripcion:"Permitirá editar acciones." });
    await AccionesDataWorker.newAccion({nombre:"permiso.editar", descripcion:"Permitirá editar permisos." });
    await AccionesDataWorker.newAccion({nombre:"rango.editar", descripcion:"Permitirá editar rangos." });
    await AccionesDataWorker.newAccion({nombre:"usuario.editar", descripcion:"Permitirá editar usuarios." });
    await AccionesDataWorker.newAccion({nombre:"ficha.editar", descripcion:"Permitirá editar fichas." });

    await AccionesDataWorker.newAccion({nombre:"accion.obtener", descripcion:"Permitirá obtener acciones." });
    await AccionesDataWorker.newAccion({nombre:"permiso.obtener", descripcion:"Permitirá obtener permisos." });
    await AccionesDataWorker.newAccion({nombre:"rango.obtener", descripcion:"Permitirá obtener rangos." });
    await AccionesDataWorker.newAccion({nombre:"usuario.obtener", descripcion:"Permitirá obtener usuarios." });
    await AccionesDataWorker.newAccion({nombre:"ficha.obtener", descripcion:"Permitirá editaobtener fichas." });

    await AccionesDataWorker.newAccion({nombre:"accion.obtener.id", descripcion:"Permitirá obtener acciones específicas." });
    await AccionesDataWorker.newAccion({nombre:"permiso.obtener.id", descripcion:"Permitirá obtener permisos específicos." });
    await AccionesDataWorker.newAccion({nombre:"rango.obtener.id", descripcion:"Permitirá obtener rangos específicos." });
    await AccionesDataWorker.newAccion({nombre:"usuario.obtener.id", descripcion:"Permitirá obtener usuarios específicos." });
    await AccionesDataWorker.newAccion({nombre:"ficha.obtener.id", descripcion:"Permitirá editaobtener fichas específicos." });


    await UsuarioDataWorker.newUsuario({nombre_usuario:"Wall", clave:"154300922", nombre: "Steve", apellido:"Blair", rango: Chief._id});


}


