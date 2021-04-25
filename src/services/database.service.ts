import { inject, injectable } from "inversify";
import { Connection, createConnection, ObjectType } from "typeorm";
import { TYPES } from "../../dist/core/types.core";
import { Logger } from "../../dist/services/logger.service";


@injectable()
export class DatabaseService {
  private static connection: Connection;

  public constructor(@inject(TYPES.Logger) private readonly logger: Logger) { }

  public async getConnection(): Promise<Connection> {
    if (DatabaseService.connection instanceof Connection) {
      return DatabaseService.connection;
    }

    try {
      DatabaseService.connection = await createConnection();
      this.logger.log('INFO', 'Connection established');
      return DatabaseService.connection;

    } catch (e) {
      this.logger.console.log('ERROR', 'Cannot established connection');
      process.exit(1);
    }
  }

  public async getRepository<T>(repository: ObjectType<T>): Promise<T> {
    const connection = await this.getConnection();
    return await connection.getCustomRepository<T>(repository);
  }

}