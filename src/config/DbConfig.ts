type TDBConfig = {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

interface EnvConfig {
  dev: TDBConfig;
  prod: TDBConfig;
}

class DbConfig {
  static db = new DbConfig()
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
  getConfig(key = ''): TDBConfig | string | number{
    if(this.isDbConfig(key)) {
      return this.config[this.env][key]
    }
    return this.config[this.env]
  }
  isDbConfig(key: string): key is keyof TDBConfig{
    return ['host', 'user', 'password', 'database', 'port'].includes(key)
  }
}

export const { db } = DbConfig;