type DBConfig = {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

interface EnvConfig {
  dev: DBConfig;
  prod: DBConfig;
}

class Db {
  static db = new Db()
  env: keyof EnvConfig = 'dev'
  config: EnvConfig = {
    dev: {
      host: 'localhost',
      user: 'admin',
      password: 'admin',
      database: 'dangdang',
      port: 3306,
    },
    prod: {
      host: 'prod.com',
      user: 'admin',
      password: 'admin',
      database: 'dangdang',
      port: 3306,
    }
  }
  constructor(){
    this.env = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'
  }
  // getConfig(): DBConfig;
  getConfig(key = ''): DBConfig | string | number{
    if(this.isDbConfig(key)) {
      return this.config[this.env][key]
    }
    return this.config[this.env]
  }
  isDbConfig(key: string): key is keyof DBConfig{
    return ['host', 'user', 'password', 'database', 'port'].includes(key)
  }
}

export const { db } = Db;