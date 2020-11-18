import { useState, useEffect } from "react";

export default (httpClient) => {
  const [error, setError] = useState(null);

  // state = {
  //   error: null,
  // };

  const reqInterceptor = httpClient.interceptors.request.use((req) => {
    setError(null);
    return req;
  });
  const resInterceptor = httpClient.interceptors.response.use(
    (res) => res,
    (err) => {
      setError(err);
      return Promise.reject(err);
    }
  );

  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(reqInterceptor);
      httpClient.interceptors.response.eject(resInterceptor);
    };
  }, [
    reqInterceptor,
    resInterceptor,
    httpClient.interceptors.request,
    httpClient.interceptors.response,
  ]);

  const errorConfirmedHandler = () => {
    // this.setState({ error: null });
    setError(null);
  };

  return [error, errorConfirmedHandler];
};
