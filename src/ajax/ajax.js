import request from 'superagent'

export default class Ajax {

  static get(url, data = {}, success, failure) {
    request
      .get(this.requestUrl(url))
      .withCredentials()
      .query(data)
      .end((err, res) => {
        if(res && res.ok) {
          success(res.body)
        } else {
          failure(res.body)
        }
      })
  }

  static post(url, data = {}, success, failure) {
    request
      .post(this.requestUrl(url))
      .withCredentials()
      .set('Content-Type', 'application/json')
      .send(data)
      .end((err, res) => {
        if (res && res.ok) {
          success(res.body)
        } else {
          failure(res.body)
        }
      })
  }
  
  static formPost(url, data = {}, success, failure) {
    request
      .post(this.requestUrl(url))
      .withCredentials()
      .type('form')
      .send(data)
      .end((err, res) => {
        if (res && res.ok) {
          success(res.body)
        } else {
          failure(res.body)
        }
      })
  }

  static requestUrl(url) {
    return 'http://159.203.66.121:8080' + url
  }
}