import { Router } from "express";

import { NegocioRoutes } from "./negocio/routes";
import { EncargadoRoutes } from "./encargado/routes";
import { InventarioRoutes} from "./inventario/routes";
import { AutorRoutes } from "./autor/routes";
import { GeneroRoutes } from "./genero/routes";
import { NacionalidadRoutes } from "./nacionalidad/routes";
import { origenIdiomaRoutes } from "./origenIdioma/routes";
import { IdiomaRoutes } from "./idioma/routes";
import { TraduccionesRoutes } from "./traduccionidioma/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/negocios', NegocioRoutes.routes);
        router.use('/api/encargados', EncargadoRoutes.routes);
        router.use('/api/inventario', InventarioRoutes.routes);
        router.use('/api/autores', AutorRoutes.routes);
        router.use('/api/generos', GeneroRoutes.routes);
        router.use('/api/Nacionalidades', NacionalidadRoutes.routes);
        router.use('/api/origenes', origenIdiomaRoutes.routes);
        router.use('/api/idiomas', IdiomaRoutes.routes);
        router.use('/api/traducciones', TraduccionesRoutes.routes);
        return router;
    }
}