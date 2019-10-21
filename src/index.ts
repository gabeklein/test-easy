import { Express } from "express"
import prettyjson from "prettyjson";
import request, { RequestCallback } from "request";

let url = "http://localhost:3000";

export function use(
  endpoint: number | string | Express, 
  port: number = 7101){

  if(typeof endpoint == "number"){
    url = url.replace("3000", String(endpoint))
  }

  else if(typeof endpoint == "string")
    url = endpoint.replace(/\/?$/, "");

  else {
    endpoint.listen(port);
    console.log(`Service listening on port ${port}`);
    url = url.replace("3000", String(port))
  }
}

export function GET(dir: string, query: any = "", headers = {}){
  request(
    url + dir,
    { method: "GET", json: true, qs: query, headers },
    printResponse(dir, query)
  )
}

export function POST(dir: string, data = {}, headers = {}){
  request(
    url + dir,
    { method: "POST", json: data, headers },
    printResponse(dir, data)
  )
}

export function PUT(dir: string, data = {}, headers = {}){
  request(
    url + dir,
    { method: "PUT", json: data, headers },
    printResponse(dir, data)
  )
}

export function PATCH(dir: string, data = {}, headers = {}){
  request(
    url + dir,
    { method: "PATCH", json: data, headers },
    printResponse(dir, data)
  )
}

export function DELETE(dir: string, headers = {}){
  request(
    url + dir,
    { method: "DELETE", json: true, headers },
    printResponse(dir, {})
  )
}

function printResponse(
  endpoint: string, 
  query: any
): RequestCallback {

  return (err, response, body) => {
    if(err){
      console.error(err);
      return
    }

    const { statusCode, statusMessage } = response;

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