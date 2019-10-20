declare namespace HTTP {
  interface Headers {
    "A-IM": string;
    "Accept": string;
    "Accept-Charset": string;
    "Accept-Encoding": string;
    "Accept-Language": string;
    "Accept-Datetime": string;
    "Access-Control-Request-Method": string;
    "Access-Control-Request-Headers": string;
    "Authorization": string;
    "Cache-Control": string;
    "Connection": string;
    "Content-Length": string;
    "Content-Type": string;
    "Cookie": string;
    "Date": string;
    "Expect": string;
    "Forwarded": string;
    "From": string;
    "Host": string;
    "If-Match": string;
    "If-Modified-Since": string;
    "If-None-Match": string;
    "If-Range": string;
    "If-Unmodified-Since": string;
    "Max-Forwards": string;
    "Origin": string;
    "Pragma": string;
    "Proxy-Authorization": string;
    "Range": string;
    "Referer": string;
    "TE": string;
    "User-Agent": string;
    "Upgrade": string;
    "Via": string;
    "Warning": string;
  
    [ key: string ]: string;
  } 
}

export = HTTP;