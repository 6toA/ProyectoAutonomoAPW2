import { Router } from "express";

import { NegocioRoutes } from "./negocio/routes";
import { EncargadoRoutes } from "./encargado/routes";
import { InventarioRoutes} from "./inventario/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/negocios', NegocioRoutes.routes);
        router.use('/api/encargados', EncargadoRoutes.routes);
        router.use('/api/inventario', InventarioRoutes.routes);

        return router;
    }
}