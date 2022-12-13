enum Code {
  succes = 200,
  error = 500
}

class Result {
  static success(data: any, msg = '请求成功'){
    return { data, msg, code: Code.succes}
  }
  static fail(msg = '请求失败'){
    return { msg, code: Code.error}
  }
}

export const { success, fail } = Result