import { Express } from "express"
import prettyjson from "prettyjson";
import request, { RequestCallback } from "request";

let url = "http://127.0.0.1:3000/";

export function use(
  endpoint: number | string | Express, 
  port: number = 3000){

  if(typeof endpoint == "number"){
    if(endpoint !== 3000)
      url = url.replace("3000", String(endpoint))
  }

  else if(typeof endpoint == "string")
    url = endpoint.replace(/\/?$/, "/");

  else {
    endpoint.listen(port);
    console.log(`Service listening on port ${port}`);
    if(port !== 3000)
      url = url.replace("3000", String(port))
  }
}

export function GET(url: string, query: any = "", headers = {}){
  request.get(
    url + url,
    { json: true, qs: query, headers },
    printResponse(url, query)
  )
}

export function POST(url: string, data = {}, headers = {}){
  request.post(
    url + url,
    { json: true, form: data, headers },
    printResponse(url, data)
  )
}

export function PUT(url: string, data = {}, headers = {}){
  request.post(
    url + url,
    { json: true, form: data, headers },
    printResponse(url, data)
  )
}

export function PATCH(url: string, data = {}, headers = {}){
  request.patch(
    url + url,
    { json: true, form: data, headers },
    printResponse(url, data)
  )
}

export function DELETE(url: string, headers = {}){
  request.delete(
    url + url,
    { json: true, headers },
    printResponse(url, {})
  )
}

function printResponse(
  endpoint: string, 
  query: any
): RequestCallback {

  return (err, { statusCode, statusMessage }, body) => {
    if(typeof body === "object")
      body = prettyjson.render(body).replace(/\n/g, "\n  ");
  
    if(statusCode >= 300){
      if(/\n/.test(body))
        body = `\n  ${body}`
      console.error(`\n${statusCode}: ${body || statusMessage}`);
    }
    else 
      console.log(
        `\nREQUEST: "${endpoint}"\n `,
        query && prettyjson.render(query).replace(/\n/g, "\n  ").concat("\n"),
        `\nRESPONSE: ${statusCode}\n `,
        body
      );
  }
}