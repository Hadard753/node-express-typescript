import * as express from 'express';

// App class will encapsulate our web server.
class App {
  public express: any;

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  //mounts the routes served by the server.
  private mountRoutes (): void {
    const router = express.Router();
    router.get('/', (req: any, res: any) => {
      res.json({
        message: 'Hello World!'
      });
    })
    this.express.use('/', router);
  }
}

// The express instance is reachable through the public express property.
export default new App().express;