import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableDefaultStatusContract1650894164387
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'default_status_contract',
        columns: [
          {
            name: 'id_default_status_contract',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            generationStrategy: 'increment',
          },
          {
            name: 'status_contract',
            type: 'varchar(48)',
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.query(
      'INSERT INTO default_status_contract(status_contract) VALUES ("No employee"), ("Waiting for approval"), ("Working on it"), ("Finished")'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('default_status_contract');
  }
}
